import "./App.css";
import { SPOTIFY, GITHUB, LINKEDIN, EMAIL } from "./constants";

const IconWithLink = ({ url, icon }) => (
  <a href={url} className="App-icon fade-in">
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

function App() {
  return (
    <div className="App">
      <div>
        <div className="App-text-header fade">Hey! </div>
        <div className="App-text-header fade delay-1">
          My name is Christian <span>(He/Him)</span>.
        </div>
        <div className="App-text-content fade delay-2">
          I'm a full stack developer, musician, and general outdoorsy person.
        </div>
        <div className="App-text-content fade delay-3">This is my website.</div>
        <div className="icon-container fade delay-4">
          <IconWithLink url={LINKEDIN} icon="fa-brands fa-linkedin" />
          <IconWithLink url={GITHUB} icon="fa-brands fa-square-github" />
          <IconWithLink url={SPOTIFY} icon="fa-brands fa-spotify" />
          <IconWithLink url={EMAIL} icon="fa-solid fa-square-envelope" />
        </div>
        <IconCredit />
      </div>
    </div>
  );
}

export default App;
