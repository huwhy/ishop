<template>
  <div class="pay">
    <div class="cell member">
      <div class="cell-title">
        <img class="head-img" v-lazy="headImg">
        <p class="user">古时明月</p>
      </div>
      <router-link to="/me/info" tag="div" class="cell-value">
        <i class="iconfont icon-right-arrow"></i>
      </router-link>
    </div>
    <div class="trade-list">
      <div class="cell">
        <div class="cell-title">
          全部订单
        </div>
        <div class="cell-value">
        </div>
      </div>
      <div class="ul">
        <div class="li">
          <i class="iconfont icon-wait-pay"></i>
          <div class="cell">
            <div class="cell-title">
              待付款
            </div>
            <div class="cell-value">
              <i class="iconfont icon-right-arrow"></i>
            </div>
          </div>
        </div>
        <div class="li">
          <i class="iconfont icon-wait-shipping"></i>
          <div class="cell">
            <div class="cell-title">
              待发货
            </div>
            <div class="cell-value">
              <i class="iconfont icon-right-arrow"></i>
            </div>
          </div>
        </div>
        <div class="li">
          <i class="iconfont icon-wait-receive"></i>
          <div class="cell">
            <div class="cell-title">
              待收货
            </div>
            <div class="cell-value">
              <i class="iconfont icon-right-arrow"></i>
            </div>
          </div>
        </div>
        <div class="li">
          <i class="iconfont icon-eval"></i>
          <div class="cell">
            <div class="cell-title">
              待评价
            </div>
            <div class="cell-value">
              <i class="iconfont icon-right-arrow"></i>
            </div>
          </div>
        </div>
        <div class="li">
          <i class="iconfont icon-refund"></i>
          <div class="cell">
            <div class="cell-title">
              退换货
            </div>
            <div class="cell-value">
              <i class="iconfont icon-right-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cell pay-cell">
      <div class="cell-title">
        我的收藏
      </div>
      <div class="cell-value">
        <i class="iconfont icon-right-arrow"></i>
      </div>
    </div>
    <div class="cell pay-cell">
      <div class="cell-title">
        我的礼券
      </div>
      <div class="cell-value">
        <i class="iconfont icon-right-arrow"></i>
      </div>
    </div>
    <div class="cell pay-cell">
      <div class="cell-title">
        客服电话
      </div>
      <div class="cell-value">
          周一至周五 9:00 - 18:30
        <i class="iconfont icon-right-arrow"></i>
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
export default {
  data () {
    return {
      headImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/euEficVLicL3ZlI1ODSpwicbhfBAbWLMR2Vicp7vVkly82kYJesfibc7xoltNDKibdDBOn7c3PdPPO8ucDRqzXuSbYcA/132'
    }
  }
}
</script>

<style scoped lang="scss">
  .me {
    margin-bottom: 110px;
  }

  .icon-selected {
    color: #2a2a2a !important;
  }

  .trade-list {
    padding-left: 30px;
    background-color: #FFF;
    margin-bottom: 20px;
    .iconfont {
      font-size: 48px;
    }
    .icon-right-arrow {
      line-height: 48px;
      font-size: 36px;
    }
    .ul .li {
      font-size: 48px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      i {
        width: 48px;
        height: 48px;
        margin-right: 15px;
      }
      .cell {
        flex: 1;
      }
      &:last-child .cell {
        border: none;
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    .cell-title, .cell-value {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cell-title {
      height: 100%;
      font-size: 28px;
      i {
        margin-right: 5px;
      }
    }
    .cell-value {
      margin-right: 24px;
      color: #ccc;
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

  .member {
    height: 140px;
    line-height: 140px;
    margin-bottom: 30px;
    border: none;
    .head-img {
      width: 100px;
      height: 100px;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border-radius: 100%;
      margin: 20px 30px;
    }
    .user {
      width: 500px;
      font-size: 32px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
