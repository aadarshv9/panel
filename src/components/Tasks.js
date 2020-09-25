import React from "react";
import { connect } from "react-redux";
import { addTask, deleteTask } from "../actions/tasks";
import * as firebase from "firebase";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      userId: "",
      title: "",
      completed: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleCompletedChange = (e) => {
    this.setState({
      completed: e.target.value === "True",
    });
  };

  handleDeleteTask = (taskId) => {
    this.props.dispatch(deleteTask(taskId));
  };

  handleAddTask = async (e) => {
    try {
      var user = await firebase.auth().currentUser;
      this.setState({
        id: this.props.tasks.tasks.length,
        userId: user.uid,
      });

      const { id, userId, title, completed } = this.state;
      if (id && userId && title && completed !== null) {
        this.props.dispatch(addTask(this.state));
        this.setState({
          id: "",
          userId: "",
          title: "",
        });
        return;
      }
    } catch (error) {
      console.log("error in adding task", error);
    }
  };

  render() {
    const { tasks } = this.props.tasks;
    return (
      <React.Fragment>
        <div id="tasks">
          {tasks &&
            tasks.length !== 0 &&
            tasks.map((task, index) => (
              <div className="task-item" key={index}>
                <div>{index + 1}</div>
                <div className="title">{task.title}</div>
                {task.completed ? <div>True</div> : <div>False</div>}
                <button onClick={() => this.handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>

        <div className="add-task">
          <input
            type="text"
            placeholder="Task title"
            onChange={this.handleInputChange}
            value={this.state.title}
          ></input>
          <div className="completed">
            <span>Completed? </span>
            <input
              type="radio"
              id="true"
              name="complete"
              value="True"
              onChange={this.handleCompletedChange}
            ></input>
            <label htmlFor="true">True</label>
            <input
              type="radio"
              id="false"
              name="complete"
              value="False"
              onChange={this.handleCompletedChange}
            ></input>
            <label htmlFor="false">False</label>
          </div>
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(Tasks);
