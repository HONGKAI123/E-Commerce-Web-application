import React, { useState, useEffect } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";

function Product() {
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const image = [
    "https://images.pexels.com/photos/2382255/pexels-photo-2382255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="product">
      <div className="left">
        <img src={image[0]} onClick={() => setSelectedImg(0)} />
        <img src={image[1]} onClick={() => setSelectedImg(1)} />
      </div>
      <div className="mainImg">
        <img src={image[selectedImg]} />
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          {" "}
          Reviews, client logos, case studies, and results bring consistency to
          your About Us page. It’s what really proves what you are saying is
          real and the impact you can bring to future clients. With these
          components in mind, you will have a framework from which to build an
          engaging and unique About Us page.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="addToCart">
          <AddShoppingCartIcon />
          Add to Cart
        </button>
        <div className="link">
          <div className="item">Add to wishlist</div>
          <div className="item">Add to compare</div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
