import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="images">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url // if something is undefined
            } //item.attributes.img.data.attributes.url is relative path
            alt=""
            className="mainImage"
          />
          {/* <img
            src={
              item.attributes?.img?.data?.attributes?.url
                ? process.env.REACT_APP_UPLOAD_URL +
                  item.attributes.img.data.attributes.url
                : "fallback-image-url.jpg" // choose a optional imgae
            }
          /> */}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img2.data.attributes.url
            }
            alt=""
            className="secImage"
          />
        </div>
        <h2>{item.attributes.title}</h2>
        <div className="price">
          <h4>${item.attributes.oldPrice || item?.attributes.price + 20}</h4>
          <h4>${item.attributes.price}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
