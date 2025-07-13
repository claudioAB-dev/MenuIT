from flask import Flask
import os
from dotenv import load_dotenv
from flask_cors import CORS


from . import models
from .extensions import db, bcrypt, jwt, migrate
from .api.admin import auth_bp
#from .api.menu import menu_bp


load_dotenv()

def create_app():
    app = Flask(__name__)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config["JWT_SECRET_KEY"] = os.getenv('JWT_SECRET')

    # Inicializa las extensiones con la app
    db.init_app(app)
    CORS(app, supports_credentials=True, resources={
        r"/auth/*": {"origins": "http://localhost:5173"},
        r"/api/*": {"origins": "http://localhost:5173"}
    })
    migrate.init_app(app, db) 
    jwt.init_app(app)


    # Importar y registrar Blueprints
    from .api import api_bp
    from .api import menu, admin, adminmenu
    app.register_blueprint(auth_bp)
    
    app.register_blueprint(api_bp, url_prefix='/api')

    return app