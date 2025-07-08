from flask import request, jsonify
from . import api_bp

@api_bp.route('/menu', methods=['GET'])
def get_menu():
    return jsonify({
        "menu": "Welcome to MenuIT API! Use the endpoints to manage your menu items."
    })
