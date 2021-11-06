import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div className="col-md-8 p-5">
          <h2 className="text-center fw-bolder ">ABOUT US</h2>
          <hr className="w-50 mx-auto" />

          <p className="fw-light lead text-center">
            We have been working in Bangladesh with pride and glory since 2005.
            We provide impressive quality and range of professional services for
            those who suffer from drug or alcohol abuse. Our services are highly
            individualized to each client, within a structured, but
            compassionate environment. At ADR, we have an internationally
            certified staff that is fully committed to treating drug addictions
            and behavioral problems. Both inpatient and outpatient services are
            available at our facility. A luxurious residential treatment
            environment dedicated to meeting the physical, mental, emotional,
            and spiritual needs of our clients is available at our in-patient
            facilities. We offer more than just in-house care. The importance of
            aftercare is one of our top priorities. Clients of ADR receive one
            of the nation's best comprehensive treatment programs in the heart
            of Dhaka.
          </p>
          <img
            className="img-fluid"
            src="https://pathwaysreallife.com/wp-content/uploads/Pathways-Real-Life-Team-2017-v2.jpg"
            alt=""
          />
        </div>
      </div>
         <div className="col-md-8 mx-auto">
          {" "}
          <h6 className="text-warning text-center fs-3 fw-bolder text-decoration-uppercase">
            MISSION
          </h6>
          <hr className="w-50 mx-auto" />
          <p className="fw-light">
            To provide our clients with a safe haven where they can completely
            recover and not just get back their earlier sober life, but also get
            a new outlook to life. To provide a safe, caring, and therapeutic
            environment for those suffering from drug and alcohol addiction.
            Services
          </p>
          <ul className="">
            <li>
              A complete range of treatment options for individuals struggling
              with addiction
            </li>
            <li>
              A dedicated staff of experts work together to create personalized
              treatment plans
            </li>
            <li>Comfortable and Homely living environments for after care.</li>
            <li>
              Family support program for recovery through mind, body and soul.
            </li>
          </ul>
          <h6 className="text-warning text-center fs-3 fw-bolder text-decoration-uppercase">
            VISION
          </h6>
          <hr className="w-50 mx-auto" />
          <p className="fw-light text-center">
            To be a recognized leader in the provision of high quality,
            innovative harm reduction facilities and supportive strategies for
            individuals living suffering from the devastating effects of drug
            addiction.{" "}
          </p>
          <h6 className="text-warning text-center fs-3 fw-bolder text-decoration-uppercase">
            VALUES
          </h6>
          <hr className="w-50 mx-auto" />
          <p className="fw-light">
            Refrain Addition is a pioneer drug addiction treatment center where
            you get freedom from addiction and we are dedicated to help people
            who are suffering from drug addiction. Our treatment program is
            built on the foundations of Detoxification, Therapeutic community,
            Psychological counseling with the influence of 12 Step based support
            groups.{" "}
          </p>
          <ul>
            <li>Complete confidentiality</li>
            <li>Direct and open communication</li>
            <li>Quality Care</li>
          </ul>
        </div>
    
    </div>
  );
};

export default About;
