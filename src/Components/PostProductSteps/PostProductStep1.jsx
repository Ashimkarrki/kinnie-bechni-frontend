import React from "react";
import { ImBooks } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import FileInput from "../FileInput";
const PostProductStep1 = ({
  category,
  setCategory,
  setImageUrl,
  imageUrl,
  setStep,
  setProductDetail,
}) => {
  const clickHandeler = (cat) => {
    setCategory(cat);
    setProductDetail({});
  };
  return (
    <>
      <p className="postproduct__choose__caption">Choose Category</p>
      <div className="postproduct__choose ">
        <button
          className="postproduct__choose__button"
          onClick={() => {
            clickHandeler("books");
          }}
        >
          <ImBooks
            className={`postproduct__choose__icons ${
              category === "books" ? "category__icon__selected" : ""
            }`}
          />
          Books
        </button>

        <button
          className="postproduct__choose__button"
          onClick={() => {
            clickHandeler("notes");
          }}
        >
          <GiNotebook
            className={`postproduct__choose__icons ${
              category === "notes" ? "category__icon__selected" : ""
            }`}
          />
          Notes
        </button>
        <button
          className="postproduct__choose__button"
          onClick={() => {
            clickHandeler("equipments");
          }}
        >
          <BsTools
            className={`postproduct__choose__icons ${
              category === "equipments" ? "category__icon__selected" : ""
            }`}
          />
          Equipments
        </button>
      </div>
      <p className="upload-image-caption"> Upload Image</p>
      <div className="upload-image">
        {imageUrl.map((item) => {
          return (
            <FileInput
              id={item.id}
              key={item.id}
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
            />
          );
        })}
        <button
          className="step-navigation"
          onClick={() => {
            if (category && imageUrl.filter((s) => s.url)[0]) setStep("two");
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PostProductStep1;
