import Card from "./Components/UI/Card.js";
import UserLogger from "./Components/UserLogger.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card>
        <UserLogger />
      </Card>
    </div>
  );
}

export default App;
