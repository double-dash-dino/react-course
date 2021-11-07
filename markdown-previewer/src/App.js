import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="input card">
        <div className="input-header">Editor</div>
        <textarea
          className="input-field"
          type="text"
          value="
          # Welcome to the markdown previewer"
        ></textarea>
      </div>
      <div className="output card">
        <div className="output-header">Previewer</div>
        <div className="output-ouput">There will be markdown here</div>
      </div>
    </div>
  );
}

export default App;
