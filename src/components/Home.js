import React, { useEffect } from "react";
import { IconCredit, IconSocials } from "./Icons";
import Tooltip from "./Tooltip";
import { TOOLTIP_TEXT } from "../constants";

const getEverVisited = () => localStorage.getItem("everVisited") === null;

export default function Home() {
  let animate = "";

  useEffect(() => {
    if (getEverVisited()) {
      localStorage.setItem("everVisited", true);
    }
  }, []);

  if (getEverVisited()) {
    animate = "fade delay";
  }

  return (
    <div className="p-3">
      <div className={`home-text-header ${animate}`}>Hey! </div>
      <div className={`home-text-header ${animate}-1`}>
        My name is Christo <span>(He/Him)</span>
      </div>
      <div className={`home-text-content mt-3 ${animate}-2`}>
        I'm a{" "}
        <Tooltip content={TOOLTIP_TEXT.DEV}>
          <span className="color-blue">full stack developer</span>
        </Tooltip>
        ,{" "}
        <Tooltip content={TOOLTIP_TEXT.MUSIC}>
          <span className="color-red">musician</span>
        </Tooltip>
        , and{" "}
        <Tooltip content={TOOLTIP_TEXT.OUTDOORS}>
          <span className="color-green">amateur outdoorsman</span>
        </Tooltip>
      </div>
      <div className={`home-text-content mt-3 ${animate}-3`}>
        Welcome to my home page
      </div>
      <IconSocials animate={animate} />
      <IconCredit />
    </div>
  );
}
