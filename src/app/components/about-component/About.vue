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
          <h1>About Us</h1>
        </div>
      </header>
    </div>
</template>

<style lang="scss" scoped>
  .wrapper{
    width: 1170px;
    margin: 0 auto;
    padding: 0;
  }
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
        font-family: 'Open Sans', sans-serif;
      }
      nav{
        a{
          text-decoration: none;
          color: white;
          padding: 20px;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: bold;
          font-family: 'Open Sans', sans-serif;
        }
        .router-link-active {
          color: darkgrey;
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
</style>