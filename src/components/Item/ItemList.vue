<template>
  <div class="item-list">
    <router-link :to="`/item/${item.id}`" v-for="(item, index) in items" :key="index">
      <span v-show="false" class="NEW">NEW</span>
      <img v-lazy="item.mainImage" />
      <p class="title">{{item.title}}</p>
      <span class="price">￥{{item.price}}</span>
      <p class="title">{{item.subTitle}}</p>
    </router-link>
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

<style type="text/css" lang="scss" scoped>
.item-list {
  display: flex;
  flex-flow: wrap;
  background-color: #FFF;
  a {
    display: block;
    width: 375px;
    // height: 560px;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    position: relative;
    padding-bottom: 20px;
    color: #555;
    img {
      display: block;
      width: 370px;
      height: 371px;
      margin: 0 auto;
      border: none;
    }
    .title {
      width: 311px;
      color: #808080;
      font-size: 25px;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      margin: 0 auto;
    }
    .price {
      width: 311px;
      margin: 0 auto 0 32px;
      font-family: PingFangSC-Regular;
      font-size: 26px;
      color: #000;
      position: relative;
      display: inline-block;
    }
  }
}
span.NEW {
  display: inline-block;
  color: #555;
  background-color: #FFD900;
  position: absolute;
  top: 32px;
  left: 32px;
  text-align: center;
  font-size: 22px;
  padding: 1px 10px;
  margin-right: 10px;
}
</style>
