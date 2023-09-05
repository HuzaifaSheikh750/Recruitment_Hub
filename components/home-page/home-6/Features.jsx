import Link from "next/link";

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
];

const Features = () => {
  return (
    <>
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
            <Link href="/Features">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
