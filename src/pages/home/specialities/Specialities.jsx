import React from "react";
import "./Specialities.css";
import WorkStep from "./workStep/WorkStep";

const Specialities = () => {
  const workSteps = [
    {
      no: "ONE",
      image:
        "https://antidrugrehab.com/wp-content/uploads/2021/08/call-center-2135513_640-150x150.png",
      desc: "Call Addiction Treatment Services International and connect to a Treatment Consultant to confidentially discuss your (or a loved one’s) addiction or psychological struggle.",
    },
    {
      no: "TWO",
      image:
        "https://antidrugrehab.com/wp-content/uploads/2021/08/Capaaaature-removebg-preview.png",
      desc: "Your Treatment Consultant then asks specific questions to get an insight into your struggle, treatment needs, location, and finance/insurance details.",
    },
    {
      no: "THREE",
      image:
        "https://antidrugrehab.com/wp-content/uploads/2021/08/clipboard-311168_640-206x300.png",
      desc: "The Treatment Consultant runs your clinical and resource-related information to determine the best course of treatment for your unique case.",
    },
    {
      no: "FOUR",
      image:
        "https://antidrugrehab.com/wp-content/uploads/2021/08/thumb-up-153290_640-233x300.png",
      desc: "Your Treatment Consultant informs you of the type of program you need based on the clinical and financial information you provided.",
    },
  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center">Our Specialities</h2>
      <hr className="w-25 mx-auto" />
      <div className="bg-warning text-center p-4 container">
        <h1 className="">"YOU ARE UNIQUE. YOUR ADDICTION TREATMENT SHOULD BE TOO."</h1>
        <p className="lead">What Happens When You Call Us?</p>
      </div>

      {/* work steps  */}
      <div className="row mt-5">
        {workSteps.map((step, index) => (
          <WorkStep key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Specialities;
