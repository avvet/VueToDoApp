<template>
  <div>
    <header class="header">
      <div class="wrapper">
        <div class="menu_container">
          <div class="logo">LOGO</div>
          <nav>
            <router-link to="/about">About</router-link>
            <router-link to="/news">News</router-link>
          </nav>
        </div>
        <h1>Single Article</h1>
      </div>
    </header>
    <div class="wrapper">
      <div class="single_post_content_wrapper">
        <div class="post post_date">{{post.date}}</div>
        <div class="post post_title">{{post.title}}</div>
        <div class="post_pic">
          <div class="figure">
            <img :src="post.pic" />
          </div>
        </div>
        <div class="post post_text_single">{{post.textSingle}}</div>
        <div class="post_pic2">
          <div class="figure">
            <img :src="post.pic2" />
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="bottom_title">You May also Like</div>
      <div class="post_item_container">
        <div v-for="(post,index) in postsArray" class="post_item">
          <div class="post_pic">
            <div class="figure">
              <img :src="post.pic" />
            </div>
          </div>
          <div class="content_wrapper">
            <div class="post post_date">{{post.date}}</div>
            <!--<router-link :to="{name:'post', params:{id:index}}" style="text-decoration: none">-->
              <div class="post post_title">{{post.title}}</div>
            <!--</router-link>-->
          </div>
        </div>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
  import {httpWrapper} from "../../http/http-wrapper";
  import todoItem from "../todo-list-component/todo-item/todoItem";

  export default {
    data(){
      return{
        postsArray: [],
        post:'',
        currentPage: 0,
        pageSize:3,
        visiblePosts:[],
        postId:''
      }
    },
    components:{
      'todo-item': todoItem
    },
    created(){
      httpWrapper.getPostsFromArray(posts => {
        this.postsArray = posts;
        // this.updateVisiblePosts();

        this.postId = this.$route.params.id;
        this.post = this.postsArray[this.postId];

      })
    }
    // beforeMount(){
    //   this.updateVisiblePosts();
    // },
    // methods:{
    //   updatePage(pageNumber){
    //     this.currentPage = pageNumber;
    //     this.updateVisiblePosts();
    //   },
    //   updateVisiblePosts(){
    //     this.visiblePosts = this.postsArray.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    //     if(this.visiblePosts.length === 0 && this.currentPage > 0){
    //       this.updatePage(this.currentPage -1);
    //     }
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables";
  .header{
    width: 100%;
    background: url("../../../assets/img/pic_about.jpg");
    height: 380px;
    .menu_container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 20px;
      .logo{
        color: white;
        font-size: 32px;
        font-family: $main_font;
      }
      nav{

        a{
          text-decoration: none;
          color: white;
          padding: 20px;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: bold;
          font-family: $main_font;
        }
      }
    }
    h1{
      font-family: "Playfair Display";
      letter-spacing: 3px;
      text-align: center;
      line-height: 240px;
      color: white;
    }
  }
  .wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0;
    .single_post_content_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      /*justify-content: space-between;*/
      .post_date {
        color: #374e89;
        font-size: 14px;
        font-weight: 500;
        margin-top: 90px;
        font-family: $main_font;
      }
      .post_title {
        margin-top: 45px;
        width: 564px;
        text-align: center;
        font-size: 44px;
        font-weight: bold;
        font-family: "Playfair Display";
        letter-spacing: 2px;
        background-image: -moz-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
        background-image: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(233, 99, 82, 1)), color-stop(100%, rgba(246, 161, 59, 1)));
        background-image: -webkit-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
        background-image: -o-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
        background-image: -ms-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
        background-image: linear-gradient(90deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
        -webkit-background-clip: text;
        color: transparent;
      }
      .post_pic {
        margin-top: 60px;
        width: 100%;
        .figure {
          width: 100%; /* Ширина области */
          height: 560px;
          margin: 0;
          padding: 0;
          background: #fff;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .post_text_single {
        margin-top: 60px;
        color: #909090;
        font-size: 18px;
        width: 766px;
        line-height: 28px;
      }
      .post_pic2 {
        margin-top: 60px;
        .figure {
          width: 564px; /* Ширина области */
          height: 620px;
          margin: 0;
          padding: 0;
          background: #fff;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .divider{
      float: left;
      width: 100%;
      height: 1px;
      background-color: #e7e7e7;
      margin-top: 65px;
    }
    .bottom_title{
      display: inline-block;
      width: 100%;
      margin: 0 auto;
      margin-top: 45px;
      text-align: center;
      font-size: 44px;
      font-weight: bold;
      font-family: "Playfair Display";
      letter-spacing: 2px;
      background-image: -moz-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
      background-image: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(233, 99, 82, 1)), color-stop(100%, rgba(246, 161, 59, 1)));
      background-image: -webkit-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
      background-image: -o-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
      background-image: -ms-linear-gradient(0deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
      background-image: linear-gradient(90deg, rgba(233, 99, 82, 1) 0%, rgba(246, 161, 59, 1) 100%);
      -webkit-background-clip: text;
      color: transparent;
    }
    .post_item_container{
      display: flex;
      flex-wrap: wrap;
      margin-top: 90px;
      .post_item{
        display: inline-block;
        flex-basis: 362px;
        margin-right: 42px;
        &:nth-child(3n+3){
          margin-right: 0;
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
          /*height: 340px;*/
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
        }
      }
    }
  }
  .footer{
    float: left;
    width: 100%;
    height: 475px;
    background-color: #171717;
    margin-top: 65px;
  }
</style>