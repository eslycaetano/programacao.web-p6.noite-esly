import { useState, useEffect } from "react"

export function CounterColateral() {
  const [contador, setContador] = useState(0);
  const [intervalo, setIntervalo] = useState(null);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={a}></button>
      <button onClick={a}></button>
    </div>
  );
};

export default CounterColateral;