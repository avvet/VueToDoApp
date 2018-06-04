<template>
    <div class="pagination_container">
      <div  class="arrows pagin_left" v-bind:class="{disabled: !noPrevPage}">
        <p v-if="noPrevPage" @click="prevPageEvent()">Previous</p>
      </div>
      <div class="pagin_mid">
        <!--<span>{{current}} from {{totalPages}}</span>-->
        <div class="flex_pagin_wrapper" >
          <div v-if="hasFirst"><div @click="getAllPosts(1)" class="pagin_item" >1</div></div>
          <div v-if="hasFirst" class="dots">...</div>
          <div class="flex_pagin" v-for="onePage in pages" >
            <div class="pagin_item" @click="getAllPosts(onePage)" v-bind:class="{active_text: onePage === current}">{{onePage}} </div>
          </div>
          <div v-if="hasEnd" class="dots">...</div>
          <div v-if="hasEnd"><div @click="getAllPosts(totalPages)" class="pagin_item" >{{totalPages}}</div></div>
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
      pages:this.pages,
      hasFirst:this.hasFirst,
      hasEnd:this.hasEnd

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
      getAllPosts(page){
        this.$emit('getAllPosts',page);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables";

  .arrows{
    width: 160px;
    height: 48px;
    border: 1px solid darkgrey;
    text-align: center;
    cursor: pointer;
    &:hover{
      background-color: transparent;
      border: 1px solid $main_color;
    }
    p{
      text-decoration: none;
      font-family: $main_font;
      font-size: 16px;
      font-weight: 600;
      color: darkgrey;
      background-color: transparent;
      width: 160px;
      line-height: 46px;
      border-radius: 25px;
      margin: 0;
      transition: font-size .2s ease-in-out;
    }
  }
  .arrows:hover p{
    color: $main_color;
  }

  .disabled {
    opacity: 0;
    cursor: default;
  }
  .pagin_mid{
    .flex_pagin_wrapper{
      display: flex;
      justify-content: flex-start;
      width: 100%;
      text-align: center;
      cursor: pointer;
      font-family: $main_font;
      font-size: 16px;
      font-weight: 600;
      color: darkgrey;
      margin: 0;
      .pagin_item{
        width: 48px;
        height: 48px;
        line-height: 48px;
        border: 1px solid darkgrey;
        margin: 0 3px 0 3px;
        &:hover{
          border-color: $main_color;
          color: $main_color;
        }
      }
      .pagin_item.active_text{
        border-color: $main_color;
        color: $main_color;
      }
      .dots{
        line-height: 48px;
        margin: 0 3px 0 3px;
      }
    }
  }



</style>