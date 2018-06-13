<template>
  <div class="trades">
    <van-tabs v-model="tab" class="tabs" :sticky="true">
      <van-tab v-for="(v) in statusList" :key="v.key" :title="v.value">
        <router-link tag="a" class="trade" to="/trade/1">
          <div class="trade-top">
            <span>订单: 13413414314</span>
            <span class="r">交易关闭</span>
          </div>
          <div class="trade-content">
            <div class="img-list">
              <img v-lazy="'https://img.wowdsgn.com/product/images/7d8362a6-770c-46b5-a725-2dea373aab85.jpg?imageslim'" >
              <img v-lazy="'https://img.wowdsgn.com/product/images/d0db4f5d-1195-4a9c-b306-1576d18e9ce6.jpg?imageslim'" >
              <img v-lazy="'https://img.wowdsgn.com/product/images/d0db4f5d-1195-4a9c-b306-1576d18e9ce6.jpg?imageslim'" >
              <img v-lazy="'https://img.wowdsgn.com/product/images/d0db4f5d-1195-4a9c-b306-1576d18e9ce6.jpg?imageslim'" >
              <img v-lazy="'https://img.wowdsgn.com/product/images/d0db4f5d-1195-4a9c-b306-1576d18e9ce6.jpg?imageslim'" >
              <img v-lazy="'https://img.wowdsgn.com/product/images/d0db4f5d-1195-4a9c-b306-1576d18e9ce6.jpg?imageslim'" >
              <img v-lazy="'https://img.wowdsgn.com/product/images/d0db4f5d-1195-4a9c-b306-1576d18e9ce6.jpg?imageslim'" >
            </div>
          </div>
          <div class="trade-bottom">
            <span>共2件 合计: <b>￥ 698</b></span>
            <a class="btn-pay">
              立即支付
            </a>
          </div>
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      statusList: [
        {key: 'WAIT_PAY', value: '待付款'},
        {key: 'WAIT_SHIP', value: '待发货'},
        {key: 'WAIT_RECEIVE', value: '待收货'},
        {key: 'WAIT_EVAL', value: '待评价'},
        {key: 'REFUND', value: '退换货'}
      ],
      tab: 0
    }
  },
  watch: {
    $route (oldV, newV) {
      console.log(oldV, newV)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs.van-tabs {
    height: 80px;
    line-height: 80px;
    padding-top: 0;
    .van-tabs__line {
      height: 6px;
      background-color: #000;
    }
  }
  .tabs .van-tabs__content {
    padding-top: 110px;
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
  .trade {
    display: block;
    margin-bottom: 30px;
    padding-left: 30px;
    color: #808080;
    font-size: 24px;
    background-color: #FFF;
    .trade-top {
      height: 88px;
      border-bottom: 1px solid #EAEAEA;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .r {
        font-size: 30px;
        color: #FF7070;
        padding-right: 30px;
      }
    }
    .trade-content {
      width: 720px;
      height: 150px;
      border-bottom: 1px solid #EAEAEA;
      overflow-x: auto;
      .img-list {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        align-items: center;
        img {
          height: 112px;
          width: 112px;
          margin-right: 10px;
        }
      }
    }
    .trade-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn-pay {
        width: 136px;
        height: 52px;
        background-color: #FFD900;
        font-size: 22px;
        line-height: 52px;
        text-align: center;
        color: #000;
        margin-right: 30px;
      }
    }
  }
</style>
