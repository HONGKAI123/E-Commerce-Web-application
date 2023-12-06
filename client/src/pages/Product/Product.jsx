import React, { useState, useEffect, useMemo } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

function Product() {
  //everytime add quantity, we will re-render this component, but the id isn't change.
  const id = useParams().id;
  const fetchurl = useMemo(() => `/products/${id}/?populate=*`, [id]);

  //only send request when id change
  const { data: product, error, loading } = useFetch(fetchurl);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  //destructing products infromation from api call
  const { attributes: { title, price, desc } = {} } = product;

  //call dispatch hook
  const dispatch = useDispatch();

  //fix the problem of page always stays on same position while enter product page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="product">
      {loading ? (
        "loading details"
      ) : (
        <>
          <div className="left">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                product?.attributes?.img.data.attributes.url
              }
              onClick={() => setSelectedImg("img")}
              alt={product?.attributes?.img.data.attributes.alternativeText}
            />
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                product?.attributes?.img2.data?.attributes.url
              }
              onClick={() => setSelectedImg("img2")}
              alt={product?.attributes.img2?.data?.attributes.alternativeText}
            />
          </div>

          <div className="mainImg">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                product?.attributes[selectedImg]?.data?.attributes.url
              }
              alt={product?.attributes?.img2?.data?.attributes?.alternativeText}
            />
          </div>
          <div className="right">
            <h1>{title}</h1>
            <span className="price">${price}</span>
            <p>{desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="addToCart"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: title,
                    quantity,
                    desc: desc,
                    price: price,
                    img: product.attributes.img.data.attributes.url,
                  })
                )
              }
            >
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
        </>
      )}
    </div>
  );
}

export default React.memo(Product);
