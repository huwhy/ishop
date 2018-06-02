<template>
  <div class="items">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <item-list :items="list" />
    </van-list>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          mainImage: 'https://img.wowdsgn.com/product/images/91f79346-cb0e-4968-85a9-679fde7e2608_2dimension_800x800.jpg?imageslim',
          price: 9999,
          title: '阿尔托系列边柜 摩登时代 浅木色',
          subTitle: '用优雅的曲线 向法式时尚致敬'
        },
        {
          id: 1,
          mainImage: 'https://img.wowdsgn.com/product/images/91f79346-cb0e-4968-85a9-679fde7e2608_2dimension_800x800.jpg?imageslim',
          price: 9999,
          title: '阿尔托系列边柜 摩登时代 浅木色',
          subTitle: '用优雅的曲线 向法式时尚致敬'
        },
        {
          id: 1,
          mainImage: 'https://img.wowdsgn.com/product/images/91f79346-cb0e-4968-85a9-679fde7e2608_2dimension_800x800.jpg?imageslim',
          price: 9999,
          title: '阿尔托系列边柜 摩登时代 浅木色',
          subTitle: '用优雅的曲线 向法式时尚致敬'
        },
        {
          id: 1,
          mainImage: 'https://img.wowdsgn.com/product/images/91f79346-cb0e-4968-85a9-679fde7e2608_2dimension_800x800.jpg?imageslim',
          price: 9999,
          title: '阿尔托系列边柜 摩登时代 浅木色',
          subTitle: '用优雅的曲线 向法式时尚致敬'
        }
      ],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          // this.list.push(this.list.length + 1)
          this.list.push(this.list[0])
        }
        this.loading = false
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
.items {
  margin-bottom: 110px;
}
</style>
