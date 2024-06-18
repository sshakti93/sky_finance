import React from "react";
import "./Headerpage.css";
import Image from "next/image";
export default function Headerpage() {
  return (
    <div>
      <div className="header-center">
        <div className="full-header">
          <div className="moblogo">
            <Image src={"/images/moblogo.svg"} alt="" width={152} height={32} />
          </div>
          <div className="site-logo">
            <Image
              src={"/images/sitelogo.svg"}
              alt="sky_finance"
              width={190}
              height={40}
            />
          </div>
          <div className="touch-button">
            <button>Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
