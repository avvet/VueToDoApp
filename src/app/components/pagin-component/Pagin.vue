<template>
    <div >
      <div class="arrows pagin_left" v-bind:class="{ disabled: noPrevPage }">
        <p @click="prevPageEvent()" >Previous</p>
      </div>
      <div class="pagin_mid">
        <span>{{current}} from {{totalPages}}</span>
      </div>
      <div class="arrows pagin_right" v-bind:class="{ disabled: noNextPage }">
        <p @click="nextPageEvent()">Next</p>
      </div>
    </div>

</template>

<script>
  export default {
    data(){
      return{}
    },
    name:'pagin',
    props:{
      current:this.current,
      totalPages: this.totalPages,
      prevPage: this.prevPage,
      nextPage: this.nextPage,
      noPrevPage: this.noPrevPage,
      noNextPage: this.noNextPage
    },
    methods:{
      prevPageEvent() {
        if(this.noPrevPage) {
          return;
        }
        this.$emit('prevPageEvent')
      },
      nextPageEvent() {
        if(this.noNextPage) {
          return;
        }
        this.$emit('nextPageEvent')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables";

  .arrows{
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
    opacity: .4;
    cursor: not-allowed;
  }

</style>