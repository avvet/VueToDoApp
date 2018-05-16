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

</style>