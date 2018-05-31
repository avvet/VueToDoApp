<template src="./todoList.html"></template>
<style src="./todoList.scss" scoped lang="scss"></style>

<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import todoItem from "./todo-item/todoItem";
  import Pagin from "../pagin-component/Pagin";
  import axios from "axios/index";

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
        pagesArray:[]
      }
    },
    components:{
      'todo-item': todoItem,
      'pagin': Pagin
    },
    created(){
      this.fetchPosts(this.currentPage);
    },
    methods: {
      fetchPosts(page){
        this.currentPage = page;
        let options = {
          params:{
            '_page':page,
            '_limit': this.perPage
          }
        };
        axios
          .get('http://localhost:3000/posts', options)
          .then(resp => {
            this.postsArray = resp.data;
            this.totalPosts = parseInt(resp.headers['x-total-count']);
          })
          .catch(err => {
            console.log(err);
          })
      },
      onPrevPageEvent() {
        this.fetchPosts(this.prevPage);
      },
      onNextPageEvent() {
        this.fetchPosts(this.nextPage)
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
      }
    }
  }
</script>

