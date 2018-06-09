<template>
  <div>
    <div class="base-info">
      <cell title="头像" class="header">
        <img slot="value" class="head-img" v-lazy="headImg">
      </cell>
      <cell title="昵称" value="道君">
      </cell>
      <cell title="个性签名" value="什么都没有">
      </cell>
      <cell title="性别" value="男">
      </cell>
      <cell title="年龄段" value="保密">
      </cell>
      <cell title="星座" value="天马流量">
      </cell>
      <cell title="职业" value="混子">
      </cell>
    </div>
    <div class="base-info">
      <cell title="收货地址" >
      </cell>
    </div>
  </div>
</template>

<script>
import Cell from '@/components/Cell'
export default {
  components: {
    'cell': Cell
  },
  data () {
    return {
      headImg: 'https://thirdwx.qlogo.cn/mmopen/vi_32/euEficVLicL3ZlI1ODSpwicbhfBAbWLMR2Vicp7vVkly82kYJesfibc7xoltNDKibdDBOn7c3PdPPO8ucDRqzXuSbYcA/132'
    }
  },
  watch: {
    $route (to, from) {
      console.log(to, from)
    }
  }
}
</script>

<style lang="scss">
.base-info {
  background-color: #FFF;
  padding-left: 30px;
  margin-bottom: 30px;
  .header {
    height: 150px;
    .head-img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
  }
  .cell:last-child {
    border: none;
  }
}
</style>
