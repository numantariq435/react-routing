import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product Details</h1>
      <h3>{params.productId}</h3>
    </section>
  );
};

export default ProductDetail;
