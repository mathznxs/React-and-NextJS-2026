import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  function handleRegister(e) {
    e.preventDefault();

    if (!input.trim()) return;

    if (editingTask) {
      setTask((prev) =>
        prev.map((item) =>
          item.id === editingTask.id ? { ...item, nome: input } : item,
        ),
      );
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        nome: input,
      };  

      setTask((prev) => [...prev, newTask]);
    }
    setInput("");
  }

  function handleDeleteTask(id) {
    setTask((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Cadastrando Tarefas</h1>

      <form onSubmit={handleRegister} className="form">
        <div className="input-task">
          <input
            placeholder="Digite uma tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit">{editingTask ? "Salvar" : "Cadastrar"}</button>
      </form>

      <div>
        <ul className="task-list">
          {task.map((item) => (
            <div key={item.id}>
              <li>{item.nome}</li>
              <button onClick={() => handleDeleteTask(item.id)}>Deletar</button>
              <button
                onClick={() => {
                  setEditingTask(item);
                  setInput(item.nome);
                }}
              >
                Editar
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
