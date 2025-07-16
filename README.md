🚀 MenuIT - Digital Menu Management System
MenuIT is a complete web-based solution that allows restaurants to digitalize, manage, and share their menus in a simple and elegant way. Forget outdated PDF menus — offer your customers an interactive, always-up-to-date experience.

✨ Key Features
Secure Admin Panel: Manage your restaurant with JWT-based authentication.

Category & Dish Management: Create, edit, delete, and organize your menu items by category (Appetizers, Main Dishes, Desserts, Drinks, etc.).

Visibility Control: Easily toggle dishes on or off based on availability.

Public Menu URL: Every restaurant gets a unique, shareable URL (e.g., /menu/your-restaurant-name).

Auto Session Timeout: Admin sessions expire after inactivity for security.

Responsive Design: Clean, modern interface that works seamlessly on desktop and mobile.

🛠️ Tech Stack
The project is divided into two main parts: a RESTful API backend and a SPA (Single Page Application) frontend.

🔧 Backend (Directory: MenuIT_API)
Framework: Flask

Language: Python

Database: SQLAlchemy (compatible with SQLite, PostgreSQL, etc.)

Migrations: Flask-Migrate (Alembic)

Authentication: Flask-JWT-Extended

CORS: Flask-Cors

🎨 Frontend (Directory: MenuIT)
Library: React

Language: TypeScript

UI: Custom components with plain CSS

Routing: React Router DOM

Bundler: Vite

🚀 Getting Started
Follow these steps to set up the project locally.

🔧 Prerequisites
Node.js (v18+)

Python (v3.8+)

pip and virtualenv

1️⃣ Backend Setup (API)
bash
Copiar
Editar
# 1. Clone the repository
git clone https://github.com/your-username/MenuIT.git
cd MenuIT/MenuIT_API

# 2. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install Python dependencies
pip install -r ../requirements.txt

# 4. Set environment variables (you can use a .flaskenv file)
export SECRET_KEY='your-very-secret-key'
export FLASK_APP=run.py
export FLASK_DEBUG=1  # Optional: for development mode

# 5. Apply database migrations
flask db upgrade

# 6. Start the API server (default: http://127.0.0.1:5000)
flask run
2️⃣ Frontend Setup (React)
bash
Copiar
Editar
# 1. Open a new terminal and navigate to the frontend directory
cd MenuIT/MenuIT

# 2. Install Node.js dependencies
npm install

# 3. Set the API URL in a .env file
echo "VITE_API_URL=http://127.0.0.1:5000" > .env

# 4. Start the development server (default: http://localhost:5173)
npm run dev
Open http://localhost:5173 in your browser to see the app in action.

📋 Usage
Register: Go to the registration page and create an account for your restaurant.

Log In: Access the admin panel using your credentials.

Create Categories: Organize your menu with categories.

Add Dishes: Add items with descriptions, prices, and images.

Share Your Menu: Use the public link from your profile to share with customers.

