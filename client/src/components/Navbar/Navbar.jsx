import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import UserDropdown from "./UserDropdown/UserDropdown";
// import { store } from "../../redux/store";
function Navbar() {
  // const currentState = store.getState();
  // console.log(currentState);
  const products = useSelector((state) => state.cart.products);
  const [openCart, setOpenCart] = useState(false);
  const [openUserDropdown, setOpenUserDropdown] = useState(false);
  const openUser = () => setOpenUserDropdown(true);
  const closeUser = () => setOpenUserDropdown(false);
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <div className="navbar-left-item">
            <img src="/img/en.png" alt="language icon" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="navbar-left-item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="navbar-left-item">
            <Link className="link" to="/category/1">
              Woman
            </Link>
          </div>
          <div className="navbar-left-item">
            <Link className="link" to="/category/2">
              Man
            </Link>
          </div>
          <div className="navbar-left-item">
            <Link className="link" to="/category/3">
              Children
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="link" to="/">
            PennyStore
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-item">
            <Link className="link" to="/">
              HomePage
            </Link>
          </div>
          <div className="navbar-right-item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="navbar-right-item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>

          <div className="navbar-right-icons">
            <SearchIcon />
            <div
              className="user-icon"
              onMouseEnter={openUser}
              onMouseLeave={closeUser}
            >
              <PersonIcon />
              {openUserDropdown && <UserDropdown />}
            </div>

            <FavoriteBorderIcon />
            <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartCheckoutIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {openCart && <Cart />}
    </div>
  );
}

export default Navbar;
