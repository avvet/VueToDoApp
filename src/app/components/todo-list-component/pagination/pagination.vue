<template>
  <div v-if="totalPages()>0" class="pagination_wrapper">
    <span v-if="showPreviousLink" class="pagination_btn"
          v-on:click="updatePage(currentPage-1)"
    ><</span>
    {{currentPage + 1}} of {{totalPages()}}
    <span v-if="showNextLink" class="pagination_btn"
          v-on:click="updatePage(currentPage+1)"
    >></span>
  </div>
</template>

<script>
  export default {
    data(){
      return{


      }
    },
    name: 'pagination',
    props:['postsArray','currentPage','pageSize'],
    methods:{
      updatePage(pageNumber){
        this.$emit('page:update',pageNumber);
      },
      totalPages(){
        return Math.ceil(this.postsArray.length / this.pageSize);
      },
      showPreviousLink(){
        return this.currentPage = 0 ? false : true;
      },
      showNextLink(){
        return this.currentPage = (this.totalPages() < 1 ) ? false : true;
      }

    }
  }
</script>

<style lang="scss" scoped>
  .pagination_btn{
    cursor: pointer;
  }
</style>