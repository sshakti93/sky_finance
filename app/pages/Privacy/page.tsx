import React from "react";
import Headerpage from "@/app/Components/Headerpage/Headerpage";
import Link from "next/link";
import "./Privacy.css";
import privdata from "../Privacy/Privacydata.json";

export default function page() {
  return (
    <div className="tos-page">
      <Headerpage />
      <div className="tos-full">
        <div className="home-nav">
          <div className="home-link">
            <Link href={"/"}>
              <p>Home</p>
            </Link>
          </div>
          <div className="greater-than">
            <p>&gt;</p>
          </div>
          <div className="terms-cond">
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="tos-title">
          <p>
            Privacy & Other policies<span className="sky-inbtw">.</span>
          </p>
        </div>

        <div className="privacy-defn">
          <p>
            At <span className="sky-inbtw">SKY FINANCIAL</span>, we are
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you visit our website or
            interact with our services.
          </p>
        </div>
        <div className="tos__columns">
          <div className="tos__firstcol">
            {privdata &&
              privdata.slice(0, 3).map((record) => {
                return (
                  <div className="grid-tos" key={record.id}>
                    <div className="grid-title">{record.title}</div>
                    {/* <br /> */}
                    <div className="grid-desc">{record.content}</div>
                  </div>
                );
              })}
          </div>

          <div className="tos__firstcol">
            {privdata &&
              privdata.slice(3).map((record) => {
                return (
                  <div className="grid-tos" key={record.id}>
                    <div className="grid-title">{record.title}</div>
                    {/* <br /> */}
                    <div className="grid-desc">{record.content}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
