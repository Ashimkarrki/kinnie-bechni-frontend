import React from "react";
import PostProductNavigation from "./PostProductNavigation";

const Notes = ({ setProductDetail, setStep, productDetail }) => {
  const changeHandeler = (e) => {
    setProductDetail({
      ...productDetail,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="step2"
      onSubmit={(e) => {
        e.preventDefault();
        setStep("three");
      }}
    >
      <input
        type="text"
        className="step2--input"
        name="name"
        required
        placeholder="Note On"
        value={productDetail.name ? productDetail.name : ""}
        onChange={changeHandeler}
      />
      <input
        type="text"
        className="step2--input"
        name="faculty"
        placeholder="Faculty"
        required
        value={productDetail.faculty ? productDetail.faculty : ""}
        onChange={changeHandeler}
      />
      <input
        type="number"
        className="step2--input"
        placeholder="Stock"
        name="stock"
        required
        value={productDetail.stock ? productDetail.stock : ""}
        onChange={changeHandeler}
      />
      <PostProductNavigation setStep={setStep} where={"one"} />
    </form>
  );
};

export default Notes;
