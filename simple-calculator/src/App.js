import "./App.css";
import React, { useState } from "react";

function App() {
  const [operations, setOperations] = useState("");
  const [result, setResult] = useState("0");

  const clearHandler = () => {
    setOperations("");
    setResult("0");
  };

  const numberClickHandler = (event) => {
    if (
      // Check for mutliple zeros at the start of an number
      operations.length !== 0 &&
      operations[operations.length - 1] === "0" &&
      operations[operations.length - 2] === ("+" || "-" || "*" || "/")
    ) {
      setOperations(operations.slice(0, -1) + event.target.value);
    } else {
      setOperations(operations + event.target.value);
    }
  };

  const equalsHandler = () => {
    setResult(operations);
  };

  return (
    <div className="App">
      <div className="calculator-card">
        <div className="calculator-screen" id="display">
          <div className="calculator-operations">{operations}</div>
          <div className="calculator-result">{eval(result)}</div>
        </div>
        <div className="calculator-pad">
          <div className="calculator-numbers">
            <button
              className="number-button"
              id="seven"
              value="7"
              onClick={numberClickHandler}
            >
              7
            </button>
            <button
              className="number-button"
              id="eight"
              value="8"
              onClick={numberClickHandler}
            >
              8
            </button>
            <button
              className="number-button"
              id="nine"
              value="9"
              onClick={numberClickHandler}
            >
              9
            </button>
            <button
              className="number-button"
              id="four"
              value="4"
              onClick={numberClickHandler}
            >
              4
            </button>
            <button
              className="number-button"
              id="five"
              value="5"
              onClick={numberClickHandler}
            >
              5
            </button>
            <button
              className="number-button"
              id="six"
              value="6"
              onClick={numberClickHandler}
            >
              6
            </button>
            <button
              className="number-button"
              id="one"
              value="1"
              onClick={numberClickHandler}
            >
              1
            </button>
            <button
              className="number-button"
              id="two"
              value="2"
              onClick={numberClickHandler}
            >
              2
            </button>
            <button
              className="number-button"
              id="three"
              value="3"
              onClick={numberClickHandler}
            >
              3
            </button>
            <button
              className="number-button"
              id="zero"
              value="0"
              onClick={numberClickHandler}
            >
              0
            </button>
            <button
              className="number-button"
              id="decimal"
              value="."
              onClick={numberClickHandler}
            >
              .
            </button>
          </div>
          <div className="calculator-operators">
            <button
              className="operator-button"
              id="add"
              value="+"
              onClick={numberClickHandler}
            >
              +
            </button>
            <button
              className="operator-button"
              id="subtract"
              value="-"
              onClick={numberClickHandler}
            >
              -
            </button>
            <button
              className="operator-button"
              id="multiply"
              value="*"
              onClick={numberClickHandler}
            >
              x
            </button>
            <button
              className="operator-button"
              id="divide"
              value="/"
              onClick={numberClickHandler}
            >
              /
            </button>
          </div>

          <div className="calculator-controls">
            <button
              className="control-button"
              id="clear"
              onClick={clearHandler}
            >
              A/C
            </button>
            <button
              className="control-button"
              id="equals"
              onClick={equalsHandler}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
