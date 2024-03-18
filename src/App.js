import "./App.css";
import { SPOTIFY, GITHUB, LINKEDIN, EMAIL } from "./constants";

const IconWithLink = ({ url, icon }) => (
  <a href={url} className="App-icon fade-in">
    <i className={icon} />
  </a>
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
          I'm a full stack developer, musician, and general handy person.
        </div>
        <div className="App-text-content fade delay-3">This is my website.</div>
        <div className="icon-container fade delay-4">
          <IconWithLink url={LINKEDIN} icon="fa-brands fa-linkedin" />
          <IconWithLink url={GITHUB} icon="fa-brands fa-square-github" />
          <IconWithLink url={SPOTIFY} icon="fa-brands fa-spotify" />
          <IconWithLink url={EMAIL} icon="fa-solid fa-square-envelope" />
        </div>
      </div>
    </div>
  );
}

export default App;
