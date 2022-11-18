import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Empty from "./Empty";
const ProductPage = () => {
  const [group, setGroup] = useState("popular");
  const fetchHomeProducts = async () => {
    const data = await axios.get("http://localhost/api");
    return data.data;
  };
  const { isLoading, isError, data, error, isFetched } = useQuery({
    queryKey: ["fetchHomeProducts"],
    queryFn: fetchHomeProducts,
    staleTime: 300000,
    cacheTime: 300000,
  });
  if (isLoading) return <Empty />;
  if (isError) return <h1>Error Occured : {error.message}</h1>;
  if (isFetched && !data[0]) return <Empty />;
  return (
    <div className="productPage">
      <div className="productPage--flex">
        {/* <button
          className="productPage--flex__button"
          onClick={() => {
            setGroup("popular");
          }}
        >
          Popular
        </button>
        <button
          className="productPage--flex__button"
          onClick={() => {
            setGroup("latest");
          }}
        >
          Latest
        </button> */}
        <button className="productPage--flex--last productPage--flex__button">
          <CiFilter className="filter" />
          Filter
        </button>
      </div>
      <div className="productPage--grid">
        {data?.map((s) => {
          return (
            <ProductCard
              id={s.id}
              key={s.id + s.category}
              image={
                "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              }
              name={s.name}
              price={s.price}
              stock={s.stock}
              description={s.description}
              category={s.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
