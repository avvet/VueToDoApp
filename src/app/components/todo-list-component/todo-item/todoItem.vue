<template>
    <div>
      <div class="post_pic">
        <img :src="singlePost.pic" />
      </div>
      <div class="content_wrapper">
        <div class="post_date">{{singlePost.date}}</div>
        <div class="post_title">{{singlePost.title}}</div>
        <div class="post_text">{{singlePost.text}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        message:'hello'
      }
    },
    name:'todoItem',
    props:[
      'singlePost'
    ]
  }
</script>

<style lang="scss" scoped>
  .post_pic img{
    width: 100%;
    background-size: cover;
  }
</style>