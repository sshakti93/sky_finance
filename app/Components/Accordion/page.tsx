"use client";

import { useState, FC, ReactNode } from "react";
import "./Accordion.css";
import Image from "next/image";

interface AccordionProps {
  title: string;
  content: ReactNode;
}

const Accordion = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className="accordionButton" onClick={toggleAccordion}>
        {props.title}
        <Image
          src={"/images/accord.svg"}
          alt=""
          width={24}
          height={24}
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="accordionContent">
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
