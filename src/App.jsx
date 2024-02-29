import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPlus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@material-tailwind/react";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  // const url = "https://todo-express-js-henna.vercel.app";
  const url = "https://todo-app-with-mongo.onrender.com";

  useEffect(() => {
    async function getTodos() {
      setLoading(true);
      try {
        const response = await axios.get(`${url}`);
        setTodos(response.data);
        console.log(response.data);
      } catch (error) {
        setErrorMessage("Error retrieving todos. Please try again later.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    async function getUsers() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://todo-express-js-henna.vercel.app/users"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        setErrorMessage("Error retrieving todos. Please try again later.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getTodos();
    getUsers();
  }, []);

  return (
    <div>
      <div className="todos-main-container">
        <h1 className="app-title">Todo App</h1>
        <p>Manage your tasks with ease</p>
        {loading ? (
          <p>Loading...</p>
        ) : todos ? (
          <>
            <div className="input-container">
              <input
                type="text"
                name="todo"
                id="todo"
                placeholder="Add a task"
              />

              <Button>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <div className="users-buttons-container">
              {users.map((user) => (
                <a href="#">{user.name}</a>
              ))}
            </div>
            <div className="list-container">
              <div className="todo-item">
                <ul>
                  {todos.map((todo) => (
                    <li className="list-item" key={todo.id}>
                      <p>{todo.content}</p>
                      <div className="list-item-buttons">
                        <a href="#">
                          {" "}
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </a>
                        <a href="#">
                          <FontAwesomeIcon icon={faXmark} />
                        </a>
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
