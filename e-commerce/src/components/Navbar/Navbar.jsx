import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
function Navbar() {
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
          <div className="navbar-right-item">
            <Link className="" to="/">
              Stores
            </Link>
          </div>
          <div className="navbar-right-icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="cart-icon">
              <ShoppingCartCheckoutIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
