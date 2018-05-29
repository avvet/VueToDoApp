<template>
    <div class="pagination_container">
      <div  class="arrows pagin_left" v-bind:class="{disabled: !noPrevPage}">
        <p v-if="noPrevPage" @click="prevPageEvent()">Previous</p>
      </div>
      <div class="pagin_mid">
        <!--<span>{{current}} from {{totalPages}}</span>-->
          <div v-for="onePage in pagesArray" class="one_page">
            <p @click="fetchPosts(onePage)">{{onePage}}</p>
          </div>

      </div>
      <div class="arrows pagin_right" v-bind:class="{disabled: !noNextPage}">
        <p v-if="noNextPage"  @click="nextPageEvent()"> Next</p>
      </div>
      <!--v-bind:class="{ disabled: noNextPage }"-->
    </div>

</template>

<script>
  export default {
    data(){
      return{
        onePage:null
      }
    },
    name:'pagin',
    props:{
      current:this.current,
      totalPages: this.totalPages,
      prevPage: this.prevPage,
      nextPage: this.nextPage,
      noPrevPage: this.noPrevPage,
      noNextPage: this.noNextPage,
      pagesArray:this.pagesArray,
      pages:this.pages
    },
    methods:{
      prevPageEvent() {
        // if(this.noPrevPage) {
        //   return;
        // }
        this.$emit('prevPageEvent')
      },
      nextPageEvent() {
        // if(this.noNextPage) {
        //   return;
        // }
        this.$emit('nextPageEvent')
      },
      fetchPosts(page){

        this.$emit('fetchPosts',page);

        // console.log(this.pagesArray,'ARRAY');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables";

  .arrows{
    display: block;
    width: 160px;
    height: 48px;
    border: 1px solid $main_color;
    text-align: center;
    cursor: pointer;

    &:hover{
      background-color: $main_color;
    }

    p{
      text-decoration: none;
      font-family: $main_font;
      font-size: 16px;
      font-weight: 600;
      color: $main_color;
      background-color: transparent;
      width: 160px;
      line-height: 46px;
      border-radius: 25px;
      transition: all .2s ease-in-out;
      margin: 0;
    }
  }
  .arrows:hover p{
    color: white;
  }
  .disabled {
    opacity: 0;
    cursor: default;
  }
  .pagin_mid{
    /*display: inline-block;*/
    display: flex;
    justify-content: space-between;
    width: 10%;
    text-align: center;
    cursor: pointer;
    font-family: $main_font;
    font-size: 16px;
    font-weight: 600;
    line-height: 46px;
    color: $main_color;

  }


</style>