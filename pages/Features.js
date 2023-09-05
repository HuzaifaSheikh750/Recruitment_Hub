import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/FeaturesHeader";
import Link from "next/link";
import Footer from '../components/footer/Footer'
import Features from '../components/home-page/home-6/Features'
const contact = () => {

  const FeatureData = [
    {
      id: 1,
      iconSrc: "/images/recruitment/features/configuration.png",
      title: "Streamlined Configuration",
      description:
        "Our robust and intuitive application allows an effortless setup of staffing projects, job openings, skills, departments, interviewers, interview rounds, and other pertinent details.",
    },
    {
      id: 2,
      iconSrc: "/images/recruitment/features/automation.png",
      title: "Hyper Automation",
      description:
        "From applicant email notifications to interview scheduling and beyond, our solution covers the entire spectrum of recruitment tasks, ensuring a seamless and efficient process.",
    },
    {
      id: 3,
      iconSrc: "/images/recruitment/features/ai.png",
      title: "AI-Assisted Shortlisting",
      description:
        "The AI builder scans applicant information to create comprehensive shortlisting reports and dashboards, simplifying the candidate evaluation process.",
    },
    {
      id: 4,
      iconSrc: "/images/recruitment/features/activation.png",
      title: "Flexible Activation",
      description:
        "Automation can be triggered by either receiving an email from an applicant or through the submission of a job vacancy form.",
    },
    {
      id: 5,
      iconSrc: "/images/recruitment/features/tracking.png",
      title: "Skill Proficiency Tracking",
      description:
        "Recruitment Hub tracks shortlisted candidate skills with weightage, offering a clear understanding of each candidate's expertise.",
    },

    {
      id: 6,
      iconSrc: "/images/recruitment/features/automated.png",
      title: "Automated Job Descriptions",
      description:
        "Leverage the power of OpenAI to instantly generate accurate job descriptions as soon as the job title is entered. This feature ensures that candidates have access to precise and consistent information.",
    },
    {
      id: 7,
      iconSrc: "/images/recruitment/features/global.png",
      title: "Global Reach",
      description:
        "Our HR system supports the Arabic language, facilitating effortless engagement with top talent from the MENA region, thus expanding your candidate pool and market reach.",
    },
    {
      id: 8,
      iconSrc: "/images/recruitment/features/filtering.png",
      title: "Precision Filtering",
      description:
        "Employ skill-based filtering to identify candidates whose skills align with your team's requirements, ensuring a perfect fit every time.",
    },
  ];

  return (
    <>
      <Seo pageTitle="HR Recruitment Automation | Features" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
    <div className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80 mb-200">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                    {/* Let’s <br />
                    <span className="d-inline-block position-relative">
                      Discover
                      <span
                        className="mark-bg"
                        style={{ backgroundColor: "#E1EDFF" }}
                      />
                    </span> */}
                  Features of Recruitment Hub 
                </h2>
              </div>
              {/* /.title-style-three */}
              {/* <Link
                href="/pages-menu/service-v1"
                className="btn-five tran3s fw-500 fs-17 text-decoration-underline"
              >
                Click here for more info <i className="bi bi-chevron-right" />
              </Link> */}
            </div>
            {/* <Features /> */}
            {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 mt-40"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three">
            <div className="icon d-flex align-items-end">
              <img src={feature.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-50">{feature.description}</p>
            {/* <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
        </div>
      ))}
          </div>
        </div>
        {/* End .container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_36.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three rounded-circle" />
      </div>


      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
          {/* <div className="footer-style-ten theme-basic-footer zn2 position-relative backthree" style={{paddingTop:"0px"}}>
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between" style={{marginTop:"100px"}}>
              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/recruitment/hubWhite.png" alt="logo" width={200} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#4980FF"}}>KAISPE</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500 poppins">Email Address</h5>
                  
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                <i className="fa fa-envelope text-white fs-18" style={{marginRight:"15px"}}/>info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500 poppins">Contact Number</h5>
             
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/> USA : (+1)-315-791-4472 <br></br>
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/>   PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div> */}

<div className="footer-style-ten theme-basic-footer zn2 position-relative back">
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between">

            <div className="col-lg-12 row align-items-center" style={{display:"flex", alignItems:"center", justifyContent:"center",}}>
                  <h2 style={{textAlign:"center", fontFamily:"Poppins"}}>Get it from Microsoft AppSource</h2>
                  <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispe1627555526352.ksphrrec?tab=Overview" target="_blank" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <div className=" fw-500 tran3s" style={{marginTop:"50px", marginBottom:"250px"}} >
                    <img src="/images/field/download.png" style={{width:"100%", height:"100%"}}/>
                  </div>
                  </a>
                </div> 

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/recruitment/hubWhite.png" alt="logo" width={200} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block poppins">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#fff", textDecoration:"underline"}}>KAISPE</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500 poppins">Email Address</h5>
                  
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                <i className="fa fa-envelope text-white fs-18" style={{marginRight:"15px"}}/>info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500 poppins">Contact Number</h5>
             
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/> USA : (+1)-315-791-4472 <br></br>
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/>   PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {/* <DefaultFooter /> */}
    </>
  );
};

export default contact;
