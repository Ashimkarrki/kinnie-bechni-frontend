import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import PostProductFinal from "./PostProductSteps/PostProductFinal";
import PostProductStep1 from "./PostProductSteps/PostProductStep1";
import PostProductStep2 from "./PostProductSteps/PostProductStep2";
import PostProductStep3 from "./PostProductSteps/PostProductStep3";

const PostProduct = ({ setIsmodalOpen }) => {
  const [imageUrl, setImageUrl] = useState([
    { id: 0, url: "", file: {} },
    { id: 1, url: "", file: {} },
    { id: 2, url: "", file: {} },
  ]);
  const [category, setCategory] = useState("");
  const [productDetail, setProductDetail] = useState({});
  const [step, setStep] = useState("one");
  return (
    <div className="postproduct__wrapper">
      <div className="postproduct">
        <div className="postproduct__headers">
          <h3>Post Product</h3>
          <IoCloseOutline
            className="postproduct__close"
            onClick={() => {
              let response = confirm(
                "The Data will be erased . Do you want to continue ?"
              );
              if (response) setIsmodalOpen(false);
            }}
          />
        </div>
        {step === "one" && (
          <PostProductStep1
            category={category}
            setCategory={setCategory}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            setStep={setStep}
            setProductDetail={setProductDetail}
          />
        )}
        {step === "two" && (
          <PostProductStep2
            category={category}
            setProductDetail={setProductDetail}
            productDetail={productDetail}
            setStep={setStep}
          />
        )}
        {step === "three" && (
          <PostProductStep3
            setProductDetail={setProductDetail}
            productDetail={productDetail}
            setStep={setStep}
          />
        )}
        {step === "final" && (
          <PostProductFinal
            productDetail={productDetail}
            setStep={setStep}
            url={imageUrl.filter((item) => item.url)[0].url}
            category={category}
            imageUrl={imageUrl}
            setIsmodalOpen={setIsmodalOpen}
          />
        )}
      </div>
      ;
    </div>
  );
};

export default PostProduct;
