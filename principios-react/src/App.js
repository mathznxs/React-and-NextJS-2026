import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({
    nome: "Sr. Fulano",
    idade: 22,
    email: "srfulano@gmail.com",
  });

  // const [users, setUsers] = useState([]);

  function handleRegister(e) {
    e.preventDefault();

    alert("Usuário criado com sucesso!");
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    });
  }

  return (
    <div>
      <h1>Cadastrando usuários</h1>
      <form onSubmit={handleRegister} className="forms">
        <br />
        <label>Nome</label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>Idade</label>
        <br />
        <input
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit" className="button-forms">
          Cadastrar usuário
        </button>
      </form>

      <div className="users">
        <span>Bem vindo: {user.nome}</span>
        <br />
        <span>Idade: {user.idade}</span>
        <br />
        <span>Email: {user.email}</span>
      </div>
    </div>
  );
}
export default App;
