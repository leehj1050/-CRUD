import React from "react";
import styled from "styled-components";

const Form = styled.form`
  input {
    width: 250px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 10px;
    &:focus {
      outline: none;
      border: 1px solid tomato;
    }
  }
  button {
    width: 70px;
    height: 40px;
    margin-left: 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: tomato;
    border: 1px solid tomato;
    &:hover {
      transform: scale(1.1);
      color: #fff;
    }
  }
`;

/*const가 아닌 let으로 쓰니깐 됨 ! */
let nextid = 2;

export default function Todo(props) {
  const change = (e) => {
    props.setTodo(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (props.todo === "") {
      alert("You have to write your To do..");
    } else {
      props.setTodos([
        ...props.todos,
        {
          number: nextid,
          text: props.todo,
          checked: false,
        },
      ]);
      props.setTodo("");
      nextid++;
    }

    console.log(props.todos);
  };

  return (
    <>
      <Form onSubmit={submit}>
        <input
          value={props.todo}
          onChange={change}
          placeholder="Write your Todos..."
        />
        <button>ADD</button>
      </Form>
    </>
  );
}
