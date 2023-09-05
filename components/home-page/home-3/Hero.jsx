import Image from "next/image";
import HeroBtnGroup from "../home-7/HeroBtnGroup";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Un_EG7HaJgA"
        // https://www.youtube.com/watch?v=M9CNNbq7AHY
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-twelve pt-0 pb-0 lg-pb-80 md-pt-200 quote">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="text-wrapper main_text" data-aos="fade-right" style={{marginTop:"280px"}}>

                <h3 className=" tx-dark field_title"
                style={{ fontSize: "55px", color:"black", fontWeight: "bold", fontFamily:"Poppins" }}>
                 Automate To Simplify Recruitment Processes   
                </h3 >
                <p className="text-md tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20 poppins" >
                Make Recruitment simple and effective with the 
                automation of HR duties and tasks through KAISPE 
                Recruitments Hub. 
                </p>

                {/* <div className="d-lg-flex align-items-center"> */}

                <div
                  className="d-sm-flex align-items-center btns"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
                    onClick={() => setOpen(true)}
                    role="button"
                    style={{
                      cursor: "pointer",
                    
                      marginTop: "0px",
                    }}
                  >
                    <i
                      className="bi bi-play"
                      style={{
                        border: "1px solid black",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontSize: "32px",
                        paddingLeft: "10px",
                      }}
                    />
                    <div className="ps-3">
                      <span
                        className="d-block fs-15 text-uppercase"
                        style={{ textAlign: "start" }}
                      >
                        Watch
                      </span>
                      <strong
                        className="fs-18 fw-normal tx-dark d-block"
                       
                      >
                        Intro Video
                      </strong>
                    </div>
                  </div>
                  <a
                    href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispe1627555526352.ksphrrec?tab=Overview"
                    target="_blank"
                    style={{ marginTop: "-20px", marginRight: "20px" }}
                  >
                    <img
                      src="/images/recruitment/download.jpg"
                      alt="icon"
                      style={{
                        width: "150px",
                        height: "50px",
                        marginRight: "20px",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* End col-6 */}

            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 ms-auto text-end"
              data-aos="fade-left"
            >
              <div
                className="image-holder zn2 d-inline-block position-relative sm-mt-60"
                 style={{width:"140%"}}
              >
                <img
                  src="/images/recruitment/mainTablet.png"
                  alt="img"
                  className="lazy-img"
                  // style={{width:"100%", height:"100%", marginLeft:"50px" }}
                  style={{position:"relative", right:"-70px", top:"130px", width:"100%", height:"100%"}}
                />
              </div>
            </div>
            {/* End col-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
