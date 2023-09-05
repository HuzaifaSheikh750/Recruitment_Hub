import Link from "next/link";
import { useState } from "react";

const OurAim = () => {

  const servicesData = [
    {
      bgColor: "rgba(255, 171, 51, 0.18)",
      iconSrc: "/images/recruitment/low.png",
      title: "Low Code, No Code",
      description:
        "Our user-friendly platform ensures that you don't need to be a coding expert. If you need some customizations, get them done on your own.",
    },
    {
      bgColor: "rgba(100, 219, 226, 0.18)",
      iconSrc: "/images/recruitment/better.png",
      title: "Better Management",
      description:
        "Our user-friendly platform ensures that you don't need to be a coding expert. If you need some customizations, get them done on your own.",
    },
    {
      bgColor: "rgba(255, 160, 194, 0.18)",
      iconSrc: "/images/recruitment/real.png",
      title: "Real-time HR Data",
      description:
        "Stay up-to-date with real-time HR data at your fingertips. Be it candidates, their training, the contracts, or anything else, everything is data to be used for better decisions. ",
    },
    {
      bgColor: "",
      iconSrc: "/images/recruitment/data.png",
      title: "Data-driven Insights",
      description:
        "Leverage the power of data to gain valuable insights into your recruitment process. This platform provides analytics and reports that enable you to refine your strategies for more successful hires. ",
    },
  ];

  const aimItems = [
    {
      title: "About us",
      heading: "Benefits of KAISPE Employee training Dynamics 365 app",
      text: "The KAISPE Employee Training D365 app is a comprehensive solution for employee training and development that offers several benefits to organizations, including",
      list: [
        "Streamlined training processes, resulting in a more efficient and streamlined training process. ",
        "Improved employee engagement by empowering employees to take ownership of their professional development. ",
        "Increased visibility into employee training history and program attendance for managers and HR professionals, which can be used to identify training gaps and inform future training decisions. ",
        "A customizable training catalog ensures that employees have access to the training programs most relevant to their roles and responsibilities. ",
      ],
      link: "/pages-menu/about-us-v1",
    },
  ];

  const imageItems = [
    { src: "/images/recruitment/midImage.png", alt: "shape" },
  ];

  return (
    <div className="row">
      <div className="col-lg-7 col-md-12 ms-auto order-lg-first">

        <h3 className="  fw-bold tx-dark m0 appBannerHeading poppins" style={{ fontSize: "48px", fontWeight:"bold" }}>
           Benefits of <span style={{color:"#13285D"}} className="hubHead">Recruitment Hub</span>
        </h3>
   
        <div className="row" style={{backgroundColor:"#0370F3", borderRadius:"20px", paddingLeft:"20px", marginTop:"30px"}}>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="col-lg-6 col-sm-6"
          style={{display:"flex"}}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-four pe-xxl-5 position-relative mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor}}
            >
              <img src={service.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="fw-500 mt-35 mb-25 " style={{textAlign:"start", color:"white"}}>
                {service.title}
            </h5>
            <p className="mb-25" style={{textAlign:"start", color:"white"}}>{service.description}</p>
          </div>
        </div> 
      ))}
      </div>

  

      </div>
      {/* End .col */}

      <div className="col-lg-5 col-md-12 order-lg-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80" style={{marginTop:"50px", width:"180%"}}>
          {imageItems.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={item.className}
              style={{ width: "100%", height: "100%", marginTop:"0px", position:"relative", right:"-100px", top:"50px"}}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default OurAim;
