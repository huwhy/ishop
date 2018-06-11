<template>
  <div class="address-list">
    <div class="address" v-for="address in list" :key="address.id">
      <div class="content">
        <p>{{address.name}} {{address.tel}}</p>
        <p>{{address.address}}</p>
      </div>
      <div class="bottom">
      <span>
        <i class="iconfont icon-quan"></i>
        默认地址
      </span>
        <a>编辑</a>
      </div>
    </div>
    <router-link class="footer-btn" :to="'/me/address/0'">
      <a>添加收货地址</a>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },

  methods: {
    onAdd () {
      this.$toast('新增收货地址')
    },
    onEdit (item, index) {
      this.$toast('编辑收货地址:' + index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .address-list {
    background-color: #FFF;
  }
  .address {
    padding: 30px 0;
    border: 1px solid #f5f5f5;
    margin-bottom: 20px;
    position: relative;
    color: #808080;
    .content {
      padding: 0 30px;
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 44px;
        line-height: 44px;
        font-size: 32px;
        &:nth-child(1) {
          color: #000;
        }
        &:nth-child(2) {
          margin-top: 10px;
          font-size: 26px;
        }
      }
    }
    .bottom {
      height: 80px;
      border-top: 1px solid #f5f5f5;
      margin-top: 10px;
      line-height: 80px;
      text-align: left;
      padding: 0 30px;
      font-size: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 28px;
      }
    }
  }
  .footer-btn {
    position: fixed;
    margin: 0 auto;
    bottom: 0;
    z-index: 999;
    width: 750px;
    height: 104px;
    border-top: 1px solid #f5f5f5;
    background-color: #000;
    text-align: center;
    line-height: 104px;
    a {
      display: block;
      color: #FFF;
    }
  }
</style>
