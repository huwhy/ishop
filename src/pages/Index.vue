<template>
  <div id="app">
    <v-header />
    <van-tabs class="tabs">
      <van-tab v-for="index in 8" :key="index" :title="'选项 ' + index">
      </van-tab>
    </van-tabs>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <item-group class="item-group-first" />
    <item-group />
    <item-banner-group />
    <!-- <div class="tabs">
      <ul>
        <li class="active">
          <a href="javascript:">推荐</a>
        </li>
        <li>
          <a href="javascript:">家具</a>
        </li>
        <li>
          <a href="javascript:">家居</a>
        </li>
        <li>
          <a href="javascript:">活动</a>
        </li>
      </ul>
    </div> -->
    <div class="tab-content">
      <ul>
        <li>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
      ]
    }
  }
}
</script>

<style lang="scss">
  .tabs.van-tabs {
    height: 80px;
    line-height: 80px;
    padding-top: 0;
    .van-tabs__line {
      height: 6px;
      background-color: #000;
    }
  }
  .tabs.van-tabs .van-tabs__wrap,
  .tabs .van-tab {
    height: 80px;
    line-height: 80px;
    color: #808080;
    font-size: 28px;
    &--active {
      color: #000;
    }
  }
  .van-swipe {
    width: 750px;
    height: 500px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item-group-first {
    margin-top: 30px;
  }
</style>

<style lang="scss" scoped>
#app {
  width: 750px;
  margin: 0 auto;
  padding-bottom: 88px;
}
// .tabs {
//   height: 80px;
//   line-height: 80px;
//   font-size: 28px;
//   background: #FFF;
//   ul {
//     height: 80px;
//     overflow: hidden;
//     list-style: none;
//     li {
//       float: left;
//       color: #808080;
//       margin: 0 43px;
//       font-size: 28px;
//       padding: 0 22px;
//       &.active {
//         border-bottom: 6px solid #202020;
//         color: #000;
//         height: 74px;
//       }
//     }
//   }
// }
</style>
