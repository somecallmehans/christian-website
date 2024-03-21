import React from "react";
import { SPOTIFY, GITHUB, LINKEDIN, EMAIL } from "../constants";

export const IconWithLink = ({ url, icon, type }) => (
  <a href={url} className={`App-icon ${type}`}>
    <i className={icon} />
  </a>
);

export const IconCredit = () => (
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

export const IconSocials = ({ animate }) => (
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
);
