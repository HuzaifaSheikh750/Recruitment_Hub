import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Basic",
    details: "Minimum 02 Users",
    price: "35.00",
    billing: "",
    limit: "/user/month",
    btnClass: "trial-button mt-250",
    heading: "Start with basic automation requirements. Key features included:",	
    features: [
      "Configure recruitment waves and projects",
      "Configure job positions, skills, interviewers and their schedule",
      "Define candidate shortlisting criteria for job position",
      "Automate collaboration among HR department, candidate and interviewer",
      "Automatic email notifications and interview invites",
      "Maintain candidate CV repository",
    ],
    bgColor: "#FFF7EB",
    animDelay: "0",
  },
  {
    id: 2,
    name: "Advanced",
    details: "Minimum 02 Users",
    price: "40.00",
    billing: "",
    limit: "/user/month",
    btnClass: "btn-fourteen fw-500 tran3s w-100 mt-170 ",
    heading: "Get insights with further process automation. Key features included:",	
    features: [
      "Configure recruitment waves and projects",
      "Configure job positions, skills, interviewers and their schedule",
      "Define candidate shortlisting criteria for job position",
      "Automate collaboration among HR department, candidate and interviewer",
      "Automatic email notifications and interview invites",
      "Maintain candidate CV repository",
      "Dashboards and reports for better insights into recruitment process performance",
    ],
    bgColor: "#E2F2FD",
    animDelay: "100",
  },
  {
    id: 3,
    name: "Enterprise",
    details: "Minimum 02 Users",
    price: "45.00",
    billing: "",
    limit: "/user/month",
    btnClass: "trial-button ",
    heading: "	Integrate to achieve hyper automation. Key features included:",	
    features: [
      "Configure recruitment waves and projects",
      "Configure job positions, skills, interviewers and their schedule",
      "Define candidate shortlisting criteria for job position",
      "Automate collaboration among HR department, candidate and interviewer",
      "Automatic email notifications and interview invites",
      "Maintain candidate CV repository",
      "Dashboards and reports for better insights into recruitment process performance",
      "Trigger the automation through careers website or Apply Now button on social media platforms",
      "Integrate with HR Management or back office ERP application",
    ],
    bgColor: "#FFEBEB",
    animDelay: "200",
  },
  // {
  //   id: 4,
  //   name: "Interprise",
  //   details: "Above 10 Users",
  //   price: "10.00",
  //   billing: "",
  //   limit: "/user/month",
  //   btnClass: "trial-button btn3",
  //   heading: "All of Basic plan plus:",	
  //   features: [
   
  //     "Multi site",
  //     "Multi language",
  //     "Delegation of Authority (Role based approval workflow)",
  //     "My Approvals workspace",
  //     "Approval history", 
  //   ],
  //   bgColor: "#E4F4F1",
  //   animDelay: "300",
  // },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  return (
    <>
    
      {plans.map((plan) => (
        <div
          className="col-xl-4  col-sm-6"
          key={plan.id}
          data-aos="fade-up"
        //  style={{height:"100px"}}
          data-aos-delay={plan.animDelay}
        >
          <div
        
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "active" : ""
            }`}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {plan.details}
            </div>
            <div
              className="top-banner align-items-center "
              style={{ background: plan.bgColor }}
            >
              <div className="price fw-500" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <sup>$</sup>
                {plan.price}
              </div>
              <div>
                <span>{plan.billing}</span>
                <em className="d-block" style={{textAlign:"center"}}>{plan.limit}</em>
              </div>
            </div>

            <p style={{marginTop:"30px", marginBottom:"-30px", textAlign:"start", fontWeight:"500"}}>{plan.heading}</p> 
            {/* /.top-banner */}
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                <li key={i} style={{fontSize:"15px"}}>{feature}</li>
              ))}
            </ul>
           
            <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispe1627555526352.ksphrrec?tab=PlansAndPrice" target="_blank" className={plan.btnClass}>
            Get it now
            </a>

            {/* <div className="trial-text pt-25 tx-dark">
              No card required, cancel any time
            </div> */}
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </>
  );
};

export default Pricing;
