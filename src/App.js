import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  /*체크기능*/
  const checkClick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.number === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  /*삭제기능 map안돌리고 바로 filter*/
  const delClick = (id) => {
    setTodos(todos.filter((todo) => todo.number != id));
    console.log(todos);
    /*filter로 돌려서 id가 같지않는것만 다시 setTodos로  변경해서 todos를 다시 돌려라*/
  };

  const editClick = (text, id) => {
    setTodos(
      todos.map((todo) => (todo.number === id ? { ...todo, text: text } : todo))
    );
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "#FF7F50" }}>T</h1>
        <h1>O</h1>
        &nbsp;
        <h1 style={{ color: "#FF7F50" }}>D</h1>
        <h1>O</h1>
        &nbsp;
        <h1 style={{ color: "#FF7F50" }}>L</h1>
        <h1>I</h1>
        <h1>S</h1>
        <h1>T</h1>
      </div>

      <Todo todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodo={setTodo}
        checkClick={checkClick}
        delClick={delClick}
        editClick={editClick}
      />
    </div>
  );
}
export default App;
