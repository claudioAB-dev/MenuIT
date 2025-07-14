from flask import Blueprint, request, jsonify
from app.models import Restaurant
from app.extensions import db, bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import re
from slugify import slugify

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

def generate_unique_slug(name):
    """Genera un slug único a partir de un nombre."""
    # Convierte a minúsculas y reemplaza caracteres no alfanuméricos por un guion
    slug_base = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    
    slug = slug_base
    counter = 1
    # Busca si el slug ya existe en la base de datos
    while Restaurant.query.filter_by(slug=slug).first():
        # Si existe, le añade un número al final (ej. mi-restaurante-2)
        slug = f"{slug_base}-{counter}"
        counter += 1
    return slug

@auth_bp.route('/register', methods=['POST'])
def register_restaurant():
    data = request.get_json()
    if not data or not all(field in data for field in ['name', 'address', 'phone', 'email', 'password']):
        return jsonify({"msg": "Faltan datos obligatorios"}), 400

    if Restaurant.query.filter_by(email=data['email']).first():
        return jsonify({"msg": "Un restaurante con este email ya está registrado"}), 409

    try:
        # --- CORRECCIÓN AQUÍ ---
        # 2. Genera el slug único a partir del nombre
        generated_slug = generate_unique_slug(data['name'])

        new_restaurant = Restaurant(
            name=data['name'],
            address=data['address'],
            phone=data['phone'],
            email=data['email'],
            slug=generated_slug  # <- 3. Asigna el slug generado al modelo
        )
        new_restaurant.set_password(data['password'])

        db.session.add(new_restaurant)
        db.session.commit()

        return jsonify({"msg": "Restaurante registrado exitosamente"}), 201
    except Exception as e:
        db.session.rollback()
        print(f"Error detallado: {e}") # Puedes mantener esto para futuras depuraciones
        return jsonify({"msg": "Error interno al registrar el restaurante"}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    Endpoint para el inicio de sesión de un restaurante.
    """
    data = request.get_json()
    email = data.get('email', None)
    password = data.get('password', None)

    if not email or not password:
        return jsonify({"msg": "Falta email o contraseña"}), 400

    restaurant = Restaurant.query.filter_by(email=email).first()

    if restaurant and restaurant.check_password(password):

        identity = str(restaurant.id)
        access_token = create_access_token(identity=identity)
        return jsonify(access_token=access_token)

    return jsonify({"msg": "Email o contraseña incorrectos"}), 401


@auth_bp.route('/profile')
@jwt_required()
def profile():
    """
    Endpoint para obtener el perfil del restaurante autenticado.
    No necesita cambios, el error se origina en la creación del token.
    """
    # get_jwt_identity() ahora recibirá correctamente un string
    current_user_id = get_jwt_identity() 
    
    # SQLAlchemy es flexible y puede buscar un ID usando un string o un int
    restaurant = Restaurant.query.get(current_user_id) 
    
    if not restaurant:
        return jsonify({"msg": "Usuario no encontrado"}), 404
        
    return jsonify(restaurant.serialize()), 200

@auth_bp.route('/admin/restaurant', methods=['POST'])
@jwt_required()
def create_restaurant():
    """
    Crea un nuevo restaurante.
    Un usuario solo puede tener un restaurante.
    """
    data = request.get_json()
    user_id = get_jwt_identity()
    
    # Validar si el usuario ya tiene un restaurante
    if Restaurant.query.filter_by(user_id=user_id).first():
        return jsonify({"msg": "User already has a restaurant"}), 409 # Conflict

    # Validar datos de entrada
    if not all(k in data for k in ('name', 'address', 'phone')):
        return jsonify({"msg": "Missing data: name, address, and phone are required"}), 400

    name = data.get('name')
    
    new_restaurant = Restaurant(
        name=name,
        address=data.get('address'),
        phone=data.get('phone'),
        slug=slugify(name), # Genera un slug a partir del nombre
        user_id=user_id
    )
    
    db.session.add(new_restaurant)
    db.session.commit()
    
    return jsonify(new_restaurant.serialize()), 201

@auth_bp.route('/admin/restaurant', methods=['GET'])
@jwt_required()

def get_my_restaurant():
    """
    Obtiene los datos del restaurante del usuario logueado.
    """
    user_id = get_jwt_identity()
    restaurant = Restaurant.query.filter_by(user_id=user_id).first()
    
    if not restaurant:
        return jsonify({"msg": "Restaurant not found for this user"}), 404
        
    return jsonify(restaurant.serialize()), 200

@auth_bp.route('/admin/restaurant', methods=['PUT'])
@jwt_required()
def update_restaurant():
    """
    Actualiza los datos del restaurante del usuario logueado.
    """
    data = request.get_json()
    user_id = get_jwt_identity()
    
    restaurant = Restaurant.query.filter_by(user_id=user_id).first_or_404()

    # Actualiza los campos si se proporcionan en el request
    if 'name' in data:
        restaurant.name = data['name']
        restaurant.slug = slugify(data['name']) # Actualiza el slug si el nombre cambia
    if 'address' in data:
        restaurant.address = data['address']
    if 'phone' in data:
        restaurant.phone = data['phone']
        
    db.session.commit()
    
    return jsonify(restaurant.serialize()), 200

@auth_bp.route('/admin/restaurant', methods=['DELETE'])
@jwt_required()

def delete_restaurant():
    """
    Elimina el restaurante del usuario logueado.
    """
    user_id = get_jwt_identity()
    restaurant = Restaurant.query.filter_by(user_id=user_id).first_or_404()
    
    db.session.delete(restaurant)
    db.session.commit()
    
    return jsonify({"msg": "Restaurant deleted successfully"}), 200