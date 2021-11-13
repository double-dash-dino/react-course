import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="calculator-card">
        <div className="calculator-screen">
          <div className="calculator-operations">1+1+0</div>
          <div className="calculator-result">2</div>
        </div>
        <div className="calculator-pad">
          <div className="calculator-numbers">
            <button className="number-button" id="9">
              7
            </button>
            <button className="number-button" id="8">
              8
            </button>
            <button className="number-button" id="7">
              9
            </button>
            <button className="number-button" id="6">
              4
            </button>
            <button className="number-button" id="5">
              5
            </button>
            <button className="number-button" id="4">
              6
            </button>
            <button className="number-button" id="3">
              1
            </button>
            <button className="number-button" id="2">
              2
            </button>
            <button className="number-button" id="1">
              3
            </button>
            <button className="number-button" id="zero">
              0
            </button>
            <button className="number-button" id="decimal-point">
              .
            </button>
          </div>
          <div className="calculator-operators">
            <button className="operator-button" id="plus">
              +
            </button>
            <button className="operator-button" id="minus">
              -
            </button>
            <button className="operator-button" id="multiply">
              x
            </button>
            <button className="operator-button" id="divide">
              /
            </button>
          </div>

          <div className="calculator-controls">
            <button className="control-button" id="clear">
              A/C
            </button>
            <button className="control-button" id="equals">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
