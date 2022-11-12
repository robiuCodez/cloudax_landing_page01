import { IFaqData } from "@/src/interfaces";
import React, { useEffect, useRef, useState } from "react";

const Collapsible = ({ summary, text }: IFaqData) => {
  const [open, setOpen] = useState<boolean>(false);
  const [symbol, setSymbol] = useState<string>("+");

  const handleCollapse = () => {
    // e.preventDefault()

    setOpen(!open);
    
  };

  return (
    <div
      className={
        open
          ? `border-y border-dashed border-t-orange-500 py-3`
          : "border-y border-dashed border-gray-50 py-3"
      }
    >
      <div
        className="flex items-center cursor-pointer justify-between"
        onClick={handleCollapse}
      >
        <button className={open ? `text-orange-500 font-bold` : `font-bold`}>
          {summary}
        </button>
        <div>{open ? <span>-</span> : <span>+</span>}</div>
      </div>
      <div>
        {open && (
          <div className="toggle">
            <h4>{text}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapsible;
