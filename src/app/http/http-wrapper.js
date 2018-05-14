import axios from "axios/index";

const BASE_URL = 'http://localhost:3000';
const DIVIDER = '/';
const TODO_PL = 'todos-list';

let usersArray = [];

class HttpWrapperClass {
  getTodoById(id) {
    axios
      .get(BASE_URL + DIVIDER + TODO_PL + DIVIDER + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getCompleteTodosList(callback) {
    axios
      .get(BASE_URL + DIVIDER + TODO_PL)
      .then(response => {
        callback(response.data);
      })
      .catch(error => {
        console.log(error, 'error to get todosList');
      })
  }
  addNewItem(newItemTitle, callback){
    let itemData = {
      title: newItemTitle
    };
    axios
      .post(BASE_URL + DIVIDER + TODO_PL, itemData)
      .then(response => {
        callback(response.data);
      })
      .catch(error => {
        console.log(error, 'error to post new item');
      })
  }
  deleteTodoItem(id){
    axios
      .delete(BASE_URL + DIVIDER + TODO_PL + DIVIDER + id)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err, 'onDeleteError');
      })
  }
  editTodoItem(itemData) {
    axios
      .patch(BASE_URL + DIVIDER + TODO_PL + DIVIDER + itemData.id, itemData)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }
}


const httpWrapper = new HttpWrapperClass();
export {httpWrapper}
