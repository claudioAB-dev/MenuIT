from flask import Flask
from .extensions import db, cors
import os
from dotenv import load_dotenv  

load_dotenv()  

def create_app():
    app = Flask(__name__)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})
    
    from .api import api_bp

    from .api import menu
    app.register_blueprint(api_bp, url_prefix='/api')

    return app