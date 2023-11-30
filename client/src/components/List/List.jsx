import React from "react";
import Card from "../Card/Card";
import "./List.scss";

function List() {
  // const products = [
  //   {
  //     id: 1,
  //     img: "/img/t01.jpg",
  //     img2: "/img/t02.jpg",
  //     title: "T-shirt",
  //     isNew: true,
  //     oldPrice: 20,
  //     newPrice: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "/img/c01.jpg",
  //     img2: "/img/c02.jpg",
  //     title: "Coat",
  //     isNew: true,
  //     oldPrice: 120,
  //     newPrice: 105,
  //   },
  //   {
  //     id: 3,
  //     img: "/img/sk01.jpg",
  //     img2: "/img/sk02.jpg",
  //     title: "Skirt",
  //     isNew: false,
  //     oldPrice: 200,
  //     newPrice: 125,
  //   },
  //   {
  //     id: 4,
  //     img: "/img/h01.jpg",
  //     img2: "/img/ht02.jpg",
  //     title: "Hat",
  //     isNew: false,
  //     oldPrice: 20,
  //     newPrice: 12,
  //   },
  // ];
  return (
    <div className="list">
      {/* {products?.map((item) => {
        return <Card item={item} key={item.id} />;
      })} */}
    </div>
  );
}

export default List;
