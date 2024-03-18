import "./App.css";

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
          <i className="fa-brands fa-linkedin App-icon fade-in" />
          <i className="fa-brands fa-square-github App-icon" />
          <i className="fa-brands fa-spotify App-icon" />
          <i className="fa-solid fa-square-envelope App-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
