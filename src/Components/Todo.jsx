import React, { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";
import todo from "./assets/to-do-list-3d-icon-download-in-png-blend-fbx-gltf-file-formats--task-reminder-check-schedule-clipboard-pack-user-interface-icons-6324684.png";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">
        To-Do-List
        <img src={todo} alt="" style={{ width: "40px", height: "40px" }} />
      </div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <div
          onClick={() => {
            add();
          }}
          className="todo-add-btn"
        >
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              setTodos={setTodos}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
      <p className="footer">
        This project is created by ENISCO <span>&#x270C;&#x1F3FD;</span>
      </p>
    </div>
  );
};

export default Todo;
