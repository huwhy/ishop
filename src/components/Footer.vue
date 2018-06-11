<template>
  <div class="footer-wrap" v-show="show">
    <ul>
      <li>
        <router-link to="/">
          <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home.png">
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/category">
          <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/category.png">
          <span>分类</span>
        </router-link>
      </li>
      <li>
        <router-link to="/cart">
          <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/buy.png">
          <span>购物车</span>
        </router-link>
      </li>
      <li>
        <a href="">
          <img src="https://m.wowdsgn.com/static/img/message.png">
          <span>消息</span>
        </a>
      </li>
      <li>
        <router-link to="/me">
          <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/me.png">
          <span>我</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  computed: {
    show () {
      let path = this.$route.path
      return !/(\/item\/\d)|(\/cart)|(\/pay)|(\/me\/address)/.test(path)
    }
  }
}
</script>

<style type="text/css" lang="scss">
.footer-wrap {
  width: 750px;
  height: 88px;
  position: fixed;
  bottom: 0;
  background: #FFF;
  border-top: 1px solid #f5f5f5;
  z-index: 999;
  ul {
    width: 100%;
    height: 100%;
    zoom: 1;
    li {
      float: left;
      width: 20%;
      height: 100%;
      font-size: 0;
      color: #000;
      text-align: center;
      a {
        color: #808080;
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        &.active {
          color: #000;
        }
      }
      img {
        display: block;
        width: 46px;
        margin-right: auto;
        margin-left: auto;
      }
      span {
        font-size: 20px;
        display: block;
      }
    }
  }
}
</style>
