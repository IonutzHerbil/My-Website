import React, { useState } from 'react';
import '../../styles/CalculatorApp.css';

const CalculatorApp = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay(prevDisplay => 
      prevDisplay === '0' ? number.toString() : prevDisplay + number
    );
  };

  const handleOperatorClick = (op) => {
    if (prevValue === null) {
      setPrevValue(parseFloat(display));
      setOperator(op);
      setDisplay('0');
    } else {
      calculate();
      setPrevValue(parseFloat(display));
      setOperator(op);
      setDisplay('0');
    }
  };

  const calculate = () => {
    const currentValue = parseFloat(display);
    
    if (prevValue === null || operator === null) return;

    let result;
    switch(operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '×':
        result = prevValue * currentValue;
        break;
      case '÷':
        result = prevValue / currentValue;
        break;
      case '%':
        result = prevValue % currentValue;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPrevValue(null);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(prevDisplay => prevDisplay + '.');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="calculator-grid">
          <button onClick={handleClear} className="button clear">C</button>
          <button onClick={() => handleOperatorClick('%')} className="button operator">%</button>
          <button onClick={() => handleOperatorClick('÷')} className="button operator">÷</button>
          <button onClick={() => handleOperatorClick('×')} className="button operator">×</button>
          
          <button onClick={() => handleNumberClick(7)} className="button number">7</button>
          <button onClick={() => handleNumberClick(8)} className="button number">8</button>
          <button onClick={() => handleNumberClick(9)} className="button number">9</button>
          <button onClick={() => handleOperatorClick('-')} className="button operator">-</button>
          
          <button onClick={() => handleNumberClick(4)} className="button number">4</button>
          <button onClick={() => handleNumberClick(5)} className="button number">5</button>
          <button onClick={() => handleNumberClick(6)} className="button number">6</button>
          <button onClick={() => handleOperatorClick('+')} className="button operator">+</button>
          
          <button onClick={() => handleNumberClick(1)} className="button number">1</button>
          <button onClick={() => handleNumberClick(2)} className="button number">2</button>
          <button onClick={() => handleNumberClick(3)} className="button number">3</button>
          <button onClick={calculate} className="button equals">=</button>
          
          <button onClick={() => handleNumberClick(0)} className="button number zero">0</button>
          <button onClick={handleDecimal} className="button number">.</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;