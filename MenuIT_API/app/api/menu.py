from flask import request, jsonify
from app.models import Restaurant, Dishes, Category

from . import api_bp


@api_bp.route('/menu/<string:slug>', methods=['GET'])
def get_public_menu(slug):
    """
    Obtiene el menú público de un restaurante por su slug.
    """
    restaurant = Restaurant.query.filter_by(slug=slug).first_or_404()
    
    categories = Category.query.filter_by(restaurant_id=restaurant.id).all()
    
    menu_data = {
        'restaurant': {
            'id': restaurant.id,
            'name': restaurant.name,
            'address': restaurant.address,
            'phone': restaurant.phone,
            'slug': restaurant.slug
        },
        'categories': []
    }
    
    for category in categories:
        dishes = Dishes.query.filter_by(restaurant_id=restaurant.id, category_id=str(category.id), is_active=True).all()
        
        # Omitir categorías que no tengan platillos activos
        if not dishes:
            continue

        category_data = {
            'id': category.id,
            'name': category.name,
            'description': category.description,
            'dishes': [dish.serialize() for dish in dishes]
        }
        menu_data['categories'].append(category_data)
        
    return jsonify(menu_data), 200