<template>
  <div class="cart">
    <div class="cart-list">
      <div class="cart-item">
        <div class="title">
          <span class="ck iconfont icon-select active">
          </span>
          <div class="nums">
            <div class="minus disable">-</div>
            <div class="num">1</div>
            <div class="plus">+</div>
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
      </div>
      <div class="cart-item">
        <div class="title">
          <span class="ck iconfont icon-select">
          </span>
          <div class="nums">
            <div class="minus disable">-</div>
            <div class="num">1</div>
            <div class="plus">+</div>
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
      </div>
      <div class="cart-item">
        <div class="title">
          <span class="ck iconfont icon-select">
          </span>
          <div class="nums">
            <div class="minus disable">-</div>
            <div class="num">1</div>
            <div class="plus">+</div>
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
      </div>
    </div>

    <div class="item-footer">
      <ul>
        <li>
          <i class="ck iconfont icon-select"></i>
          <span>全选</span>
        </li>
        <li>
          合计￥399
        </li>
        <li>
          去结算
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .cart {
    background-color: #FFF;
  }

  .cart-list {
    .cart-item {
      padding-top: 0;
      padding-right: 0;
      padding-left: 30px;
      margin-bottom: 30px;
      margin-top: 0;
      height: auto;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        border-bottom: 1px solid #f5f5f5;
        border-top: 1px solid #f5f5f5;
        position: relative;
        line-height: 100px;
        .nums {
          height: 50px;
          margin-right: 30px;
          .minus, .num, .plus {
            list-style: none;
            text-align: center;
            font-size: 24px;
            background-color: #F5F5F5;
            float: left;
            margin-right: 0;
            height: 50px;
            line-height: 50px;
            width: 50px;
          }
          .num {
            width: 70px;
            background-color: #fff;
          }
        }
      }
      .content {
        padding: 30px 30px 30px 0;
        border-bottom: none;
        position: relative;
        display: flex;
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

  .ck {
    font-size: 60px;
    color: #aaaaaa;
    &.active {
      color: #202020;
    }
  }
</style>
