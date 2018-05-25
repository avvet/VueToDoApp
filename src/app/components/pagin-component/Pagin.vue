<template>
    <div >
      <div class="arrows pagin_left">
        <a href="#">Previous</a>
      </div>
      <div class="arrows pagin_right">
        <a href="#">Next</a>
      </div>
    </div>

</template>

<script>
  export default {
    data(){
      return{

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
    &:hover{
      background-color: $main_color;
    }
    a{
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
    }
  }
  .arrows:hover a{
    color: white;
  }

</style>