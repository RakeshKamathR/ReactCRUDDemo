import React, { useState, useEffect } from "react";

const ProductForm = ({ onSave, productToEdit }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    setProduct({ name: "", price: "", description: "" });
  };

  return (
    <form className="p-4 border rounded shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default ProductForm;
