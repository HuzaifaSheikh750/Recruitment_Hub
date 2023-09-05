import Link from "next/link";
import { useState } from "react";
import Main from "../../../components/home-page/home-6/Hero";

const Hero = () => {
  const features = [
    "Streamlined training processes, resulting in a more efficient and streamlined training process. ",
    "Improved employee engagement by empowering employees to take ownership of their professional development. ",
    "Increased visibility into employee training history and program attendance for managers and HR professionals, which can be used to identify training gaps and inform future training decisions. ",
    "A customizable training catalog ensures that employees have access to the training programs most relevant to their roles and responsibilities. ",
  ];

  const buttons = [
    {
      // platform: "Google play",
      icon: "images/field/app_store.png",
      className: "windows-button",
    },
    {
      // platform: "App store",
      icon: "images/field/google_play.png",
      className: "ios-button",
    },
  ];

  return (
    <>
      {/* <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150 " >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 m-auto text-center"
              data-aos="fade-up"
            >
              <h2 className="tx-dark mb-20" style={{fontWeight:"bold"}}>Features of the KAISPE <span style={{ color: "#6A3197" }}> Employee <br/> Training App</span></h2>
              <p className="text-lg tx-dark opacity-75 mb-0 lg-mb-20 mainText" style={{ fontSize: "20px", fontStyle: "" }}>
                The KAISPE Employee training program is a comprehensive solution for HR training. It offers several features to 
                streamline the training process, empower employees to take ownership of their professional development 
                and provide managers and HR professionals with increased visibility into employee training history and 
                program attendance
              </p>
              </div>
          </div>
        </div>
      </div> */}

      <div className="hero-banner-two position-relative pt-200 lg-pt-200 md-pt-150 dashboard" >
        <div className="container">
           <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="block-style-seven wow fadeInLeft">
            <div className="title-style-one">
              {/* <div className="sc-title text-uppercase">MOBILE APP</div> */}
              <h3 className=" fw-500 tx-dark m0" style={{fontSize:"40px", fontWeight:"bold"}}>
              Benefits of KAISPE Employee training Dynamics 365 app

              </h3>
            </div>
            <p className="fs-20 pt-30 pb-30 lg-pb-20">
            The KAISPE Employee Training D365 app is a comprehensive 
            solution for employee training and development that offers 
            several benefits to organizations, including
            </p>
            {/* <ul className="style-none list-item fs-16">
              {features.map((listItem, index) => (
                <li key={index} style={{fontFamily:"Garamond"}}>{listItem}</li>
              ))}
            </ul> */}
            <ul className="style-none list-item fs-18">
              {features.map((listItem, index) => (
                <li key={index}><p>{listItem}</p></li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="col-lg-6 wow fadeInRight">
          <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80" style={{width:"100%"}}>
            <img
              src="images/loan/mainPic.png"
              alt=""
              // width={600}
              className="lazy-img main-img ms-auto"
            />
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
