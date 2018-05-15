<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>


<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import todoItem from "./todo-item/todoItem";

  export default {
    data(){
      return{
        message:'hello',
        todosArray: [],
        myContent:''
      }
    },
    components:{
      'todo-item': todoItem
    },
    created(){
      setTimeout(() => {
        httpWrapper.getTodoListFromServer(todoList => {
          this.todosArray = todoList;
        })
      },2000)
    },
    methods:{
     addNewItemToTodoList() {
       let isInputNotEmpty = this.myContent.length > 0;
       if (isInputNotEmpty) {
         httpWrapper.postTodosfromServer(this.myContent, (newTodo) => {
           this.todosArray.push(newTodo);
           this.myContent = '';

         })
       } else {
         console.log('input is empty');
       }
     },
     onDeleteItem(myTodoId){
       httpWrapper.deleteTodoItemFromServer(myTodoId);
       this.todosArray = this.todosArray.filter(todo => todo.id !== myTodoId)
     },
      onEditItem(data){
       console.log(data);
        httpWrapper.editTodoItem(data);
      }
    },
    computed:{
      whileArrayIsLoading(){
        return this.todosArray.length === 0;
      }
    }

  }
</script>

