import { Fragment, useState } from "react";
import "./styles.css";

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  const novoPaciente = (e) => {
    e.preventDefault();
    setPacientes([...pacientes, nome]);
    setNome("");
  };

  const novoUrgente = () => {
    setPacientes([nome, ...pacientes]);
    setNome("");
  };
  const atenderPaciente = () => {
    if (!pacientes.length) {
      alert("Não há paciente na fila de espera");
      return;
    }
    setAtendido(pacientes[0]);
    setPacientes(pacientes.slice(1));
  };

  return (
    <Fragment>
      <h1>Consultório Odontológico</h1>
      <form onSubmit={novoPaciente}>
        <p>
          <label>
            Paciente:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              autoFocus
            />
            {/* <input type="text" id="inPaciente" required autoFocus /> */}
            <input type="submit" value="Adicionar" />
            <input
              type="button"
              id="btUrgencia"
              value="Urgência"
              onClick={novoUrgente}
            />
            <input
              type="button"
              id="btAtender"
              value="Atender"
              onClick={atenderPaciente}
            />
          </label>
        </p>
      </form>
      <h3>
        Em Atendimento: <span className="fonte-azul">{atendido}</span>
      </h3>
      <pre>{pacientes.map((paciente) => paciente + "\n")}</pre>
    </Fragment>
  );
}
