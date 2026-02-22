import React, { useState, useEffect } from "react";
import { useProduct } from "../Contexts/ProductContext";
import { useCategory } from "../Contexts/CategoryContext";

const AddProduct = ({ isShow, editingProduct, setEditingProduct }) => {
  const { addProduct, updateProduct } = useProduct();
  const { categories } = useCategory(); // ✅ categories from dashboard

  const [form, setForm] = useState({
    name: "",
    category: "",
    stock: "",
    prices: { small: "", medium: "", large: "" },
    orderType: [],
    image: "",
  });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handlePriceChange = (size, value) =>
    setForm((prev) => ({ ...prev, prices: { ...prev.prices, [size]: value } }));

  const handleCheckbox = (type) =>
    setForm((prev) => ({
      ...prev,
      orderType: prev.orderType.includes(type)
        ? prev.orderType.filter((t) => t !== type)
        : [...prev.orderType, type],
    }));

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () =>
      setForm((prev) => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingProduct
      ? updateProduct(editingProduct.id, form)
      : addProduct(form);

    setEditingProduct(null);
    isShow(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[420px] p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center text-xl font-semibold mb-2">
          <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>
          <button onClick={() => isShow(false)}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="file" accept="image/*" onChange={handleImage} className="border p-2" required={!editingProduct} />
          <input type="text" name="name" value={form.name} placeholder="Product name" onChange={handleChange} className="border p-2 rounded" required />

          {/* ✅ Dynamic Categories */}
          <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>

          <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="border p-2 rounded" required />

          <h3 className="font-medium mt-2">Sizes & Price</h3>
          <input type="number" placeholder="Small price" value={form.prices.small} onChange={(e) => handlePriceChange("small", e.target.value)} className="border p-2 rounded" />
          <input type="number" placeholder="Medium price" value={form.prices.medium} onChange={(e) => handlePriceChange("medium", e.target.value)} className="border p-2 rounded" />
          <input type="number" placeholder="Large price" value={form.prices.large} onChange={(e) => handlePriceChange("large", e.target.value)} className="border p-2 rounded" />

          <h3 className="font-medium mt-2">Order Type</h3>
          <div className="flex gap-4 text-sm">
            {["Dine In", "Takeaway", "Delivery"].map((type) => (
              <label key={type}>
                <input type="checkbox" checked={form.orderType.includes(type)} onChange={() => handleCheckbox(type)} /> {type}
              </label>
            ))}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={() => isShow(false)} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded">{editingProduct ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
