import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import useFetch from "../hooks/useFetch";

function List({ categoryID, subCategory, maxPrice, sortBy }) {
  const fetch_query = subCategory
    .map((id) => `filters[sub_categories][id][$eq]=${id}`) //fetch all the information where categoryID = useParams; filter base on subCategories
    .join("&");
  const filterByPrice = `&filters[price][$lt]=${maxPrice}`;
  const {
    data: products,
    error,
    loading,
  } = useFetch(
    //if fetch_query is empty, it will convert to empty string, since map a empty arr return a empty arr
    //convert empty array to string using ` ` will become an empty string, so it will not influence fetch

    `/products/?populate=*&${fetch_query}&filters[categories][id][$eq]=${categoryID}${filterByPrice}`
    /*error testing
     `/products/10`
     */
  );
  // console.log(products);
  //sort products
  //can also strapi to sort products : &sort=price:asc
  const sortedProducts =
    sortBy === "asc"
      ? [...products].sort((a, b) => a.attributes.price - b.attributes.price)
      : sortBy === "desc"
      ? [...products].sort((a, b) => b.attributes.price - a.attributes.price)
      : products;

  // console.log(products);
  return (
    <div className="list">
      {error && <p>{error.message}</p>}
      {loading
        ? "loading products"
        : sortedProducts?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
    </div>
  );
}

export default List;
