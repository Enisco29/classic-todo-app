import React from "react";
import "./CSS/TodoItems.css";
import checkmark from "./assets/checkmark-icon-orange.png";
import radio from "./assets/radio-button-1.png";
import cross from "./assets/cross_icon.png";

const TodoItems = ({ no, display, text, setTodos }) => {
  const deleteItem = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="todo-items">
      <div
        className={`todo-items-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={radio} alt="" style={{ width: "40px", height: "40px" }} />
        ) : (
          <img
            src={checkmark}
            alt=""
            style={{ width: "40px", height: "40px" }}
          />
        )}
        <div className="texts">{text}</div>
      </div>
      <img
        onClick={() => deleteItem(no)}
        className="todo-items-cross"
        src={cross}
        alt=""
        style={{ width: "25px", height: "25px" }}
      />
    </div>
  );
};

export default TodoItems;
