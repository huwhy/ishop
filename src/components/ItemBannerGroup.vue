<template>
  <div class="item-group">
    <div class="item-group-title">
      <h1>热卖清单</h1>
      <h3>Top 好物带来的惊喜收获</h3>
    </div>
    <div class="banner">
      <a href="">
        <img v-lazy="'https://img.wowdsgn.com/page/banners/794a67e1-bd12-4d65-9499-bf4e058da69d_2dimension_750x376.jpg?imageslim'"/>
      </a>
    </div>
    <div class="item-list-wrap">
      <div class="item-list">
        <a class="item" href="">
          <img v-lazy="'https://img.wowdsgn.com/product/images/78bdcad1-88f0-4dd0-9460-7f703becb41d_2dimension_800x800.jpg?imageView2/1/w/200/h/200'" />

          <p class="title">LED 带灯化妆镜 浅绿色 普通装</p>
          <span class="price">￥159</span>
        </a><a class="item" href="">
          <img v-lazy="'https://img.wowdsgn.com/product/images/78bdcad1-88f0-4dd0-9460-7f703becb41d_2dimension_800x800.jpg?imageView2/1/w/200/h/200'" />

          <p class="title">LED 带灯化妆镜 浅绿色 普通装</p>
          <span class="price">￥159</span>
        </a><a class="item" href="">
          <img v-lazy="'https://img.wowdsgn.com/product/images/78bdcad1-88f0-4dd0-9460-7f703becb41d_2dimension_800x800.jpg?imageView2/1/w/200/h/200'" />

          <p class="title">LED 带灯化妆镜 浅绿色 普通装</p>
          <span class="price">￥159</span>
        </a><a class="item" href="">
          <img v-lazy="'https://img.wowdsgn.com/product/images/78bdcad1-88f0-4dd0-9460-7f703becb41d_2dimension_800x800.jpg?imageView2/1/w/200/h/200'" />

          <p class="title">LED 带灯化妆镜 浅绿色 普通装</p>
          <span class="price">￥159</span>
        </a><a class="item" href="">
          <img v-lazy="'https://img.wowdsgn.com/product/images/78bdcad1-88f0-4dd0-9460-7f703becb41d_2dimension_800x800.jpg?imageView2/1/w/200/h/200'" />

          <p class="title">LED 带灯化妆镜 浅绿色 普通装</p>
          <span class="price">￥159</span>
        </a>
      </div>
    </div>
    <div class="item-more">
      查看全部>>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.item-group {
  background-color: #fff;
  margin-bottom: 30px;
  padding-bottom: 30px;
  .item-group-title {
    padding: 26px 0 30px;
    text-align: center;
    h1 {
      font-weight: bold;
      font-size: 36px;
      color: #333;
      margin: 30px 0;
    }
    h3 {
      font-weight: nornal;
      font-size: 24px;
      color: #808080;
    }
  }
  .banner {
    text-align: center;
    height: 345px;
    img {
      width: 690px;
      height: 100%;
    }
  }
  .item-list-wrap{
    width: 750px;
    height: 284px;
    position: relative;
    .item-list{
      height: 284px;
      white-space:nowrap;
      overflow-y: auto;
      .item {
        width: 220px;
        height: 284px;
        display: inline-block;
        margin: 0 15px 0 0;
        &:first-child {
          margin-left: 30px;
        }
        img {
          height: 220px;
          width: 220px;
          margin-bottom: 22px;
        }
        .title {
          font-size: 24px;
          color: #808080;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          font-size: 24px;
        }
      }
    }
  }
  .item-more {
    text-align: center;
    margin-top: 30px;
    font-size: 24px;
    color: #4A4A4A;
  }
}
</style>
