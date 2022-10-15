import { IFaqData } from "@/src/interfaces";
import React, { useEffect, useRef } from "react";

const Collapsible = ({ summary, text }: IFaqData) => {
    const collap = useRef()

    useEffect(() => {
        const handleCollapse = (e: Event) => {
            console.log("collapsed");
        }

        const collapseFaq = collap.current
        collapseFaq.addEventListener("click", handleCollapse)
    })
    
  return (
    <div>
      <button type="button" className="collapsible">
        {summary}
      </button>
      <p className="collapsible_content">{text}</p>
    </div>
  );
};

export default Collapsible;
