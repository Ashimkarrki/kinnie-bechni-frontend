import React from "react";
import Books from "./Books";
import Equipments from "./Equipments";
import Notes from "./Notes";

const PostProductStep2 = ({
  setStep,
  category,
  setProductDetail,
  productDetail,
}) => {
  if (category === "books")
    return (
      <Books
        setStep={setStep}
        setProductDetail={setProductDetail}
        productDetail={productDetail}
      />
    );
  if (category === "equipments")
    return (
      <Equipments
        setStep={setStep}
        setProductDetail={setProductDetail}
        productDetail={productDetail}
      />
    );
  if (category === "notes")
    return (
      <Notes
        setStep={setStep}
        setProductDetail={setProductDetail}
        productDetail={productDetail}
      />
    );
};

export default PostProductStep2;
