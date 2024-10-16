import { useState, useEffect } from "react";
import rusticoVoador from "/src/img/rusticovoador.jpg";
import estevao from "/src/img/estevao.jpg";

export function CounterColateral() {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(true); // Estado para controlar se o contador está ativo

  useEffect(() => {
    let intervalo;

    if (ativo) {
      intervalo = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);
    }

    // Limpa o intervalo quando o componente for desmontado ou o estado "ativo" mudar
    return () => clearInterval(intervalo);
  }, [ativo]);

  const pararContador = () => {
    setAtivo(false);
  };

  const iniciarContador = () => {
    setAtivo(true);
  };

  const resetarContador = () => {
    setContador(0); // Zera o contador
    setAtivo(false); // Para o contador
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button className="btn-iniciar" onClick={ativo ? pararContador : iniciarContador}>
        {ativo ? "Parar" : "Iniciar"}
      </button>
      {/* Botão para resetar */}
      <button className="btn-resetar" onClick={resetarContador}>
        Reiniciar
      </button>
      
      <div className="condicao">
        {/* Condicional para exibir algo quando o contador chega a 10 */}
        {contador >= 10 && contador < 20 && (
          <>
            <h3>Parabéns você suportou 10s!</h3>
            <p>Receba o Rustico Voador!</p>
            <img src={rusticoVoador} alt="Rustico" />
          </>
        )}
        {contador >= 20 && (
          <>
            <h3>Parabéns desocupado.</h3>
            <p>Receba Estêvão William!</p>
            <img src={estevao} alt="Estevao" />
          </>
        )}
      </div>
    </div>
  );
}