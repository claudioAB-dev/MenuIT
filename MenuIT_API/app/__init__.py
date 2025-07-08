from flask import Flask
from .extensions import db, cors, migrate
import os
from dotenv import load_dotenv
from . import models

load_dotenv()



def create_app():
    app = Flask(__name__)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Inicializa las extensiones con la app
    db.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})
    migrate.init_app(app, db) 

    # Importar y registrar Blueprints
    from .api import api_bp
    from .api import menu, admin  
    
    app.register_blueprint(api_bp, url_prefix='/api')

    return app