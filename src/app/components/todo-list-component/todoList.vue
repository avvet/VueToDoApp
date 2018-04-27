<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>


<script>
  import axios from "axios";

  let todos = [
    {
      "name": "task 2",
      "completed": false
    }
  ];
  export default {
    name: 'todoList',
    data () {
      return {
        title: 'TODO list',
        todos,
        newToDo:''
      }
    },
    methods:{
      addToDo(){
        let newTodo = {
          completed: false,
          name: this.newToDo
        };

        this.todos.push(newTodo);
        this.onSaveDataToServer(newTodo);
        this.newToDo ='';
      },
      onSaveDataToServer(newTodo) {
        axios
          .post(url, newTodo)
      },
      remaining(){
        let compl = document.getElementById('phrase');
        let amount = this.todos.filter(todo => !todo.completed).length;
        compl.innerHTML = amount + ' ' + 'tasks';
        compl.style.color='red';
      },
      done(){
        let done = document.getElementById('phrase');
        let amount2 = this.todos.filter(todo => todo.completed).length;
        done.innerHTML = amount2 + ' ' + 'tasks';
        done.style.color='darkcyan';
      }
    },
    // computed:{
    //   remaining(){
    //     return this.todos.filter(todo => !todo.completed).length;
    //   }
    // }
  }
</script>

