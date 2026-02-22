import React, { useEffect, useState } from "react";

const AddCategory = ({ isShow, onAdd, editingCategory, onUpdate }) => {
  const [name, setName] = useState(editingCategory ? editingCategory.name : "");
  useEffect(() => {
    if (editingCategory) setName(editingCategory.name);
  }, [editingCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    isShow(false); // close after submit

    if (!name.trim()) return;

    if (editingCategory) {
      onUpdate(editingCategory.id, name); // update existing
    } else {
      onAdd(name); // add new
    }

    setName("");
    isShow(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[420px] p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center text-xl font-semibold mb-2">
          <h2>Add Category</h2>
          <button onClick={() => isShow(false)}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category name"
            className="border p-2 rounded"
            required
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => isShow(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
