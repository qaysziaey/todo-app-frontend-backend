import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { FeatherIcon } from "feather-icons";

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
        {loading ? (
          <p>Loading...</p>
        ) : todos ? (
          <>
            <div className="users-buttons-container">
              <a href="#">Sarah</a>
              <a href="#">Matt</a>
            </div>
            <div className="list-container">
              <div className="todo-input-container">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Add a task"
                />
                <button>Add</button>
              </div>
              <div className="todo-item">
                <ul>
                  {todos.map((todo) => (
                    <li className="list-item" key={todo.id}>
                      {todo.content}
                      <div className="list-item-buttons">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </li>
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
