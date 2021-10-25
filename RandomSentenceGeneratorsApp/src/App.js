import "./App.css";
import Card from "./Components/UI/Card.js";
import RandomSentenceGenerator from "./Components/RandomSentenceGenerator.js";

function App() {
  return (
    <div className="App">
      <Card className="App-header">
        <RandomSentenceGenerator />
      </Card>
    </div>
  );
}

export default App;

// TODO: ADD A METHODS FOLDER TO STORE GETNUMBER AND GETSENTENCE FUNCTIONS
