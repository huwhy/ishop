<template>
  <div class="pay">
    <div class="receive-address">
      <div class="add-address" style="display: none;">
        <a>+&nbsp;添加收货地址</a>
      </div>
      <div class="address-info">
        <div class="left">
          <p class="name">胡时明月 15869018124</p>
          <p class="addr">浙江省杭州市江干区九堡镇东方电子商务园</p>
        </div>
      </div>
    </div>
    <div class="item-list">
      <div class="cell">
        <div class="cell_title">
          订单
        </div>
        <div class="cell_value">
        </div>
      </div>
      <div class="content">
        <img v-lazy="'https://img.wowdsgn.com/product/images/7d8362a6-770c-46b5-a725-2dea373aab85.jpg?imageslim'"/>
        <div class="item-info">
          <div class="li item-title">
            NUDE 衣帽架 大衣架 榉木
          </div>
          <div class="li sku">
            <span>榉木</span>
          </div>
          <div class="li">
          </div>
          <div class="li">
            <p class="price">¥ 499</p>
            <span class="num">x1</span>
          </div>
        </div>
      </div>
      <div class="content">
        <img v-lazy="'https://img.wowdsgn.com/product/images/7d8362a6-770c-46b5-a725-2dea373aab85.jpg?imageslim'"/>
        <div class="item-info">
          <div class="li item-title">
            NUDE 衣帽架 大衣架 榉木
          </div>
          <div class="li sku">
            <span>榉木</span>
          </div>
          <div class="li">
          </div>
          <div class="li">
            <p class="price">¥ 499</p>
            <span class="num">x1</span>
          </div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-title">
          <i class="iconfont icon-quan"></i>优惠券
        </div>
        <div class="cell-value">
          <span class="cell-value_txt red">您有0张优惠券可用</span>
          <i class="iconfont icon-right-arrow"></i>
        </div>
      </div>
      <div class="cell">
        <div class="cell-title">
          运费
        </div>
        <div class="cell-value">
          <span class="cell-value_txt">￥0</span>
        </div>
      </div>
      <div class="cell">
        <div class="cell-title">
          优惠
        </div>
        <div class="cell-value">
          <span class="cell-value_txt red">-￥0</span>
        </div>
      </div>
      <div class="cell">
        <div class="cell-title">
          买家留言:
        </div>
        <div class="cell-value">
          <input type="text" placeholder="写下您的特殊要求" />
        </div>
      </div>
      <div class="cell total_cell" style="border:none;">
        <div class="cell-title">
          共2件
        </div>
        <div class="cell-value">
          小计<span class="cell-value_txt">￥698</span>
        </div>
      </div>
    </div>
    <div class="cell pay-cell">
      <div class="cell-title">
        <i class="iconfont icon-alipay"></i>
        支付宝
      </div>
      <div class="cell-value">
        <i class="iconfont icon-quan"></i>
      </div>
    </div>
    <div class="cell pay-cell">
      <div class="cell-title">
        <i class="iconfont icon-wxpay"></i>
        微信
      </div>
      <div class="cell-value">
        <i class="iconfont icon-selected"></i>
      </div>
    </div>

    <div class="item-footer">
      <ul>
        <li>
        </li>
        <li>
          合计￥399
        </li>
        <li>
          确认
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .pay{
    margin-bottom: 110px;
  }
  .icon-selected {
    color: #2a2a2a !important;
  }
  .item-list {
    padding-left: 30px;
    background-color: #FFF;
    margin-bottom: 20px;
    .content {
      padding: 30px 30px 30px 0;
      position: relative;
      display: flex;
      border-bottom: 1px solid #f5f5f5;
      img {
        width: 160px;
        height: 160px;
        margin-top: 8px;
        display: inline;
        position: relative;
        margin-left: 40px;
      }
      .item-info {
        height: auto;
        display: inline;
        width: 490px;
        .li {
          height: 44px;
          line-height: 44px;
          font-size: 28px;
          margin-bottom: 4px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .li .price {
          float: left;
        }
        .li .num {
          float: right;
        }
      }
    }
  }
  .cell.total_cell {
    font-size: 24px;
    color: #808080;
  }
  .cell.pay-cell .cell-title {
    padding-left: 30px;
  }
  .cell {
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    .cell-title {
      font-size: 28px;
      i {
        margin-right: 5px;
      }
    }
    .cell-value {
      margin-right: 24px;
      i {
        color: #ccc;
      }
      &_txt {
        color: #2a2a2a;
        font-size: 28px;
        &.red {
          color: #FF7070;
        }
      }
      input[type=text] {
        border: none;
        font-size: 28px;
        height: 32px;
        line-height: 32px;
      }
    }
  }

  .receive-address {
    background-color: #FFF;
  }

  .add-address {
    text-align: center;
    display: block;
    line-height: 90px;
    height: 90px;
    padding: 0 0 30px 0;
    border: 1px solid #f5f5f5;
    margin-bottom: 20px;
    position: relative;
  }

  .address-info {
    position: relative;
    text-align: center;
    color: #808080;
    line-height: 156px;
    padding: 30px 0;
    border: 1px solid #f5f5f5;
    margin-bottom: 20px;
    .left {
      padding: 0 30px;
      height: auto;
    }
    .name, .addr {
      font-size: 32px;
      line-height: 44px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: justify;
    }
    .name {
      color: #000;
    }
    .addr {
      margin-top: 10px;
      font-size: 26px;
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
