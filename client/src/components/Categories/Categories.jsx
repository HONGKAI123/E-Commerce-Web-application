import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <div className="col-1">
        <div className="col-1-row-1">
          {/* <img src="https://m.media-amazon.com/images/I/71HXA5Rx6EL._AC_UY350_.jpg" /> */}
          {/* <img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--wag5PEO3--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1631192421979/Pants.png" /> */}
          <button>
            <Link className="link" to="/category/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="col-1-row-2">
          {/* <img src="https://www.trueclassictees.com/cdn/shop/products/chino-01.jpg?height=300&v=1660854019&em-format=auto" /> */}
          <button>
            <Link className="link" to="/products/1">
              Woman
            </Link>
          </button>
        </div>
      </div>
      <div className="col-2">
        <div className="col-2-row-1">
          <button>
            <Link className="link" to="/products/1">
              New season
            </Link>
          </button>
        </div>
      </div>
      <div className="col-3-lg">
        <div className="col-3-row-1">
          <div className="col-3-row-1-col-1">
            <button>
              <Link className="link" to="/products/1">
                men
              </Link>
            </button>
          </div>
          <div className="col-3-row-1-col-2">
            <button>
              <Link className="link" to="/products/1">
                accessories
              </Link>
            </button>
          </div>
        </div>
        <div className="col-3-row-2">
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
