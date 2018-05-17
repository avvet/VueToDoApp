import axios from "axios/index";

const BASE_URL = 'http://localhost:3000';
const DIVIDER = '/';
const TODO_PL = 'todos-list';


class HttpWrapperClass {
  getTodoListFromServer(callback) {
    axios
      .get(BASE_URL + DIVIDER + TODO_PL)
      .then(resp => {
        callback(resp.data)
      })
      .catch(err => {
        console.log(err, 'get data from server error');
      })
  }

  postTodosfromServer(todoItem, callback) {
    let newTodoObject = {
      title: todoItem
    };
    axios
      .post(BASE_URL + DIVIDER + TODO_PL, newTodoObject)
      .then(resp => {
        callback(resp.data);
      })
      .catch(err => {
        console.log(err, 'error to post new todo');
      })
  }

  deleteTodoItemFromServer(id) {
    axios
      .delete(BASE_URL + DIVIDER + TODO_PL + DIVIDER + id)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }

  editTodoItem(data) {
    axios
      .patch(BASE_URL + DIVIDER + TODO_PL + DIVIDER + data.id, data)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err, 'error on editing todo');
      })
  }
}

const httpWrapper = new HttpWrapperClass();

export {httpWrapper}
