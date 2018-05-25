<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>


<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import todoItem from "./todo-item/todoItem";
  // import pagination from "./pagination/pagination";
  import Pagin from "../pagin-component/Pagin";

  export default {
    data(){
      return{
        message:'hello',
        postsArray: [],
        // currentPage: 0,
        pageSize:6,
        visiblePosts:[],

        totalPosts:0,
        perPage:6,
        currentPage:1
      }
    },
    components:{
      'todo-item': todoItem,
      'pagin': Pagin
      // 'pagination': pagination
    },
    beforeMount(){
      // this.updateVisiblePosts();
    },
    created(){
      httpWrapper.getPostsFromArray(posts => {
        this.postsArray = posts;
        // this.updateVisiblePosts();
      },this.currentPage)
    },
    methods: {
      // updatePage(pageNumber) {
      //   this.currentPage = pageNumber;
      //   this.updateVisiblePosts();
      // },
      // updateVisiblePosts() {
      //   this.visiblePosts = this.postsArray.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      //   if (this.visiblePosts.length === 0 && this.currentPage > 0) {
      //     this.updatePage(this.currentPage - 1);
      //   }
      //   console.log(this.visiblePosts);
      // },
      // clickCallback(pageNum) {
      //   console.log(pageNum);
      // }
    }
  }
</script>

