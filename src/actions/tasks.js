import { ADD_TASK, DELETE_TASK, ADD_FETCHED_TASKS } from "./actionTypes";

export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  };
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    taskId,
  };
}

export function addFetchedTasks(tasks) {
  return {
    type: ADD_FETCHED_TASKS,
    tasks,
  };
}

// fetching all tasks from an API and storing in the store
export function fetchTasks() {
  return (dispatch) => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(addFetchedTasks(data));
      });
  };
}
