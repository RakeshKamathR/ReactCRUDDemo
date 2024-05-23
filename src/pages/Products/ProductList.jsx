import React from "react";
import Product from "./Product";

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ProductList;
