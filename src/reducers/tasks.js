import {
  ADD_TASK,
  DELETE_TASK,
  ADD_FETCHED_TASKS,
} from "../actions/actionTypes";

const initialTaskState = {
  tasks: [],
};

export default function auth(state = initialTaskState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.task, ...state.tasks],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.taskId),
      };
    case ADD_FETCHED_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
}
