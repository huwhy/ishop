<template>
  <div class="cell">
    <div class="cell-title" :class="{'padding-l30': indent}">
      <i class="iconfont" :class="icon"></i>
      <slot name="title">
        {{title}}
      </slot>
    </div>
    <router-link tag="div" :to="link" v-if="link" class="cell-value">
      <slot name="value">
        {{value}}
      </slot>
      <i class="iconfont icon-right-arrow"></i>
    </router-link>
    <div v-else class="cell-value" :class="{'padding-r30': indent}">
      <slot name="value">
        {{value}}
      </slot>
      <i v-show="more" class="iconfont icon-right-arrow"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    more: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'title'
    },
    value: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'value'
    },
    link: {
      type: String,
      default: ''
    },
    indent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .padding-l30 {
    padding-left: 30px;
  }
  .padding-r30 {
    padding-right: 30px;
  }
  .cell {
    min-height: 100px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    .cell-title {
      i {
        font-size: 32px;
        line-height: 32px;
        margin-right: 5px;
      }
    }
    .cell-value {
      font-size: 24px;
      line-height: 32px;
      color: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        color: #ccc;
        margin-right: 24px;
        margin-left: 24px;
      }
      input[type=text] {
        border: none;
        font-size: 24px;
        height: 32px;
        line-height: 32px;
      }
    }
  }
</style>
