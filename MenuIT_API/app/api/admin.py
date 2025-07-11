from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from ..models import Restaurant 

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"msg": "Faltan email o contraseña"}), 400

    email = data.get('email')
    password = data.get('password')

    restaurant = Restaurant.query.filter_by(email=email).first()

    if not restaurant or not restaurant.check_password(password):
        return jsonify({"msg": "Credenciales incorrectas"}), 401

    access_token = create_access_token(identity=restaurant.id)
    
    # 5 Devolver el token
    return jsonify(access_token=access_token)

@auth_bp.route('/profile', methods=['GET'])
@jwt_required()  
def profile():
    current_restaurant_id = get_jwt_identity()
    
    restaurant = Restaurant.query.get(current_restaurant_id)
    
    if not restaurant:
        return jsonify({"msg": "Restaurante no encontrado"}), 404
        
    return jsonify(restaurant.serialize()), 200