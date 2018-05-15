<template>
  <div class="todo_item">
    <div v-if="isInputShown">
      <input v-model="editInputContent" type="text" class="editingInput">
      <div class="btn_container">
        <div @click="onEditItem" class="btn btn_edit">OK</div>
        <div @click="onToggleItem" class="btn btn_delete">CANCEL</div>
      </div>
    </div>
    <div v-else>
      <div class="checkbox checked"></div>
      <p class="item_title">{{singleTodoItem.title}}</p>
      <div class="btn_container">
        <div @click="onToggleItem" class="btn btn_edit">EDIT</div>
        <div @click="onDeleteItem" class="btn btn_delete">DELETE</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isInputShown: false,
        editInputContent:''
      }
    },
    name: 'todoItem',
    props:[
      'singleTodoItem'
    ],
    methods:{
      onDeleteItem(){
        let singleId = this.singleTodoItem.id;
        this.$emit('deleteItemEvent', singleId);
      },
      onToggleItem(){
        this.isInputShown =! this.isInputShown;
      },
      onEditItem(){
        let itemId = this.singleTodoItem.id;
        let data = {
          id: itemId,
          title: this.editInputContent
        };
        this.$emit('editItemEvent', data);
        this.singleTodoItem.title = this.editInputContent;
        this.onToggleItem();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .editingInput{
    width: 300px;
    height: 34px;
    margin-top: 5px;
    border: 1px solid #8d81d6;
    padding-left: 10px;
  }
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