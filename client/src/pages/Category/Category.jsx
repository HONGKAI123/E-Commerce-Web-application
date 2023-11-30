import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Category.scss";
import useFetch from "../../components/hooks/useFetch";

function Category() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  const param = useParams().id; //return dynamic routing of URL
  const paramId = +param;
  const [selectSub, setSelectSub] = useState([]);

  //fetch all subcategory has relation with same Category id
  const {
    data: subcategory,
    error,
    loading,
  } = useFetch(`/sub-categories?filters[categories][id][$eq]=${paramId}`);

  //category sorting
  const filterBySubCategory = (e) => {
    const isChecked = e.target.checked; // determine if checkbox is checked or not
    const value = e.target.value;
    isChecked
      ? setSelectSub([...selectSub, value])
      : setSelectSub(selectSub.filter((item) => item !== value));
  };

  //price sorting funcionalities
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
          {subcategory.map((sub) => {
            return (
              <div className="filterItems" key={sub.id}>
                <input
                  type="checkbox"
                  value={sub.id}
                  id={sub.id}
                  onChange={filterBySubCategory}
                />
                <label htmlFor="coats">{sub.attributes.title}</label>
              </div>
            );
          })}
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
        <List categoryID={paramId} subCategory={selectSub} />
      </div>
    </div>
  );
}

export default Category;
