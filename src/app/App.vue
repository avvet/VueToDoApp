<template>
  <div id="'app">
    <!--<h1>App vue rendered! {{msg}}</h1>-->
    <!--<img style="width:140px; margin:14px;" src="./assets/img/logo.png"/>-->
    <image-container></image-container>
    <todo-list></todo-list>
    <!--<img src="../assets/img/familyguy.png" width="100" height="300" alt="">-->
  </div>
</template>

<script>
  import ImageContainerComponent from "Components/image-container-component/ImageContainerComponent";
  import todoList from "Components/todo-list-component/todoList.vue";

  export default {
    data() {
      return {
        // msg: "DataMsg"
      }
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