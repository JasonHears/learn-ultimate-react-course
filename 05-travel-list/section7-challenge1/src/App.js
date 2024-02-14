import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipsArray, setTipsArray] = useState([0, 0]);

  const tipPercent =
    tipsArray.reduce((acc, tip) => acc + +tip / 100, 0) / tipsArray.length;
  const tipAmount = Math.trunc(billAmount * tipPercent * 100) / 100;

  function handleAddTip(idx, amt) {
    setTipsArray(
      tipsArray.slice().map((tip, cnt) => (idx === cnt ? amt : tip))
    );
  }

  function handleReset() {
    setBillAmount("");
    setTipsArray([0, 0]);
  }

  return (
    <>
      <BillAmount amount={billAmount} onChange={setBillAmount}>
        How much was the bill?
      </BillAmount>
      <ServiceRating onChange={handleAddTip} index={0} tipsArray={tipsArray}>
        How did you like the service?
      </ServiceRating>
      <ServiceRating onChange={handleAddTip} index={1} tipsArray={tipsArray}>
        How did your friend like the service?
      </ServiceRating>
      {billAmount > 0 ? (
        <>
          <Total billAmount={billAmount} tipAmount={tipAmount} />
          <p></p>
          <button onClick={handleReset}>Reset</button>
        </>
      ) : (
        ""
      )}
    </>
  );
}

function BillAmount({ amount, onChange, children }) {
  return (
    <div>
      {children}
      <input
        type="text"
        value={amount}
        onChange={(e) => onChange(+e.target.value)}
        placeholder="Bill amount..."
      />
    </div>
  );
}

function ServiceRating({ onChange, index, tipsArray, children }) {
  return (
    <div>
      {children}
      <select
        onChange={(e) => onChange(index, +e.target.value)}
        value={tipsArray[index]}
      >
        <option value="0">No dice 🙅🏻 (0%)</option>
        <option value="5">It wasn't good 🫤 (5%)</option>
        <option value="10">It was ok 💁🏻‍♂️ (10%)</option>
        <option value="15">It was great 👍🏻 (15%)</option>
        <option value="20">Absolutely amazing! 👏🏻 (20%)</option>
      </select>
    </div>
  );
}

function Total({ billAmount, tipAmount }) {
  const total = billAmount + tipAmount;
  return (
    <h2>
      You pay ${total} (${billAmount} + ${tipAmount} tip)
    </h2>
  );
}
