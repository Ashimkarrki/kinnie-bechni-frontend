import React from "react";
import PostProductNavigation from "./PostProductNavigation";

const Books = ({ setProductDetail, setStep, productDetail }) => {
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
        placeholder="Book Name"
        name="name"
        required
        value={productDetail.name ? productDetail.name : ""}
        onChange={changeHandeler}
      />
      <input
        type="text"
        className="step2--input"
        placeholder="Subject Name"
        name="subjectName"
        required
        value={productDetail.subjectName ? productDetail.subjectName : ""}
        onChange={changeHandeler}
      />
      <input
        type="text"
        className="step2--input"
        placeholder="Author Name"
        name="authorName"
        required
        value={productDetail.authorName ? productDetail.authorName : ""}
        onChange={changeHandeler}
      />
      <input
        type="text"
        className="step2--input"
        placeholder="Faculty"
        required
        value={productDetail.faculty ? productDetail.faculty : ""}
        onChange={changeHandeler}
        name="faculty"
      />
      <input
        min="0"
        type="number"
        className="step2--input"
        placeholder="Edition"
        name="edition"
        required
        value={productDetail.edition ? productDetail.edition : ""}
        onChange={changeHandeler}
      />
      <input
        min="0"
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

export default Books;
