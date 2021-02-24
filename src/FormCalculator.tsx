import React from 'react';

interface FormCalculatorProps { }

function FormCalculator(props: FormCalculatorProps) {
  const [num1, setNum1] = React.useState('')
  const [num2, setNum2] = React.useState('')
  const [result, setResult] = React.useState('')

  const regex = /^\s*(:?(?:\d+)|(?:\d*\.\d+))\s*$/

  function handleChangeNum1(e: React.FormEvent<HTMLInputElement>) {
    setNum1(e.currentTarget.value);
  }

  function handleChangeNum2(e: React.FormEvent<HTMLInputElement>) {
    setNum2(e.currentTarget.value);
  }

  function validFloat(str: string) {
    return regex.test(str);
  }

  function isValidForm() {
    return validFloat(num1) && validFloat(num2);
  }

  function valid(str: string) {
    return !str || validFloat(str)
      ? null
      : <div className="error">Please enter a number</div>
  }

  function handleCalc(e: React.FormEvent) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1, num2 }),
    };
    fetch('http://localhost:4000/calc', requestOptions)
      .then(response => response.json())
      .then(({ result }) => setResult(result ? result.toString() : ''))
      .catch(e => setResult(''))
      .then(() => { });
  }

  return (
    <form
      onSubmit={handleCalc}
    >
      <div className="form-title">Enter the numbers</div>

      <div className="form-control">
        <input type="text" placeholder="number 1"
          value={num1}
          onChange={handleChangeNum1}
        />
        {valid(num1)}
      </div>

      <div className="form-control">
        <input type="text" placeholder="number 2"
          value={num2}
          onChange={handleChangeNum2}
        />
        {valid(num2)}
      </div>

      <div className="form-control">
        <button className="btn red"
          disabled={!isValidForm()}
        >Sum</button>
      </div>

      <hr />

      <div className="form-title">Results</div>

      <div className="form-control">
        <input type="text" placeholder="0" readOnly
          value={result}
        />
      </div>
    </form>
  );
}

export default FormCalculator;
