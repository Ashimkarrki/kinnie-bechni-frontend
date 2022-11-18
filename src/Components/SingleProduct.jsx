import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const SingleProduct = () => {
  const { id, category } = useParams();

  const [headPic, setHeadPic] = useState("");
  const [choosen, setChoosen] = useState(1);
  const [data, setData] = useState({});

  const mutate = useMutation({
    mutationFn: async () => {
      const data = await axios.post("http://localhost/api/getproduct", {
        id,
        category,
      });
      return data.data;
    },
    onSuccess: (data) => {
      setData(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  useEffect(() => {
    mutate.mutate();
  }, []);

  const [book, setBook] = useState({
    id: 1,
    authorName: "Bill Gates",
    category: "notes",
    description: "lorem sorem forem ",
    edition: "2",
    faculty: "BCT",
    name: "OOP",
    price: 120,
    created_at: "2022-11-13T00:00:00.000000Z",
    updated_at: "2022-11-13T00:00:00.000000Z",
    stock: 12,
    subjectName: "Insignt of oop",
    fileName1:
      "https://media.istockphoto.com/id/487764186/photo/never-ending-peace-and-love.jpg?s=612x612&w=0&k=20&c=nBau5nlbXTk11ln_0csVYS-FUavFEE0QmoAjvzZu5co=",
    fileName2:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    fileName3:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
  });
  const [modify, setModify] = useState({
    subjectName: "Subject Name",
    authorName: "Author Name",
    edition: "Edition",
    subCategory: "Sub Category",
    bookName: "Book Name",
    category: "Category",
    stock: "Stock",
    price: "Price",
    faculty: "Faculty",
  });
  return (
    <div className="single-product">
      <div className="single-product--left">
        <img
          className="head-image"
          src={
            headPic
              ? headPic
              : "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
          }
          alt="product image"
        />

        {data.fileName2 ? (
          <img
            onClick={(e) => {
              setHeadPic(e.target.src);
              setChoosen(2);
            }}
            className={`pic-options  pic-options--left ${
              choosen === 2 ? "pic-selected" : ""
            }`}
            src={data.fileName2}
            alt="product image"
          />
        ) : (
          ""
        )}

        {data.fileName3 ? (
          <img
            onClick={(e) => {
              setHeadPic(e.target.src);
              setChoosen(3);
            }}
            className={`pic-options pic-options--middle ${
              choosen === 3 ? "pic-selected" : ""
            }`}
            src={data.fileName3}
            alt="product image"
          />
        ) : (
          ""
        )}
        {data.fileName1 ? (
          <img
            onClick={(e) => {
              setHeadPic(e.target.src);
              setChoosen(1);
            }}
            className={`pic-options  pic-options--left ${
              choosen === 1 ? "pic-selected" : ""
            }`}
            src={
              "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
            }
            alt="product image"
          />
        ) : (
          ""
        )}
      </div>
      <div className="about-product">
        <h2 className="about-product__heading">{data.name}</h2>

        <ol className="about-product__list">
          {Object.keys(data)
            .filter((s) => {
              return (
                s !== "created_at" &&
                s !== "updated_at" &&
                s !== "fileName1" &&
                s !== "fileName2" &&
                s !== "fileName3" &&
                s !== "id" &&
                s !== "name" &&
                s !== "description" &&
                s !== "price"
              );
            })
            .sort()
            .map((item, index) => {
              return (
                <li className="about-product__list" key={index}>
                  {modify[item]} : {data[item]}
                </li>
              );
            })}
          <li className="about-product__list">Price : रु {data.price}</li>
          <li className="about-product__list">
            Description : {data.description}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SingleProduct;
