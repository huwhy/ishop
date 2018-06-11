<template>
  <div>
    <cell2 :more="false" title="收货人">
      <input class="input-text" placeholder="请输入收货人" slot="value" />
    </cell2>
    <cell2 :more="false" title="手机号">
      <input class="input-text" placeholder="请输入收货人" slot="value" />
    </cell2>
    <cell2 :more="false" title="省市区">
      <input class="input-text" placeholder="请输入收货人" slot="value" />
    </cell2>
    <cell2 :more="false" title="详细地址">
      <input class="input-text" placeholder="请输入收货人" slot="value" />
    </cell2>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import Cell2 from '@/components/Cell2'
export default {
  components: {
    'cell2': Cell2
  },
  data () {
    return {
      show: true,
      username: '',
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      },
      searchResult: []
    }
  },

  methods: {
    onSave () {
      this.$toast('save')
    },
    onDelete () {
      this.$toast('delete')
    },
    onConfirm (value) {
      console.log(value)
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-text{
    display: inline-block;
    width: 520px;
    height: 80px;
    text-indent: 20px;
    margin-left: 30px;
    font-size: 28px;
    color: #000;
  }
</style>
