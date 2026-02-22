import React, { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {

  const [categories, setCategories] = useState(() => {
  try {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to parse categories from localStorage", error);
    return [];
  }
});


  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]); 

  const addCategory = (categoryName) => {
    const newCategory = {
      id: Date.now(),
      name: categoryName,
      products: 0,
      stock: 0,
    };

    setCategories((prev) => [...prev, newCategory]);
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const updateCategory = (id, newName) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, name: newName } : cat
      )
    );
    setEditingCategory(null);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        deleteCategory,
        updateCategory,
        editingCategory,
        setEditingCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
