import React, { useState, useEffect } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./../../services/ProductService";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
const ProductCommon = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const { data } = await getProducts();

    setProducts(data);
  };

  const handleSaveProduct = async (product) => {
    if (product._id) {
      await updateProduct(product._id, product);
    } else {
      await createProduct(product);
    }
    loadProducts();
    setProductToEdit(null);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
  };

  return (
    <div className="container mx-auto p-4">
      <ProductForm onSave={handleSaveProduct} productToEdit={productToEdit} />
      <ProductList
        products={products}
        onDelete={handleDeleteProduct}
        onEdit={handleEditProduct}
      />
    </div>
  );
};

export default ProductCommon;
