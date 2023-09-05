import Link from "next/link";

const servicesData = [
  {
    bgColor: "",
    iconSrc: "/images/recruitment/optimize.png",
    title: "Optimized Workflows.",
    description:
      "Our platform strategically reduces the repetitive manual workload inherent in HR departments during recruitment, allowing HR professionals to redirect their energy toward pivotal human resource aspects like employee engagement",
  },
  {
    bgColor: "",
    iconSrc: "/images/recruitment/amplified.png",
    title: "Amplified Talent Acquisition.",
    description:
      "Unlock the potential of the KAISPE HR Recruitment Hub to extend your hiring reach. Seamlessly integrating with social media platforms, this solution enables the automatic distribution of job postings across various channels",
  },
  {
    bgColor: "",
    iconSrc: "/images/recruitment/efficient.png",
    title: "Efficient Resource Allocation.",
    description:
      "By automating essential recruitment processes, our HR system ensures that resources are allocated efficiently, enabling HR teams to dedicate more time and effort to strategic HR functions and talent management. ",
  },
  {
    bgColor: "",
    iconSrc: "/images/recruitment/maximize.png",
    title: "Maximize HR Functionality.",
    description:
      "Effortlessly manage all your recruitment and hiring needs with an applicant tracking system that's equipped with powerful and practical tools.  This All-in-one tool is here to enable HR professionals to divert their attention to other critical human resource functions",
  },
];

const Services = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-3 col-sm-6`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-four pe-xxl-5 position-relative mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor, display:"block", margin:"auto"}}
            >
              <img src={service.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="fw-500 mt-35 mb-25 " style={{textAlign:"center"}}>
              <Link
                href="/pages-menu/service-details"
                className="tran3s tx-dark"
              >
                {service.title}
              </Link>
            </h5>
            <p className="mb-25" style={{textAlign:"center"}}>{service.description}</p>
            {/* <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
          
          {/* /.card-style-one */}
        </div>
      ))}
        <Link
           href="/Features"
           className="btn-four fw-500 "
            style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#0370F3", width:"200px", height:"60px", borderRadius:"10px", margin:"auto", marginTop:"50px", marginBottom:"50px"}}
            >
            View All
        </Link>
    </>
  );
};

export default Services;
