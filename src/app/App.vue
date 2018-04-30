<template>
  <div id="'app">
    <image-container></image-container>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import ImageContainerComponent from "Components/image-container-component/ImageContainerComponent";
  import todoList from "Components/todo-list-component/todoList.vue";

  export default {
    data() {
      return {}
    },
    name: 'App',
    components: {
      'image-container': ImageContainerComponent,
      'todo-list':todoList
    }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>