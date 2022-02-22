import React, { useState } from "react";
import styled from "styled-components";
import { BiCheckCircle, BiEditAlt } from "react-icons/bi";
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
      span {
        cursor: pointer;
        margin-right: 10px;
        &.checkedBox {
          text-decoration: line-through;
          color: lightgray;
        }
      }
    }
  }
`;

export default function TodoList({ todos, checkClick, delClick }) {
  return (
    <TodoListWrap>
      {todos.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <div>
                <span className={`${item.checked && "checkedBox"}`}>
                  {item.text}
                </span>
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
