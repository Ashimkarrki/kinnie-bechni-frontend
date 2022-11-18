import React from "react";

const PostProductNavigation = ({ where, setStep }) => {
  return (
    <>
      <button type="submit" className="step-navigation">
        Next
      </button>
      <button
        className="step-navigation step-navigation--back"
        onClick={() => setStep(where)}
      >
        Back
      </button>
    </>
  );
};

export default PostProductNavigation;
