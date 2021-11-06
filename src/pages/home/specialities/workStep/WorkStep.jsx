import React from "react";

const WorkStep = ({ step }) => {
  const { image, no, desc } = step;

  return (
    <div className="col-md-6 row text-center">
      <div className="col-12 col-md-4">
        <img src={image} alt="" className="h-50" />
      </div>
      <div className="col-12 col-md-8">
        <h4>STEP {no}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default WorkStep;
