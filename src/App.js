import React, { Component } from "react";
import List from "./components/List/List";
import AddForm from "./components/Forms/AddForm";
import "./App.css";

// Todo
// Delete Bug

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
    if (localStorage.getItem("tasks") !== "") {
      const tasks = [...JSON.parse(localStorage.getItem("tasks"))];
      this.state.tasks = tasks;
    }
  }

  updateLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  handleAddTask = (taskName) => {
    let tasks = this.state.tasks;
    const newTask = {
      id: Math.round(Math.random() * 1000),
      name: taskName,
      finished: false,
    };
    tasks.push(newTask);
    this.updateLocalStorage(tasks);
    this.setState({ tasks: tasks });
  };

  handleStatus = (id) => {
    let tasks = this.state.tasks;
    const taskIndex = tasks.findIndex((task) => task.id === id);
    let task = tasks[taskIndex];
    task.finished = !task.finished;
    tasks[taskIndex] = task;
    this.updateLocalStorage(tasks);
    this.setState({ tasks: tasks });
  };

  handleDelete = (id) => {
    const tasks = this.state.tasks;
    const updateTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    this.updateLocalStorage(updateTasks);
    this.setState({ tasks: updateTasks });
  };

  render() {
    return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <AddForm addHandler={this.handleAddTask} />
                  <List
                    handleDelete={this.handleDelete}
                    handleStatus={this.handleStatus}
                    tasks={this.state.tasks}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
