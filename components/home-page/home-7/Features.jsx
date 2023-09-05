import Link from "next/link";
const featureData = [
  {
    id: 1,
    icon: "/images/training/icons/iconOne.png",
    title: "Training Application Submission ",
    text: "With highly flexible tax engine, its enables you to calculate payroll tax deductions",
    backgroundColor: "#FFEBDB",
    count:"01"
  },
  {
    id: 2,
    icon: "/images/training/icons/iconTwo.png",
    title: "Pre-Course Assessment",
    text: "Dynamics 365 FlexPayroll allows you to define taxation rules and sub-rules",
    backgroundColor: "#E0F8F8",
    count:"02"
  },
  {
    id: 3,
    icon: "/images/training/icons/iconThree.png",
    title: "Searchable Training Catalog ",
    text: "Dynamics 365 FlexPayroll provides a range of reporting and analytics tools.",
    backgroundColor: "#F7EDFF",
    count:"03"
  },
  {
    id: 4,
    icon: "/images/training/icons/iconFour.png",
    title: "Post-Training Evaluation ",
    text: "By using a formula-based functionality for associating rules with formulas.",
    backgroundColor: "#F7EDFF",
    count:"04"
  },
];

const FeatureCard = ({ icon, title, text, backgroundColor, count }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20 mb-40" style={{border:"5px solid #13285D", borderRadius:"10px"}}>
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        style={{ width:"100%" }}
      >
        <div style={{position:"relative", top:"-60px", left:"40px", backgroundColor:"white"}}>
          <h3 style={{fontWeight:"bolder", fontSize:"30px", padding:"5px", color:"#13285D"}}>{count}</h3>
        </div>
        <img src={icon} alt="icon" className="lazy-img" style={{ marginLeft:"-30px",marginRight:"15px"}}/>
        <h6 className=" mt-25 mb-25" style={{textAlign:"start"}} >{title}</h6>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            count={feature.count}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
      <Link
                href="/Features"
                className="btn-four fw-500 "
                style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#13285D", width:"200px", height:"60px", borderRadius:"10px", margin:"auto", marginTop:"20px", marginBottom:"50px"}}
              >
                View All
              </Link>
      {/* <div className="bg-wrapper tablet" style={{backgroundColor:"", marginTop:"40px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img
                src="/images/payroll/secondTablet.svg"
                alt="media"
                style={{width:"100%", height:"auto"}}
                className="lazy-img main-screen  tablet"
              />
            </div> */}
    </>
  );
};

export default Features;
