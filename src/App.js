import "./App.css";
import { useState, useEffect } from "react";
import { SPOTIFY, GITHUB, LINKEDIN, EMAIL } from "./constants";

const IconWithLink = ({ url, icon, type }) => (
  <a href={url} className={`App-icon ${type}`}>
    <i className={icon} />
  </a>
);

const IconCredit = () => (
  <div
    style={{
      position: "absolute",
      bottom: "0",
      left: "0",
      fontSize: "10px",
      color: "inherit",
    }}
  >
    <a
      target="_blank"
      style={{ textDecoration: "none", color: "inherit" }}
      href="https://icons8.com/icon/12860/coffee-to-go"
    >
      Coffee
    </a>{" "}
    icon by{" "}
    <a
      target="_blank"
      style={{ textDecoration: "none", color: "inherit" }}
      href="https://icons8.com"
    >
      Icons8
    </a>
  </div>
);

const getEverVisited = () => localStorage.getItem("everVisited") === null;

function App() {
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
    <div className="App">
      <div>
        <div className={`App-text-header ${animate}`}>Hey! </div>
        <div className={`App-text-header ${animate}-1`}>
          My name is Christo <span>(He/Him)</span>
        </div>
        <div className={`App-text-content ${animate}-2`}>
          I'm a full stack developer, musician, and general outdoorsy person
        </div>
        <div className={`App-text-content ${animate}-3`}>
          Welcome to my home page
        </div>
        <div className={`icon-container ${animate}-4`}>
          <IconWithLink
            url={LINKEDIN}
            icon="fa-brands fa-linkedin"
            type={`linkedin ${animate}-5`}
          />
          <IconWithLink
            url={GITHUB}
            icon="fa-brands fa-square-github"
            type={`github ${animate}-6`}
          />
          <IconWithLink
            url={SPOTIFY}
            icon="fa-brands fa-spotify"
            type={`spotify ${animate}-7`}
          />
          <IconWithLink
            url={EMAIL}
            icon="fa-solid fa-square-envelope"
            type={`email ${animate}-8`}
          />
        </div>
        <IconCredit />
      </div>
    </div>
  );
}

export default App;
