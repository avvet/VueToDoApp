<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>


<script>
  import axios from "axios";
  import MyTodo from '../my-todo-component/MyTodo';

  export default{
    data(){
      return{
        message: 'Hello, Sveta',
        myMessage: 'you should do smth',
        mySubtitle: true,
        todos:[
          {text: 'task 245'},
          {text: 'name 1'},
          {text: 'task 3'},
          {text: 'name 2'},
          {text: 'task 145'},
          {text: 'name 4'},
        ],
        object:{
          name: 'vasya',
          age: 20,
          surname: 'petrov'
        },
        evenNumbers:[1,2,3,4,5,6,7],
        inputMessage: 'Type your name',
        rawHtml: 'Текст должен быть красным',
        firstName: 'Petia',
        lastName: 'Ivanov',
        meters: 0,
        kilometers: 0,
        // classObject: {
        //   green: true,
        //   upperCase: false
        // }
        isGreen: true,
        isUpperCase: false,
        ok: true
      }
    },
    components: {
      'my-todo': MyTodo
    },
    methods:{
      reverseMessage(){
        this.message = this.message.split('').reverse().join('');
      },
      addNewTask(){
        this.todos.push({text:'task 100'});
        this.todos[0].text = 'task 1000';
        // this.todos.length = 2;
        this.todos.splice(0,1,{text: 'task 1015'})
      },
      searchMatch(){
        this.todos = this.todos.filter((todo)=>{
          return todo.text.match(/ta/);
        })
      }
    },
    computed:{
      fullName(){
        return this.firstName + ' ' + this.lastName;
      },
      chooseEven(){
        return this.evenNumbers.filter((n)=>{
           return n % 2 === 0;
        })
      }
    },
    watch:{
      meters(val){
        this.kilometers = this.meters/1000;
        this.meters = val;
      },
      kilometers(val){
        this.kilometers = val;
        this.meters = this.kilometers*1000;

      }
    },
    created: function(){
      console.log('Итоговое значение:' + this.message);
    }
  }

</script>

