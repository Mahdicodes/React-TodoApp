import React, { Component } from "react";

class AddForm extends Component {
  render() {
    const { addHandler } = this.props;
    return (
      <div className="add-items d-flex">
        <input
          type="text"
          id='taskName'
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
        />
        <button onClick={()=>{addHandler(document.getElementById('taskName').value)}} className="add btn btn-primary font-weight-bold todo-list-add-btn">
          Add
        </button>
      </div>
    );
  }
}

export default AddForm;
