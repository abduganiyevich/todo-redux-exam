import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { ADD, REMOVE, DONE } from "./todoSlice/todoSlice";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const[done,setDone]=useState([]);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleAdd() {
    if (text) {
      dispatch(ADD(text));
      setText("");
    }
  }

  function handleRemove(id) {
    dispatch(REMOVE(id));
  }
  
  function handleDone(id) {
    dispatch(DONE(id))
  }


  return (
    <div className="container">
      <div className="todo-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Add a new task"
            onChange={handleChange}
          />
          <button onClick={handleAdd}>
            <FaPlus />
          </button>
        </div>

        <div className="chart-todo">
          <h3>Task to do-4</h3>
          <ul>
            {todos.length == 0 && (
              <div>
                <h2 style={{ color: "white", fontSize: "14px" }}>
                  you don't have any todos
                </h2>
              </div>
            )}
            {todos.length > 0 &&
              todos.map((todo, index) => {
                return (
                  <div className="todo-item">
                    <li key={index} className="todo-el" style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}>
                      <p>{todo.text}</p>
                      <div className="todo-icon">
                        <button onClick={() => handleDone(todo.id)}>
                          <FaCheck />
                        </button>
                        <button onClick={() => handleRemove(todo.id)}>
                          {" "}
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
        <div className="done-todo">
          <h2>Done-1</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
