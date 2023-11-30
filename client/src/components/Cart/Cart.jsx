import React from "react";

function Cart() {
  const data = ["shope", "test2"];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => {
        <div className="item" key={item.id}>
          <img src={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.subString(0, 100)}</p>
          </div>
          <div className="price">1 x ${item.price}</div>

          <div className="delete"> delete </div>
        </div>;
      })}
      <div className="total">
        <span>SubTotal</span>
        <span>$123</span>
      </div>
      <div>
        <button>Check</button>
        <span className="reset"> Empty Cart</span>
      </div>
    </div>
  );
}

export default Cart;
