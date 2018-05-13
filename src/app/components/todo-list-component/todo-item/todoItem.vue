<template>
  <div class="todo_item">
    <div class="checkbox checked"></div>
    <p class="item_title">{{singleTodo.title}}</p>
    <div class="btn_container">
      <div @click="onEditItem(singleTodo.id)" class="btn btn_edit">EDIT</div>
      <div @click="onDeleteItem(singleTodo.id)" class="btn btn_delete">DELETE</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
      }
    },
    name: 'todoItem',
    props: [
      'singleTodo'
    ],
    methods: {
      onEditItem(itemId) {
        console.log(itemId);
      },
      onDeleteItem(itemId) {
        this.$emit('deleteItem', itemId);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo_item{
    float: left;
    width: 100%;
    border-radius:3px;
    background-color: white;
    height: 50px;
    margin-bottom: 15px;
    -webkit-box-shadow: 4px 3px 13px -5px rgba(0,0,0,0.25);
    -moz-box-shadow: 4px 3px 13px -5px rgba(0,0,0,0.25);
    box-shadow: 4px 3px 13px -5px rgba(0,0,0,0.25);
    transition: box-shadow .3s;
    &:hover {
      -webkit-box-shadow: 4px 3px 13px -5px rgba(0,0,0,0650);
      -moz-box-shadow: 4px 3px 13px -5px rgba(0,0,0,0.60);
      box-shadow: 4px 3px 13px -5px rgba(0,0,0,0.60);
    }
    .checkbox{
      float: left;
      width: 15px;
      height: 15px;
      margin-right: 20px;
      margin-top: 15px;
      margin-left: 12px;
      border-radius: 3px;
      border: 1px solid #8d81d6;
    }
    .checked{
      background-color: lightgray;
    }
    .item_title{
      float: left;
      margin: 0;
      line-height: 50px;
      font-family: Roboto;
    }
    .btn_container{
      float: right;
      margin-top: 0px;
      margin-right: 20px;
      .btn{
        float: left;
        margin-right: 20px;
        font-family: Roboto;
        line-height: 50px;
        font-size: 14px;
      }
    }
  }
</style>