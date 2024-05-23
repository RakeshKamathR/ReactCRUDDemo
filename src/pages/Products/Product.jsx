import React from "react";

const Product = ({ product, onDelete, onEdit }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-800">${product.price}</p>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded mt-2"
        onClick={() => onDelete(product._id)}
      >
        Delete
      </button>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded mt-2 ml-2"
        onClick={() => onEdit(product)}
      >
        Edit
      </button>
    </div>
  );
};

export default Product;
