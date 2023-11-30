import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Category.scss";

function Category() {
  const param = useParams().id; //return dynamic routing of URL
  const paramId = +param;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  const filterByPriceHandler = (e) => {
    setMaxPrice(e.target.value);
  };
  const sortByHigherPriceHandler = () => setSort("desc");
  const sortByLowerPriceHandler = () => setSort("asc");
  return (
    <div className="category">
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          <div className="filterItems">
            <input type="checkbox" value="hat" id="shoes" />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div className="filterItems">
            <input type="checkbox" value="skirt" id="skirt" />
            <label htmlFor="skirt">Skirt</label>
          </div>
          <div className="filterItems">
            <input type="checkbox" value="coats" id="shoes" />
            <label htmlFor="coats">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Fliter by price</h2>
          <p>under {maxPrice}</p>
          <input
            type="range"
            min="0"
            max="2000"
            onChange={filterByPriceHandler}
          />
        </div>
        <div className="filterItem">
          <h2>Sort BY</h2>
          <div>
            {/* radio input has same name value can only have one selection */}
            <input
              type="radio"
              id="asc"
              name="price"
              onChange={sortByLowerPriceHandler}
            />
            <label htmlFor="asc">Low to High</label>{" "}
          </div>
          <div className="div">
            <input
              type="radio"
              id="desc"
              name="price"
              onChange={sortByHigherPriceHandler}
            />
            <label htmlFor="desc">High to low </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="heroImg"
        />
        <List />
      </div>
    </div>
  );
}

export default Category;