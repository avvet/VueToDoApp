<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>

<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import todoItem from "./todo-item/todoItem";
  import Pagin from "../pagin-component/Pagin";
  import Search from "../search-component/Search";


  export default {
    data(){
      return{
        postsArray: [],
        pageSize:6,
        totalPosts:0,
        perPage: 6,
        currentPage:1,
        page:'',
        pageRange:2,
        pagesArray:[],
        search:''
      }
    },
    components:{
      'todo-item': todoItem,
      'pagin': Pagin,
      'search': Search
    },
    created(){
      this.getAllPosts(this.currentPage);
    },
    methods: {
      getAllPosts(page){
        this.currentPage = page;
        httpWrapper.getPostsFromArray(this.currentPage, this.perPage,(posts, totalCount) => {
          this.postsArray = posts;
          this.totalPosts = totalCount;
        })
      },
      onPrevPageEvent() {
        this.getAllPosts(this.prevPage);
      },
      onNextPageEvent() {
        this.getAllPosts(this.nextPage)
      }
    },
    computed: {
      totalPages(){
        return Math.ceil(this.totalPosts/this.perPage);
      },
      nextPage(){
        return this.currentPage + 1;
      },
      prevPage(){
        return this.currentPage - 1;
      },
      noNextPage() {
        return this.nextPage <= this.totalPages;
      },
      noPrevPage() {
        return this.prevPage > 0;
      },
      rangeStart(){
        let start = this.currentPage - this.pageRange;
        return (start > 0)? start : 1
      },
      rangeEnd(){
        let end = this.currentPage + this.pageRange;
        return (end < this.totalPages)? end : this.totalPages;
      },
      pages(){
        this.pagesArray = [];
        for (let i = this.rangeStart; i <= this.rangeEnd; i++){
          this.pagesArray.push(i);
        }
        return this.pagesArray;
      },
      hasFirst(){
        return this.rangeStart !== 1;
      },
      hasEnd(){
        return this.rangeEnd < this.totalPages;
      },
      filteredPostsArray() {
        return this.postsArray.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  }
</script>

