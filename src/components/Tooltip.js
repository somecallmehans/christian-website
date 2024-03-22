import React, { useState } from "react";
import "../styles/tooltip.css";

export default function Tooltip({ content, children }) {
  let timeout;
  const [active, setActive] = useState();

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className="tooltip-container tooltip-fade">{content}</div>
      )}
    </div>
  );
}
