<template>
  <div>
    <router-view></router-view>

    <!--<image-container></image-container>-->
    <!--<todo-list></todo-list>-->
  </div>
</template>

<script>
  import ImageContainerComponent from "Components/image-container-component/ImageContainerComponent";
  import todoList from "Components/todo-list-component/todoList";
  import About from "Components/about-component/About";
  import Post from "Components/post-component/Post";
  import Pagin from "Components/pagin-component/Pagin";


  export default {
    data() {
      return {

      }
    },
    name: 'App',
    components: {
      'image-container': ImageContainerComponent,
      'todo-list':todoList,
      'about': About,
      'post': Post,
      'pagin': Pagin
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