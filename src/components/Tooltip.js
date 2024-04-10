import React, { useState } from "react";
import "../styles/tooltip.css";

export default function Tooltip({ content, hide, children }) {
  let timeout;
  const [active, setActive] = useState();

  if (hide) return <React.Fragment>{children}</React.Fragment>;

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
