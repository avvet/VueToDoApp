<template>
    <div>
      <div class="post_pic">
        <div class="figure">
          <img :src="singlePost.pic" />
        </div>
      </div>
      <div class="content_wrapper">
        <div class="post post_date">{{singlePost.date}}</div>
        <div class="post post_title">{{singlePost.title}}</div>
        <div class="post post_text">{{singlePost.text}}</div>
        <router-link :to="{name:'post', params:{id:singlePost.id}}" class="router-link">
          <div class="post btn_learn_more">learn more</div>
        </router-link>
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
      'singlePost',
    ]
  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/variables";
  .router-link {
    text-decoration: none;
  }
  .post_pic {
    .figure{
      width: 100%; /* Ширина области */
      height: 380px;
      margin: 0;
      padding: 0;
      background: #fff;
      overflow: hidden;
      img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
      }
    }
  }
  .post_pic:hover img{
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  .content_wrapper{
    height: 340px;
    font-family: $main_font;
    display: flex;
    flex-direction: column;
      .post_date{
        color: #374e89;
        font-size: 14px;
        font-weight: 500;
        margin-top: 30px;
      }
      .post_title{
        margin-top: 15px;
        font-size: 22px;
        font-weight: bold;
        height: 60px;
        font-family: "Playfair Display";
        letter-spacing: 2px;
        background-image: -moz-linear-gradient(0deg, rgba(233,99,82,1) 0%, rgba(246,161,59,1) 100%);
        background-image: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(233,99,82,1)), color-stop(100%, rgba(246,161,59,1)));
        background-image: -webkit-linear-gradient(0deg, rgba(233,99,82,1) 0%, rgba(246,161,59,1) 100%);
        background-image: -o-linear-gradient(0deg, rgba(233,99,82,1) 0%, rgba(246,161,59,1) 100%);
        background-image: -ms-linear-gradient(0deg, rgba(233,99,82,1) 0%, rgba(246,161,59,1) 100%);
        background-image: linear-gradient(90deg, rgba(233,99,82,1) 0%, rgba(246,161,59,1) 100%);
        -webkit-background-clip: text;
        color:transparent;
        cursor: pointer;

      }
      .post_text{
        margin-top: 30px;
        color: #909090;
        font-size: 16px;
        height: 65px;
      }
      .btn_learn_more{
        color:#171717;
        width: 99px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        margin-top: 40px;
        position: relative;
        padding: 0 0 10px 0;
        cursor: pointer;
        &:hover{
          color: #5c5c5c;
        }
        &:before{
          content: '';
          border-bottom: 1px solid #e96352;
          padding: 0 10px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          transition: 0.3s;
        }
        &:hover:before{
          width :100%;
          padding: 0;
        }
      }
  }
</style>