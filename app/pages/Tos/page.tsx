import React from "react";
import "./Tos.css";
import Link from "next/link";
import Headerpage from "@/app/Components/Headerpage/Headerpage";

import tosdata from "../Tosdata.json";
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
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="tos-title">
          <p>
            Terms of use<span className="sky-inbtw">.</span>
          </p>
        </div>

        <div className="tos__columns">
          <div className="tos__firstcol">
            {tosdata &&
              tosdata.slice(0, 4).map((record) => {
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
            {tosdata &&
              tosdata.slice(4).map((record) => {
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
