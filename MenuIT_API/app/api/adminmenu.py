from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Restaurant, Dishes, Category
from . import api_bp

# Blueprint para el menú de administración
admin_menu_bp = Blueprint('admin_menu', __name__, url_prefix='/adminmenu')

# --- ENDPOINTS PARA PLATILLOS (DISHES) ---

@admin_menu_bp.route('/dishes', methods=['POST'])
@jwt_required()
def create_dish():
    """
    Crea un nuevo platillo para el restaurante autenticado.
    """
    current_user_id = get_jwt_identity()
    data = request.get_json()

    missing_keys = [key for key in ['name', 'price', 'category_id'] if key not in (data or {})]
    if not data or missing_keys:
        print(f"[DEBUG] Datos recibidos: {data}")
        print(f"[DEBUG] Faltan los siguientes campos: {missing_keys}")
        return jsonify({
            "msg": f"Faltan datos: {', '.join(missing_keys)} son requeridos",
            "received": data,
            "missing": missing_keys
        }), 400
    new_dish = Dishes(
        restaurant_id=current_user_id,
        name=data['name'],
        description=data.get('description'),
        price=data['price'],
        category_id=str(data['category_id']),
        image_url_1=data.get('image_url_1'),
        is_active=data.get('is_active', True)
    )
    db.session.add(new_dish)
    db.session.commit()

    return jsonify(new_dish.serialize()), 201

@admin_menu_bp.route('/dishes', methods=['GET'])
@jwt_required()
def get_dishes():
    """
    Obtiene todos los platillos del restaurante autenticado.
    """
    current_user_id = get_jwt_identity()
    dishes = Dishes.query.filter_by(restaurant_id=current_user_id).all()
    return jsonify([dish.serialize() for dish in dishes]), 200

@admin_menu_bp.route('/dishes/<int:dish_id>', methods=['GET'])
@jwt_required()
def get_dish(dish_id):
    """
    Obtiene un platillo específico.
    """
    current_user_id = get_jwt_identity()
    dish = Dishes.query.filter_by(id=dish_id, restaurant_id=current_user_id).first_or_404()
    return jsonify(dish.serialize()), 200

@admin_menu_bp.route('/dishes/<int:dish_id>', methods=['PUT'])
@jwt_required()
def update_dish(dish_id):
    """
    Actualiza un platillo específico.
    """
    current_user_id = get_jwt_identity()
    dish = Dishes.query.filter_by(id=dish_id, restaurant_id=current_user_id).first_or_404()
    data = request.get_json()

    dish.name = data.get('name', dish.name)
    dish.description = data.get('description', dish.description)
    dish.price = data.get('price', dish.price)
    dish.category_id = data.get('category_id', dish.category_id)
    dish.image_url_1 = data.get('image_url_1', dish.image_url_1)
    dish.is_active = data.get('is_active', dish.is_active)

    db.session.commit()
    return jsonify(dish.serialize()), 200

@admin_menu_bp.route('/dishes/<int:dish_id>', methods=['DELETE'])
@jwt_required()
def delete_dish(dish_id):
    """
    Elimina un platillo específico.
    """
    current_user_id = get_jwt_identity()
    dish = Dishes.query.filter_by(id=dish_id, restaurant_id=current_user_id).first_or_404()
    
    db.session.delete(dish)
    db.session.commit()
    return jsonify({"msg": "Platillo eliminado correctamente"}), 200

# --- ENDPOINTS PARA CATEGORÍAS (CATEGORIES) ---

@admin_menu_bp.route('/categories', methods=['POST'])
@jwt_required()
def create_category():
    """
    Crea una nueva categoría para el restaurante autenticado.
    """
    current_user_id = get_jwt_identity()
    data = request.get_json()

    if not data or 'name' not in data:
        return jsonify({"msg": "El nombre de la categoría es requerido"}), 400

    new_category = Category(
        restaurant_id=current_user_id,
        name=data['name'],
        description=data.get('description'),
        image_url=data.get('image_url')
    )
    db.session.add(new_category)
    db.session.commit()
    # Asumiendo que Category tiene un método serialize, si no, hay que crearlo.
    return jsonify({"id": new_category.id, "name": new_category.name, "description": new_category.description}), 201

@admin_menu_bp.route('/categories', methods=['GET'])
@jwt_required()
def get_categories():
    """
    Obtiene todas las categorías del restaurante autenticado.
    """
    current_user_id = get_jwt_identity()
    categories = Category.query.filter_by(restaurant_id=current_user_id).all()
    # Asumiendo que Category tiene un método serialize.
    return jsonify([{"id": c.id, "name": c.name, "description": c.description} for c in categories]), 200

@admin_menu_bp.route('/categories/<int:category_id>', methods=['PUT'])
@jwt_required()
def update_category(category_id):
    """
    Actualiza una categoría específica.
    """
    current_user_id = get_jwt_identity()
    category = Category.query.filter_by(id=category_id, restaurant_id=current_user_id).first_or_404()
    data = request.get_json()

    category.name = data.get('name', category.name)
    category.description = data.get('description', category.description)
    category.image_url = data.get('image_url', category.image_url)

    db.session.commit()
    return jsonify({"id": category.id, "name": category.name, "description": category.description}), 200

@admin_menu_bp.route('/categories/<int:category_id>', methods=['DELETE'])
@jwt_required()
def delete_category(category_id):
    """
    Elimina una categoría específica.
    """
    current_user_id = get_jwt_identity()
    category = Category.query.filter_by(id=category_id, restaurant_id=current_user_id).first_or_404()
    
    db.session.delete(category)
    db.session.commit()
    return jsonify({"msg": "Categoría eliminada correctamente"}), 200

api_bp.register_blueprint(admin_menu_bp)