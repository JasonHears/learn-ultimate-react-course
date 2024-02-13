import { useState } from "react";

const initialCount = 0;
const initialStep = 1;

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(initialCount); // today
  const [step, setStep] = useState(initialStep); // one day at a time

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handleSlider(e) {
    setStep(+e.target.value);
  }

  function handleInput(e) {
    setCount(+e.target.value);
  }

  function handleReset() {
    setCount(initialCount);
    setStep(initialStep);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <input
          type="range"
          min="1"
          max="10"
          onChange={handleSlider}
          value={step}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="number" value={count} onChange={handleInput} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
      {count === 0 && step === 1 ? null : (
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}
