from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func, Enum as SQLAlchemyEnum
from werkzeug.security import generate_password_hash, check_password_hash
import enum
from .extensions import db

# Define la tabla Restaurants
class Restaurant(db.Model):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    slug = db.Column(db.String(100), nullable=False, unique=True)
    image_url_1 = db.Column(db.String(200), nullable=True)
    image_url_2 = db.Column(db.String(200), nullable=True)
    image_url_3 = db.Column(db.String(200), nullable=True)
    image_url_4 = db.Column(db.String(200), nullable=True)
    subscription_id_processor = db.Column(db.String(100), nullable=True)
    customer_id_processor = db.Column(db.String(100), nullable=True)
    current_period_end = db.Column(db.DateTime, nullable=True)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'address': self.address,
            'phone': self.phone,
            'email': self.email,
            'slug': self.slug,
            'image_url_1': self.image_url_1,
            'image_url_2': self.image_url_2,
            'image_url_3': self.image_url_3,
            'image_url_4': self.image_url_4,
            'subscription_id_processor': self.subscription_id_processor,
            'customer_id_processor': self.customer_id_processor,
            'current_period_end': self.current_period_end
        }
    

#Define la tabla Dishes

class Dishes(db.Model):
    __tablename__ = 'dishes'
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=True)
    price = db.Column(db.Float, nullable=False)
    image_url_1 = db.Column(db.String(200), nullable=True)
    image_url_2 = db.Column(db.String(200), nullable=True)
    image_url_3 = db.Column(db.String(200), nullable=True)  
    category_id = db.Column(db.String(50), nullable=False)
    is_active = db.Column(db.Boolean, default=True)

    restaurant = db.relationship('Restaurant', backref=db.backref('dishes', lazy=True))

    def serialize(self):
        return {
            'id': self.id,
            'restaurant_id': self.restaurant_id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'image_url_1': self.image_url_1,
            'image_url_2': self.image_url_2,
            'image_url_3': self.image_url_3,
            'category_id': self.category_id,
            'is_active': self.is_active
        }
# Define la tabla categories

class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=True)
    image_url = db.Column(db.String(200), nullable=True)