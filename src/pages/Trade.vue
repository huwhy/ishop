<template>
  <div class="trade">
    <div class="message">
      订单将为您保留<span class="time">7小时11分钟</span>,过期未支付将被自动取消
    </div>
    <div class="info">
      <div class="left">
        <p class="t-no">订单号: 2320452480 <span class="cp">复制</span></p>
        <p class="time">下单时间: 2018-06-13 17:03:07</p>
      </div>
      <span class="status">待付款</span>
    </div>
    <div class="receive-info">
      <p class="title">收货人</p>
      <p class="person">胡先生 158****8124</p>
      <p class="address">浙江省杭州市江干区九堡</p>
    </div>
    <div class="item-list">
      <p class="title">商品清单</p>
      <div class="item-li">
        <img v-lazy="'https://img.wowdsgn.com/product/images/7d8362a6-770c-46b5-a725-2dea373aab85.jpg?imageslim'">
        <div class="ul">
          <p class="li">
            <span class="l">NUDE 衣帽架 大衣架 榉木</span>
            <span class="r">￥499</span>
          </p>
          <p class="li spec">
            <span class="l">榉木</span>
            <span class="r">x1</span>
          </p>
        </div>
      </div>
    </div>
    <cell title="运费" :indent="true" :more="false">
      <span class="cell-num" slot="value">￥100</span>
    </cell>
    <cell title="优惠" :indent="true" :more="false">
      <span class="cell-num" slot="value">￥100</span>
    </cell>
    <div class="pay-method">
      <p class="title">支付方式</p>
      <cell title="支付宝" icon="icon-alipay" :indent="true" :more="false">
        <i slot="value" class="select iconfont icon-selected"></i>
      </cell>
      <cell title="微信" icon="icon-wxpay" :indent="true" :more="false">
        <i slot="value" class="select iconfont icon-quan"></i>
      </cell>
    </div>
    <div class="item-footer">
      <ul>
        <li>
        </li>
        <li>
          合计￥399
        </li>
        <li>
          付款
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .message {
    width: 100%;
    height: 72px;
    line-height: 72px;
    background: #000;
    color: #fff;
    font-size: 24px;
    text-align: center;
    .time {
      color: #FFD444;
      padding: 0 10px;
      display: inline-block;
    }
  }
  .info {
    background: #fff;
    font-size: 24px;
    padding: 28px 30px;
    color: #808080;
    display: flex;
    justify-content: space-between;
    .t-no {
      font-size: 28px;
      color: #000;
      .cp {
        padding: 1px 15px;
        border: 1px solid #ccc;
        margin-left: 26px;
        font-size: 20px;
        border-radius: 5px;
        line-height: 36px;
      }
    }
    .time {
      margin-top: 5px;
    }
    .status {
      color: #FE3824;
    }
  }
  .receive-info, .item-list {
    .title {
      width: 100%;
      height: 74px;
      line-height: 74px;
      padding-left: 30px;
      font-size: 24px;
      color: #808080;
    }
  }
  .receive-info{
    .person, .address {
      background-color: #FFF;
      padding: 30px 30px 0;
      height: 64px;
      line-height: 64px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .address {
      padding: 0 30px 30px;
      font-size: 28px;
      color: #808080;
    }
  }
  .item-list {
    .item-li {
      padding: 30px;
      background-color: #fff;
      img {
        width: 80px;
        margin-top: 8px;
        margin-left: 30px;
        vertical-align: middle;
        margin-right: 20px;
        display: inline-block;
      }
      .ul {
        display: inline-block;
        width: 540px;
        .li {
          position: relative;
          height: 44px;
          line-height: 44px;
          font-size: 28px;
          margin-bottom: 4px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .l {
            float: left;
            width: 400px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .r {
            float: right;
          }
        }
        .spec {
          font-size: 20px;
          color: #808080;
          padding: 4px 10px;
          .l {
            background: #f5f5f5;
            margin-right: 6px;
            padding-left: 10px;
            padding-right: 10px;
            width: auto;
          }
        }
      }
    }
  }
  .cell-num {
    color: #2a2a2a;
    font-size: 28px;
  }
  .pay-method {
    width: 100%;
    background-color: #FFF;
    .title {
      padding-left: 30px;
      font-size: 24px;
      color: #808080;
      height: 74px;
      line-height: 74px;
    }
    .select {
      font-size: 34px;
      &.icon-selected {
        color: #2a2a2a;
      }
    }
  }
  .item-footer {
    width: 750px;
    height: 88px;
    position: fixed;
    margin: 0 auto;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #eaeaea;
    z-index: 3;
    ul {
      display: table;
      width: 100%;
      height: 88px;
      vertical-align: middle;
      li {
        height: 100%;
        display: table-cell;
        vertical-align: middle;
        font-size: 30px;
      }
      li:nth-child(1) {
        width: 140px;
        height: 100%;
        line-height: 88px;
        background-color: #fff;
        position: relative;
        padding-left: 30px;
        text-align: left;
        font-size: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .cart-num {
          padding: 0 4px;
          left: 60%;
          position: absolute;
          top: 14px;
          right: 20px;
          width: 35px;
          height: 35px;
          line-height: 35px;
          background-color: #FFD900;
          font-size: 20px;
          color: #000;
          border-radius: 50%;
        }
      }
      li:nth-child(2) {
        width: 392px;
        text-align: right;
        background-color: #f5f5f5;
        padding-right: 30px;
      }
      li:nth-child(3) {
        text-align: center;
        width: 188px;
        background-color: #FFD900;
      }
    }
  }
</style>
