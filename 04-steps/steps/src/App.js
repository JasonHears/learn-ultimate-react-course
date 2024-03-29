import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1); // hook: starts with "use" can only be used at top-level
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((curStep) => curStep + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isO) => !isO)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              handleClick={handlePrevious}
              bgColor="#7950f2"
              textColor="#fff"
            >
              👈 Previous
            </Button>
            <Button handleClick={handleNext} bgColor="#7950f2" textColor="#fff">
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <>
      <p className="message">
        Step {step}: {children}1
      </p>
    </>
  );
}

function Button({ textColor, bgColor, handleClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
