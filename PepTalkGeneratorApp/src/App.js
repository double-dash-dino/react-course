import './App.css';
import Card from "./Components/UI/Card.js"
import RandomPepTalkGenerator from "./Components/RandomPepTalkGenerator.js"

function App() {
  return (
    <div className="App">
      
      <Card>
      <header className="App-header">
        Need pep talk?
<RandomPepTalkGenerator />
      </header>
      </Card>
    </div>
  );
}

export default App;
