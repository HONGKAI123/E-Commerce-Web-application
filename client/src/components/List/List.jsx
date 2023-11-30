import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import useFetch from "../hooks/useFetch";

function List({ categoryID, subCategory }) {
  const fetch_query = subCategory
    .map((id) => `filters[sub_categories][id][$eq]=${id}`) //fetch all the information where categoryID = useParams; filter base on subCategories
    .join("&");
  // console.log(fetch_query);
  const {
    data: products,
    error,
    isLoding,
  } = useFetch(
    `/products/?populate=*&${fetch_query}&filters[categories][id][$eq]=${categoryID}`
  );
  console.log(products);
  return (
    <div className="list">
      {products?.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
}

export default List;
