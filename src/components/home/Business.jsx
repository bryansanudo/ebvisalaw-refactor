import styles, { layout } from "@/style";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import star from "@/assets/Star.svg";
import shield from "@/assets/Shield.svg";
import send from "@/assets/Send.svg";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

export const features = [
  {
    id: "feature-1",
    icon: <HiUserGroup />,
    title: "Expertise Rewards",
    content:
      "Unlock tantalizing combinations of legal promotions and professional rewards with our buffet of expert legal services.",
  },
  {
    id: "feature-2",
    icon: <MdOutlineSecurity />,
    title: "100% Legal Security",
    content:
      "We proactively ensure the security of your confidential information and legal transactions, providing you with a shield against any legal concerns.",
  },
  {
    id: "feature-3",
    icon: <BiTransfer />,
    title: "Case Transfer Assistance",
    content:
      "Effortlessly transfer your legal cases to us for expert handling. Our streamlined process can save you time and resources in managing legal matters.",
  },
];

const FeatureCard = ({ icon, title, content, index, darkMode }) => (
  <div
    className={`flex items-center flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } ${
      darkMode
        ? "shadow-sm shadow-white feedback-card  "
        : "shadow-md shadow-black hover:scale-105 duration-500"
    } `}
  >
    <div
      className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-primary `}
    >
      <span className="text-white text-3xl">{icon}</span>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className={`${styles.title}`}>{title}</h4>
      <p className={`${styles.subtitle}`}>{content}</p>
    </div>
  </div>
);

const Business = ({ darkMode }) => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Your Immigration Journey, Our Legal Expertise
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Navigate employment-based immigration effortlessly with our skilled
        attorneys. From visas to green cards, we've got you covered for a smooth
        journey to your U.S. professional goals.
      </p>

      <Link to="/contact">
        <button className={`${styles.button} bg-primary `}>Get Started</button>
      </Link>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          {...feature}
          index={index}
          darkMode={darkMode}
        />
      ))}
    </div>
  </section>
);

export default Business;
