<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>


<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import todoItem from "./todo-item/todoItem";

  export default{
    data(){
      return{
        todosArray: [],
        newItemModel: ''
      }
    },
    components:{
      'todo-item': todoItem
    },
    created() {
      setTimeout(() => {
        httpWrapper.getCompleteTodosList(todosList => {
          this.fillTodoListWithDataFromServer(todosList);
        });
      }, 1000)
    },
    methods:{
      fillTodoListWithDataFromServer(myTodos){
        this.todosArray = myTodos;
      },
      onAddNewItem() {
        let isInputNotEmpty = this.newItemModel.length > 0;
        if(isInputNotEmpty) {
          httpWrapper.addNewItem(this.newItemModel, newTodo => {
            this.todosArray.push(newTodo);
            this.newItemModel = '';
          })
        } else {
          console.log('Input is empty!');
        }
      },
      deleteItem(itemId) {
        httpWrapper.deleteTodoItem(itemId);
        this.todosArray = this.todosArray.filter(todo => todo.id !== itemId);
      },
      editItem(itemData) {
        console.log(itemData);
        httpWrapper.editTodoItem(itemData);
      },
      addEditedItem(){

      }
    },
    computed:{
      isTodoListEmpty(){
        return this.todosArray.length === 0;
      }
    }
  }

</script>

