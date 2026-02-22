import React, { useState } from "react";
import AddProduct from "./AddProduct";
import { useProduct } from "../Contexts/ProductContext";

const Products = () => {
  const [isShow, setIsShow] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { products, deleteProduct } = useProduct();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-10">
        <p className="text-xl font-medium">Products</p>
        <button
          className="font-semibold px-3 py-2 text-white bg-gray-800 rounded-lg"
          onClick={() => {
            setEditingProduct(null);
            setIsShow(true);
          }}
        >
          Add Product
        </button>
      </div>

      {isShow && (
        <AddProduct
          isShow={setIsShow}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
        />
      )}

      <div className="mt-10 mb-10 px-10 py-2">
        <table className="w-full border">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-2 py-2 text-center">Image</th>
              <th className="px-2 py-2 text-center">Name</th>
              <th className="px-2 py-2 text-center">Category</th>
              <th className="px-2 py-2 text-center">Stock</th>
              <th className="px-2 py-2 text-center">Sizes & Prices</th>
              <th className="px-2 py-2 text-center">Order Type</th>
              <th className="px-2 py-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No products added
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="border text-center">
                  <td>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-14 h-14 rounded-full mx-auto border border-black/30"
                    />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.stock}</td>
                  <td>
                    S: ₹{p.prices?.small ?? 0} <br />
                    M: ₹{p.prices?.medium ?? 0} <br />
                    L: ₹{p.prices?.large ?? 0}
                  </td>
                  <td>{p.orderType?.join(", ")}</td>
                  <td>
                    <button
                      onClick={() => {
                        setEditingProduct(p);
                        setIsShow(true);
                      }}
                      className="text-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
