import React, { useEffect } from "react";
import "./paymentSuccessful.scss";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/cartReducer";

function PaymentSuccessful() {
  const [currentQuery, setcurrentQuery] = useSearchParams();
  const status = currentQuery.get("success"); // http://localhost:3000/payment?search=success , get(search) things inside search should match query
  console.log(status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "true") {
      dispatch(emptyCart());
    }
  }, [status]);

  return (
    <div className="card-success">
      <div
        style={{
          borderRadius: "200px",
          height: "200px",
          width: "200px",
          background: "#F8FAF5",
          margin: "auto",
        }}
      >
        <i className="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
}

export default PaymentSuccessful;
