<template>
  <div class="app_container">
    <image-container></image-container>
    <todo-list></todo-list>
    <my-todo></my-todo>
  </div>
</template>

<script>
  import ImageContainerComponent from "Components/image-container-component/ImageContainerComponent";
  import todoList from "Components/todo-list-component/todoList.vue";
  import MyTodo from "Components/my-todo-component/MyTodo.vue";

  export default {
    data() {
      return {}
    },
    name: 'App',
    components: {
      'image-container': ImageContainerComponent,
      'todo-list':todoList,
      'my-todo': MyTodo
    }
  }
</script>


<style>
  .app_container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 20px;
  }
</style>