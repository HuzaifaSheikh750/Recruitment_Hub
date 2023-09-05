import Link from "next/link";
import { useState } from "react";

const OurAim = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const aimItems = [
    {
      title: "About us",
      heading: "Boost Your Business and Empower Your Employees with KAISPE Loan Management App",
      text: "Train Smarter, Not Harder with Our Employee Self Service App",
      list: [
        "Employee select a training program or course from the training catalog",
        "Employee creates a training application using the app, including program name, date, location, and reason for attending.",
        "Employee submit the training application through the app.",
        "The application goes through an approval workflow to ensure it is reviewed by appropriate personnel and approved.",
        "Once the training application is approved, employees can register themselves for the program, or the Training/HR Manager can register them. ",
        "The app allows employees to view or edit their past training applications to keep track of their training history. ",
      ],
      link: "/pages-menu/about-us-v1",
    },
  ];

  const aimItemsTwo = [
    {
      listMore: [
        "The training catalog can be customized according to the organization's specific needs. ",
        "After completing a training program or course, employees are provided with a post-program/course evaluation survey.",
        "The survey form is developed using Microsoft Forms and can be customized according to the organization's needs.",
        "The survey allows employees to provide feedback on the training program's effectiveness, quality, and instructor performance.",
        "The organization can use the feedback to improve future training programs.",
      ],
    },
  ];

  const imageItems = [
    { src: "/images/training/mobileDashboard.png", alt: "shape" },
  ];

  return (
    <div className="row ">
      <div className="col-lg-7 col-md-12 ms-auto order-lg-last">
        {aimItems.map((item, index) => (
          <div
            className="block-style-one pt-35"
            data-aos="fade-left"
            key={index}
          >
          <div className="title-style-one">
            <h3 className="  fw-bold tx-dark m0 appBannerHeading" style={{ fontSize: "38px", fontWeight:"bold", color:"white",  fontFamily:"Poppins" }}>
            How does Training App work?
            </h3>
          </div>
            <p className="text-md tx-dark pt-35 pb-40 lg-pb-20" style={{color:"white", fontSize:"20px", fontFamily:"Poppins"}}>{item.text}</p>
            <ul className="style-none list-item fs-18">
              {item.list.map((listItem, index) => (
                <li key={index} style={{color:"white", fontFamily:"Poppins"}}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
        
   {isExpanded && (
       aimItemsTwo.map((item, index) => (
        <div
          className="block-style-one"
          data-aos="fade-left"
          key={index}
        >
          <ul className="style-none list-item fs-18">
            {item.listMore.map((listItem, index) => (
              <li key={index} style={{color:"white", fontFamily:"Poppins"}}>{listItem}</li>
            ))}
          </ul>
        </div>
      ))
    )
    }
             <button      
              onClick={toggleExpansion}
               className="btn-twentyOne fw-500 tran3s"
                style={{marginTop:"30px", backgroundColor:"#C3C6FD", borderRadius:"10px", color:"black"}}
              >
              {isExpanded ? 'Collapse' : 'View more'}
            </button>

             
      </div>
      {/* End .col */}
      <div className="col-lg-5 col-md-12 order-lg-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80" style={{marginTop:"50px"}}>
          {imageItems.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={item.className}
              style={{ width: "100%", height: "100%", paddingRight:'60px'}}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default OurAim;
