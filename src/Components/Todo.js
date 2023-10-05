import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list here ✌🏼</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items...."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <button>
              <i
                className="fa fa-plus add-btn"
                onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              ></i>
            </button>
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <div className="listStore">
                    <h6 className="list">{elem.data}</h6>
                    <div className="todo-btn">
                      <i
                        className="far fa-trash-alt add-btn"
                        title="Delete Item"
                        onClick={() => dispatch(deleteTodo(elem.id))}
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span>Check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
