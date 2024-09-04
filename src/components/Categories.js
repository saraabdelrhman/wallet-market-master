import React, { useState, useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [newCategory, setNewCategory] = useState(''); 

  useEffect(() => {
    fetch('https://wallyt.com/categories') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddCategory = () => {
    const category = { name: newCategory };

    fetch('https://wallyt.com/categories', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add category');
        }
        return response.json();
      })
      .then((data) => {
        setCategories([...categories, data]);
        setNewCategory('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateCategory = (id) => {
    const updatedCategory = prompt('Enter new category name:');
    if (!updatedCategory) return;

    fetch(`https://wallyt.com/categories/${id}`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: updatedCategory }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update category');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(categories.map((cat) => (cat.id === id ? data : cat)));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleDeleteCategory = (id) => {
    fetch(`/categories/${id}`, { 
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete category');
        }
        setCategories(categories.filter((cat) => cat.id !== id)); 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (loading) {
    return <div className="m-5 p-5">Loading categories...</div>;
  }

  if (error) {
    return <div className="m-5 p-5">Error: {error}</div>;
  }

  return (
    <div className="m-5 p-5">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="d-flex justify-content-between align-items-center">
            {category.name}
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => handleUpdateCategory(category.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDeleteCategory(category.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>
    </div>
  );
}
