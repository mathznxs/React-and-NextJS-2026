import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefa, setTarefa] = useState(() => {
    const storage = localStorage.getItem("@tarefas");

    if (storage) {
      try {
        return JSON.parse(storage);
      } catch {
        return [];
      }
    }

    return [
      { id: 1, nome: "Estudar React" },
      { id: 2, nome: "Pagar conta de luz" },
    ];
  });

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefas");

    if (tarefasStorage) {
      setTarefa(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefa));
  }, [tarefa]);

  function handleRegister(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      nome: input,
    };

    setTarefa((prev) => [...prev, newTask]);

    setInput("");
  }

  function handleDeleteTask(id) {
    setTarefa((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Cadastrando usuários</h1>
      <form onSubmit={handleRegister} className="forms">
        <br /> <label>Nome da tarefa: </label>
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br /> <br />
        <button type="submit" className="button-forms">
          Cadastrar tarefa
        </button>
      </form>
      <div className="users">
        <ul>
          {tarefa.map((item) => (
            <div key={item.id} className="task">
              <li>{item.nome}</li>
              <button onClick={() => handleDeleteTask(item.id)}>
                Deletar tarefa
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
