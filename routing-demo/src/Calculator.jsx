import React from 'react';

function Calculator() {
  const [n1, setN1] = React.useState(0);
  const [n2, setN2] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const onBtnOperationClick = (operationName) => {
    switch (operationName) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        setResult(n1 / n2);
        break;
      default:
        break;
    }
  };
  const onTxtN1Input = (evt) => setN1(parseInt(evt.target.value));
  return (
    <div>
      <h1>Calculator</h1>
      <hr />
      <input type="number" onInput={onTxtN1Input} />
      <input
        type="number"
        onInput={(evt) => setN2(parseInt(evt.target.value))}
      />
      <br />
      <button onClick={() => onBtnOperationClick("add")}>Add</button>
      <button onClick={() => onBtnOperationClick("subtract")}>Subtract</button>
      <button onClick={() => onBtnOperationClick("multiply")}>Multiply</button>
      <button onClick={() => onBtnOperationClick("divide")}>Divide</button>
      <div>{result}</div>
    </div>
  );
}

export default Calculator;