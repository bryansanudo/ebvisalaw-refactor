import React from "react";

import styles from "@/style";
import { Link } from "react-router-dom";

import logoRedBlack from "@/assets/logo-red-black.png";
import logoWhite from "@/assets/logo-white.png";

const Footer = ({ darkMode }) => {
  return (
    <footer className="footer justify-between  border-t p-6 mb-10 ">
      <div>
        <div className="flex items-end  ">
          <img
            src={darkMode ? logoWhite : logoRedBlack}
            className="w-14 object-contain"
            alt=""
          />
          <p
            className={` ${
              darkMode ? "text-white" : "text-black"
            } text-[30px] tangerine mb-2 py-2      `}
          >
            Visa Law
          </p>
        </div>
      </div>
      <aside className="flex flex-col items-center justify-center">
        {/*   <div className="flex items-center justify-center gap-2 mt-2">
          <div
            className={`w-[40px] h-[40px] mask mask-hexagon-2 ${
              styles.flexCenter
            } hover:scale-105 duration-700 cursor-pointer ${
              blue ? "bg-primary " : "  bg-secondary "
            }  `}
          >
            <FaFacebookF className="text-white text-lg" />
          </div>
          <div
            className={`w-[40px] h-[40px] mask mask-hexagon-2 ${
              styles.flexCenter
            } hover:scale-105 duration-700 cursor-pointer ${
              blue ? "bg-primary " : "  bg-secondary "
            }`}
          >
            <FaLinkedinIn className="text-white text-lg" />
          </div>
        </div> */}
      </aside>
      <nav>
        <header className={`${styles.title}`}>Quick Links</header>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/eb1">EB-1</Link>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/eb2">EB-2</Link>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/eb3">EB-3</Link>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/faq">FAQ</Link>
        </div>
      </nav>

      <nav>
        <header className={`${styles.title}`}>Legal</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Terms of use
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Privacy policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
