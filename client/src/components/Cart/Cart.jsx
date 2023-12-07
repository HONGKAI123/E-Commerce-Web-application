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

function Cart() {
  const shoppingCartList = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  console.log(shoppingCartList);
  let totalValue = 0;
  shoppingCartList.forEach((element) => {
    totalValue += element.price * element.quantity;
  });

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {shoppingCartList.map((item) => (
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
        <button>Check</button>
        <span className="reset" onClick={() => dispatch(emptyCart())}>
          {" "}
          Empty Cart
        </span>
      </div>
    </div>
  );
}

export default Cart;
