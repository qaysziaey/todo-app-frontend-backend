import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getTodos() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://todo-express-js-henna.vercel.app"
        );
        setTodos(response.data);
        console.log(response.data);
      } catch (error) {
        setErrorMessage("Error retrieving todos. Please try again later.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getTodos();
  }, []);

  return (
    <div>
      <h1 className="app-title">Todo App</h1>
      <p>Manage your tasks with ease</p>
      <div className="todos-main-container">
        <div className="users-buttons-container">
          <a href="#">Sarah</a>
          <a href="#">Matt</a>
          <a href="#">Lisa</a>
          <a href="#">Joe</a>
          <a href="#">Alex</a>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : todos ? (
          <>
            <div className="list-container">
              <div className="todo-item">
                <ul>
                  <li>some to do</li>
                  {todos.map((todo) => (
                    <li key={todo.id}>{todo.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
