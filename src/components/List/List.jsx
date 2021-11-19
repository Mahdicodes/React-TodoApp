import React, { Component } from "react";
import "./List.css";

class List extends Component {
  render() {
    const { tasks, handleStatus, handleDelete } = this.props;
    return (
      <div className="list-wrapper">
        <ul className="d-flex flex-column-reverse todo-list">
          {tasks.map((task) => (
            <li className={task.finished ? "completed" : ""} key={task.id}>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    defaultChecked={task.finished ? task.finished : ""}
                    onClick={() => {
                      handleStatus(task.id);
                    }}
                    className="checkbox"
                    type="checkbox"
                  />{" "}
                  {task.name}
                  <i className="input-helper"></i>
                </label>
              </div>
              <i
                onClick={() => {
                  handleDelete(task.id);
                }}
                className="remove mdi mdi-close-circle-outline"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
