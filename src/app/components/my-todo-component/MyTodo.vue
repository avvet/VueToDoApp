<template src="./MyTodo.html"></template>
<style src="./MyTodo.scss" scoped lang="scss"></style>

<script>
  export default {
    name: 'MyTodo',
    data() {
      return {
        newTaskContent: '',
        tasks:[
          {
            id:1,
            text: 'buy bread'
          },
          {
            id:2,
            text: 'clean the room'
          },
          {
            id:3,
            text: 'visit gym'
          }
        ],
        nextTaskId: 4
      }
    },
    // props: ['text'],
    // methods:{
    //   addNewOne(){
    //     this.tasks.push({
    //       id: this.nextTaskId++,
    //       text: this.newTaskContent
    //     });
    //     this.newTaskContent = ''
    //   }
    // }
  }
</script>