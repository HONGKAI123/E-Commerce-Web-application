import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Man</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="footer-item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="footer-item">
          <h1>About</h1>
          <span>
            Every business has an origin story worth telling, and usually, one
            that justifies why you even do business and have clients. Some
            centennial enterprises have pages of content that can fit in this
            section, while startups can tell the story of how the company was
            born, its challenges, and its vision for the future.
          </span>
        </div>
        <div className="footer-item">
          <h1>Contact</h1>
          <span>
            Reviews, client logos, case studies, and results bring consistency
            to your About Us page. It’s what really proves what you are saying
            is real and the impact you can bring to future clients. With these
            components in mind, you will have a framework from which to build an
            engaging and unique About Us page.
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="logo">PennyStore</span>
          <span className="copyright">Copyright 2023 All rights Reserved</span>
        </div>
        <div className="footer-bottom-right">
          <img src="/img/payment.png" alt="payment logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
