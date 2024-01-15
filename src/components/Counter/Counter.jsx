import React from 'react';
import './counterStyled.css';
import { useState } from 'react';

function Counter() {
  const [valor, setValor] = useState(0);

  const add = () => {
    setValor(valor + 1);
  };
  const subtraction = () => {
    setValor(valor - 1);
  };

  return (
    <div className="counter">
      <p>{valor}</p>
      <button onClick={add}>+</button>
      <button onClick={subtraction}>-</button>
    </div>
  );
}

export default Counter;
