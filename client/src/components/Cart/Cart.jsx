import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import {
  deleteItem,
  emptyCart,
  increaseItem,
  decreaseItem,
} from "../../redux/cartReducer";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../axios/makeRequest";

function Cart() {
  const shoppingCartList = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  console.log(shoppingCartList);
  let totalValue = 0;
  shoppingCartList.forEach((element) => {
    totalValue += element.price * element.quantity;
  });
  const stripePromise = loadStripe(
    "pk_test_51OKaPbCTngde044wOhj0iWJk3gSTnz5X1BrM8wiee2MxSVRl5JAyNw3aEbkEGUW6LFuLIYAbMOFqaGCBnf32SRQ400WpzELpsA"
  );
  const handlerPayment = async () => {
    try {
      const stripePayment = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products: shoppingCartList,
      });
      await stripePayment.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {shoppingCartList?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item?.desc?.substring(0, 100)}</p>
            <div className="price">
              <RemoveIcon onClick={() => dispatch(decreaseItem(item.id))} />
              {item.quantity} x ${item.price}
              <AddIcon onClick={() => dispatch(increaseItem(item.id))} />
            </div>
          </div>

          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(deleteItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SubTotal</span>
        <span>${totalValue.toFixed(2)}</span>
      </div>
      <div>
        <button onClick={handlerPayment}>Check</button>
        <span className="reset" onClick={() => dispatch(emptyCart())}>
          {" "}
          Empty Cart
        </span>
      </div>
    </div>
  );
}

export default Cart;
