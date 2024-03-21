import React, { useEffect } from "react";
import { IconCredit, IconSocials } from "./Icons";

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
    <div className="home">
      <div className={`home-text-header ${animate}`}>Hey! </div>
      <div className={`home-text-header ${animate}-1`}>
        My name is Christo <span>(He/Him)</span>
      </div>
      <div className={`home-text-content ${animate}-2`}>
        I'm a full stack developer, musician, and general outdoorsy person
      </div>
      <div className={`home-text-content ${animate}-3`}>
        Welcome to my home page
      </div>
      <IconSocials animate={animate} />
      <IconCredit />
    </div>
  );
}
