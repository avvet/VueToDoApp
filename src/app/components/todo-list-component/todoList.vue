<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>


<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import todoItem from "./todo-item/todoItem";

  export default {
    data(){
      return{
        message:'hello',
        postsArray: [],
      }
    },
    components:{
      'todo-item': todoItem
    },
    created(){
      httpWrapper.getPostsFromArray(posts => {
        this.postsArray = posts;
      })
    }


  }
</script>

