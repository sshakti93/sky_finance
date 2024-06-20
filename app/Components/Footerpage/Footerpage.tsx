import Image from "next/image";
import React from "react";
import { styleText } from "util";
import "./Footerpage.css";
import Link from "next/link";

export default function Footerpage() {
  return (
    <div className="full-footer">
      <div className="top-footer">
        <div className="footer-logo">
          <Image
            src={"/images/footerlogo.svg"}
            alt=""
            width={90}
            height={108}
          />
        </div>
        <div className="line-btw"></div>
        <div className="footer-text">
          <p>
            Welcome to <span className="sky-text-inbtw">SKY FINANCIAL</span>,
            where we prioritize protecting your future above all else. Our About
            Us section offers a glimpse into who we are, our values, and why
            we're dedicated to ensuring your peace of mind. Meet our experienced
            team, learn about our history, and discover how our personalized
            approach to life insurance can safeguard your loved ones' financial
            security. At [Agency Name], we're here to guide you toward a future
            of confidence and security.
          </p>
        </div>
        <div className="line-btw"></div>
        <div className="connections">
          <div className="footer-phone">
            <div className="phone-img">
              <Image
                src={"/images/footerphone.svg"}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className="phone-no">
              <p>586-907-8700</p>
            </div>
          </div>
          <div className="footer-mail">
            <div className="mail-img">
              <Image
                src={"/images/footermail.svg"}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className="mail-id">
              <p>sam@sky.financial</p>
            </div>
          </div>
          <div className="footer-map">
            <div className="map-img">
              <Image
                src={"/images/footermap.svg"}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className="map-address">
              <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="left-bottom">
          <p>&copy; 2024 SKY FINANCIAL, New York, NY. All Rights Reserved.</p>
        </div>
        <div className="right-bottom">
          <Link href={"/Pages/Tos"}>
            <p>Terms of use</p>
          </Link>
          <Link href={"/Pages/Privacy"}>
            <p>Privacy & Other policies</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
