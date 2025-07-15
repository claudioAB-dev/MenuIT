import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPublicMenu } from "../services/publicMenuService";
import "./styles/PublicMenuPage.css";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url_1: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  dishes: Dish[];
}

interface Restaurant {
  name: string;
  address: string;
  phone: string;
}

interface MenuData {
  restaurant: Restaurant;
  categories: Category[];
}

const PublicMenuPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchMenu = async () => {
        try {
          setLoading(true);
          const data = await getPublicMenu(slug);
          setMenuData(data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchMenu();
    }
  }, [slug]);

  if (loading) {
    return <div className="menu-loading">Cargando menú... 🍽️</div>;
  }

  if (error) {
    return <div className="menu-error">Error: {error}</div>;
  }

  if (!menuData) {
    return <div className="menu-error">No se encontró el menú.</div>;
  }

  const { restaurant, categories } = menuData;

  return (
    <div className="public-menu-container">
      <header className="menu-header">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
        <p>{restaurant.phone}</p>
      </header>

      <div className="menu-content">
        {categories.length > 0 ? (
          categories.map((category) => (
            <section key={category.id} className="category-section">
              <h2 className="category-title">{category.name}</h2>
              {category.description && (
                <p className="category-description">{category.description}</p>
              )}
              <div className="dishes-grid">
                {category.dishes.map((dish) => (
                  <div key={dish.id} className="dish-card">
                    {dish.image_url_1 && (
                      <img
                        src={dish.image_url_1}
                        alt={dish.name}
                        className="dish-image"
                      />
                    )}
                    <div className="dish-details">
                      <h3 className="dish-name">{dish.name}</h3>
                      {dish.description && (
                        <p className="dish-description">{dish.description}</p>
                      )}
                    </div>
                    <div className="dish-price">${dish.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="empty-menu">
            Este restaurante aún no tiene platillos en su menú.
          </p>
        )}
      </div>
    </div>
  );
};

export default PublicMenuPage;
