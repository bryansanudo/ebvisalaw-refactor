import React from "react";
import styles from "@/style";
import { Billing, Business, CardDeal, Clients, CTA, Hero } from "@/components";

import Services from "@/components/Services";
import Practices from "@/components/Practices";
import Advantages from "@/components/Advantages";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Home = ({ darkMode }) => {
  return (
    <>
      <div className={`dark:bg-accent mt-24 ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Business darkMode={darkMode} />

          <Billing />
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          <CardDeal />

          <Services darkMode={darkMode} />
          <Advantages darkMode={darkMode} />
          <Timeline darkMode={darkMode} />
          <Clients />
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Home;
