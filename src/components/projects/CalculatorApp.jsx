import React, { useState } from 'react';
import '../../styles/CalculatorApp.css';

const CalculatorApp = () => {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  const inputDigit = (d) => {
    setDisplay((cur) => {
      if (overwrite || cur === '0') {
        setOverwrite(false);
        return String(d);
      }
      return cur + d;
    });
  };

  const inputDecimal = () => {
    setDisplay((cur) => {
      if (overwrite) {
        setOverwrite(false);
        return '0.';
      }
      return cur.includes('.') ? cur : cur + '.';
    });
  };

  const clearAll = () => {
    setDisplay('0'); setPrev(null); setOp(null); setOverwrite(false);
  };

  const doCompute = (a, b, operator) => {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? 'Error' : a / b;
      case '%': return a % b;
      default: return b;
    }
  };

  const chooseOp = (nextOp) => {
    const current = parseFloat(display);
    if (prev === null) {
      setPrev(current);
    } else if (!overwrite && op) {
      const result = doCompute(prev, current, op);
      if (result === 'Error') {
        setDisplay('Error'); setPrev(null); setOp(null); setOverwrite(true);
        return;
      }
      setPrev(result);
      setDisplay(String(result));
    }
    setOp(nextOp);
    setOverwrite(true);
  };

  const equals = () => {
    if (op === null || prev === null) return;
    const current = parseFloat(display);
    const result = doCompute(prev, current, op);
    setDisplay(String(result));
    setPrev(null);
    setOp(null);
    setOverwrite(true);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className={`calculator-display${display === 'Error' ? ' error' : ''}`} aria-live="polite">
          {display}
        </div>
        <div className="calculator-grid">
          <button className="calculator-button clear" onClick={clearAll}>C</button>
          <button className="calculator-button operator" onClick={() => chooseOp('%')}>%</button>
          <button className="calculator-button operator" onClick={() => chooseOp('÷')}>÷</button>
          <button className="calculator-button operator" onClick={() => chooseOp('×')}>×</button>

          <button className="calculator-button number" onClick={() => inputDigit(7)}>7</button>
          <button className="calculator-button number" onClick={() => inputDigit(8)}>8</button>
          <button className="calculator-button number" onClick={() => inputDigit(9)}>9</button>
          <button className="calculator-button operator" onClick={() => chooseOp('-')}>-</button>

          <button className="calculator-button number" onClick={() => inputDigit(4)}>4</button>
          <button className="calculator-button number" onClick={() => inputDigit(5)}>5</button>
          <button className="calculator-button number" onClick={() => inputDigit(6)}>6</button>
          <button className="calculator-button operator" onClick={() => chooseOp('+')}>+</button>

          <button className="calculator-button number" onClick={() => inputDigit(1)}>1</button>
          <button className="calculator-button number" onClick={() => inputDigit(2)}>2</button>
          <button className="calculator-button number" onClick={() => inputDigit(3)}>3</button>
          <button className="calculator-button equals" onClick={equals}>=</button>

          <button className="calculator-button number zero" onClick={() => inputDigit(0)}>0</button>
          <button className="calculator-button number" onClick={inputDecimal}>.</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
