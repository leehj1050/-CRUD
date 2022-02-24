import React from "react";
import styled from "styled-components";
import { BiCheckCircle } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoListWrap = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 1.5em;
  line-height: 30px;
  ul {
    width: 50%;
    margin: auto;
    padding: 0;
    line-height: 3.5em;
  }
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ffa98f;
    div {
      font-size: 1.5em;
      font-weight: 800;
      }
      input{
        padding-left:8px;
        max-width: 280px;
        height:35px;
        font-size: 25px;
        background-color: none;
        &.checkedBox {
          text-decoration: line-through;
          color: lightgray;
        }
      }
      span {
        cursor: pointer;
        margin-right: 10px;
       
      }
    }
  }
`;

export default function TodoList({ todos, checkClick, delClick, editClick }) {
  return (
    <TodoListWrap>
      {todos.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <div>
                <input
                  value={item.text}
                  className={`${item.checked && "checkedBox"}`}
                  onChange={(e) => {
                    let value = e.target.value;
                    editClick(value, item.number);
                    console.log(value);
                  }}
                />
              </div>

              <div className="icons">
                <span>
                  <BiCheckCircle
                    onClick={() => {
                      checkClick(item.number);
                    }}
                  />
                </span>

                <span>
                  <RiDeleteBinLine
                    onClick={() => {
                      delClick(item.number);
                    }}
                  />
                </span>
              </div>
            </li>
          </ul>
        );
      })}
    </TodoListWrap>
  );
}
