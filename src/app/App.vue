<template>
  <div>
    <image-container></image-container>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import ImageContainerComponent from "Components/image-container-component/ImageContainerComponent";
  import todoList from "Components/todo-list-component/todoList";


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
    /*font-family: 'Open Sans', Helvetica, Arial, sans-serif;*/
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>