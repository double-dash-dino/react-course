import "./App.css";
import Card from "./Components/UI/Card.js";
import RandomPepTalkGenerator from "./Components/RandomPepTalkGenerator.js";
import RandomShakespeareInsultGenerator from "./Components/RandomShakespeareInsultGenerator.js";

function App() {
  return (
    <div className="App">
      <Card>
        <div className="App-header">
          <RandomPepTalkGenerator />
          <RandomShakespeareInsultGenerator />
        </div>
      </Card>
    </div>
  );
}

export default App;
