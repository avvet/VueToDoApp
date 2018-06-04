<template>
  <div>
    <div class="wrapper">
      <div class="search_wrapper">
        <label>
          <i class="fa fa-search"></i>
        </label>
        <input class="search_input" type="text" v-model="search">
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        message:'HELLO'

      }
    },
    props:[
      'search',
      'filteredPostsArray'
    ],
    computed:{
      // filteredPostsArray() {
      //   return this.postsArray.filter(post => {
      //     return post.title.toLowerCase().includes(this.search.toLowerCase())
      //   })
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0;
    .search_wrapper{
      position: relative;
      label{
        position: absolute;
        top: 92px;
        left: 12px;
        transition: .15s all ease-in-out;
      }
      .search_input{
        margin-top: 70px;
        width: 100%;;
        height: 60px;
        border: none;
        border-bottom: 1px solid lightgrey;
        &:active{
          border: 1px solid darkgrey;
        }
      }
    }
  }
</style>