import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";
import useFetch from "../hooks/useFetch";

function FeaturedProducts({ type }) {
  const { data, error, loading } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  const products = data;

  return (
    <div className="featuredProducts">
      <div className="fp-top">
        <h2>{type} products</h2>
        <p>
          Welcome to our Featured Products section, where we showcase a curated
          selection of standout items especially chosen for you. Dive into a
          collection that represents the best of what our store offers, from
          timeless classics to innovative new arrivals.
        </p>
      </div>
      <div className="fp-bottom">
        {error
          ? "something wrong with fetch"
          : loading
          ? "loading"
          : products.map((product) => {
              return <Card key={product.id} item={product} />;
            })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
