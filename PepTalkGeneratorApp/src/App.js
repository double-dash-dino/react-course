import './App.css';
import Card from "./Components/UI/Card.js"
import RandomPepTalkGenerator from "./Components/RandomPepTalkGenerator.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Need pep talk?
      </header>
      <Card>
<RandomPepTalkGenerator />
      </Card>
    </div>
  );
}

export default App;
