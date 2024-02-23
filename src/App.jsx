import "./App.css";
import axios from "axios";

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <p>Manage your tasks with ease</p>
      <div className="todos-main-container">
        <div className="users-buttons-container">
          <button>Tom</button>
          <button>Sam</button>
          <button>Bob</button>
          <button>Tim</button>
          <button>John</button>
        </div>
        <div className="list-container">list of users</div>
      </div>
    </div>
  );
}

export default App;
