import React from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const PostProductFinal = ({
  productDetail,
  setStep,
  url,
  category,
  imageUrl,
  setIsmodalOpen,
  // success,
}) => {
  const success = () => toast.success("Successfully Posted!");
  const failure = () => toast.error("Something Is Not  Right!");

  const mutation = useMutation({
    mutationFn: (data) => {
      console.log(data);
      return axios.post("http://localhost/api/addproduct", data);
    },
    onSuccess: () => {
      setIsmodalOpen(false);
      success();
    },
    onError: () => {
      failure();
    },
  });
  return (
    <div className="step-final">
      <p className="step-final__caption">Your product will look like this :</p>
      <div className="demo-wrapper">
        <ProductCard
          image={url}
          name={productDetail.name}
          stock={productDetail.stock}
          price={productDetail.price}
          description={productDetail.description}
          category={category}
        />
      </div>
      <button
        type="submit"
        className="step-navigation"
        onClick={async () => {
          const files = [
            ...imageUrl.filter((item) => item.url).map((s) => s.file),
          ];
          const formData = new FormData();
          formData.append("category", category);
          formData.append("price", productDetail.price);
          formData.append("stock", productDetail.stock);
          formData.append("description", productDetail.description);
          formData.append("faculty", productDetail.faculty);
          formData.append("name", productDetail.name);
          formData.append("fileName1", files[0]);
          formData.append("fileName2", files[1]);
          formData.append("fileName3", files[2]);
          console.log(productDetail);
          if (category === "books") {
            formData.append("authorName", productDetail.authorName);
            formData.append("edition", productDetail.edition);
            formData.append("subjectName", productDetail.subjectName);
          } else if (category === "equipments") {
            formData.append("subCategory", productDetail.subjectName);
          }
          mutation.mutate(formData);
        }}
      >
        Post Product
      </button>
      <button
        className="step-navigation step-navigation--back"
        onClick={() => setStep("three")}
      >
        Back
      </button>
    </div>
  );
};

export default PostProductFinal;
