import React from "react";
import PostProductNavigation from "./PostProductNavigation";

const PostProductStep3 = ({ setProductDetail, setStep, productDetail }) => {
  const changeHandeler = (e) => {
    setProductDetail({
      ...productDetail,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="step3"
      onSubmit={(e) => {
        e.preventDefault();
        setStep("final");
      }}
    >
      <input
        type="number"
        placeholder="Price"
        required
        name="price"
        className="step3--input"
        value={productDetail.price ? productDetail.price : ""}
        onChange={changeHandeler}
      />
      <textarea
        name="description"
        className="step3--input step3--input--height"
        placeholder="Description"
        required
        value={productDetail.description ? productDetail.description : ""}
        onChange={changeHandeler}
      ></textarea>
      <PostProductNavigation setStep={setStep} where={"two"} />
    </form>
  );
};

export default PostProductStep3;
