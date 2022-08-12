import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const getNumber = (number) => {
    if (secondNumber === 0) {
      setSecondNumber(number);
    } else if (secondNumber) {
      setSecondNumber("" + secondNumber + number);
    } else if (firstNumber === 0) {
      setFirstNumber(number);
    } else {
      setFirstNumber("" + firstNumber + number);
    }
  };

  const getOperation = (sign) => {
    if (sign !== "=") {
      setOperation(sign);
      setSecondNumber(0);
    } else {
      switch (operation) {
        case "+":
          setFirstNumber(parseFloat(firstNumber) + parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;
        case "-":
          setFirstNumber(parseFloat(firstNumber) - parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;
        case "/":
          setFirstNumber(parseFloat(firstNumber) / parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;
        case "*":
          setFirstNumber(parseFloat(firstNumber) * parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;

        default:
          return;
      }
    }
  };

  const getDisplay = () => {
    if (secondNumber) {
      return `${firstNumber}${operation}${secondNumber}`;
    } else if (operation) {
      return `${firstNumber}${operation}`;
    } else {
      return firstNumber;
    }
  };

  return (
    <div className="App">
      <div className="cal-body position-absolute top-50 start-50 translate-middle bg-dark rounded-5 border border-primary">
        <h2 className="ms-2 my-4 fs-6 fw-bold text-white">Jeff's Calculator</h2>
        <form name="form1" class="px-3">
          <h1
            id="display"
            className="text-white my-4 mx-4 d-flex justify-content-end"
          >
            {getDisplay()}
          </h1>
        </form>
        <div class="row justify-content-center mt-5">
          <button
            type="button"
            onClick={() => {
              window.location.reload();
            }}
            className="col-2 mx-2 mb-3 circle rounded-circle bg-light"
          >
            <h2 class="text-secondary">AC</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              secondNumber
                ? setSecondNumber(secondNumber * -1)
                : setFirstNumber(firstNumber * -1);
            }}
            className="col-2 mx-2 circle rounded-circle bg-light"
          >
            <h2 class="text-secondary">+/-</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              secondNumber
                ? setSecondNumber(secondNumber / 100)
                : setFirstNumber(firstNumber / 100);
            }}
            className="col-2 mx-2 circle rounded-circle bg-light"
          >
            <h2 class="text-secondary">%</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getOperation("/");
            }}
            className="col-2 mx-2 circle rounded-circle bg-warning"
          >
            <h2 class="text-dark">÷</h2>
          </button>
        </div>
        <div className="row justify-content-center">
          <button
            type="button"
            onClick={() => {
              getNumber(7);
            }}
            className="col-2 mb-2 mx-2 circle rounded-circle bg-secondary"
          >
            <h2 className="text-white">7</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getNumber(8);
            }}
            class="col-2 mx-2 circle rounded-circle bg-secondary"
          >
            <h2 class="text-white">8</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getNumber(9);
            }}
            className="col-2 mx-2 circle rounded-circle bg-secondary"
          >
            <h2 class="text-white">9</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getOperation("*");
            }}
            className="col-2 mx-2 circle rounded-circle bg-warning"
          >
            <h2 className="text-dark">x</h2>
          </button>
        </div>
        <div className="row justify-content-center">
          <button
            type="button"
            onClick={() => {
              getNumber(4);
            }}
            className="col-2 m-2 circle rounded-circle bg-secondary"
          >
            <h2 className="text-white">4</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getNumber(5);
            }}
            className="col-2 m-2 circle rounded-circle bg-secondary"
          >
            <h2 className="text-white">5</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getNumber(6);
            }}
            className="col-2 m-2 circle rounded-circle bg-secondary"
          >
            <h2 className="text-white">6</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getOperation("-");
            }}
            className="col-2 m-2 circle rounded-circle bg-warning"
          >
            <h2 className="text-dark">-</h2>
          </button>
        </div>
        <div className="row justify-content-center">
          <button
            type="button"
            onClick={() => {
              getNumber(1);
            }}
            className="col-2 m-2 circle rounded-circle bg-secondary"
          >
            <h2 className="text-white">1</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getNumber(2);
            }}
            className="col-2 m-2 circle rounded-circle bg-secondary"
          >
            <h2 className="text-white">2</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getNumber(3);
            }}
            class="col-2 m-2 circle rounded-circle bg-secondary"
          >
            <h2 class="text-white">3</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getOperation("+");
            }}
            class="col-2 m-2 circle rounded-circle bg-warning"
          >
            <h2 class="text-dark">+</h2>
          </button>
        </div>
        <div class="row justify-content-center">
          <button
            type="button"
            onClick={() => {
              getNumber(0);
            }}
            class="col-4 m-2 circle rounded-pill bg-secondary"
          >
            <h2 class="text-white ps-2">0</h2>
          </button>
          <button
            type="button"
            onClick="clickNumber('.')"
            class="col-2 m-2 ms-4 circle rounded-circle bg-secondary"
          >
            <h2 class="text-white">.</h2>
          </button>
          <button
            type="button"
            onClick={() => {
              getOperation("=");
            }}
            class="col-2 m-2 circle rounded-circle bg-warning"
          >
            <h2 class="text-dark">=</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
