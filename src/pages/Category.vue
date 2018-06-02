<template>
  <div>
    <v-header />
    <div class="categorys">
      <div class="list" v-for="(cate, index) in categories" :key="index">
        <div class="first-category">
          <img v-lazy="cate.banner" />
        </div>
        <ul>
          <li v-for="(item, i) in cate.list" :key="index + i">
            <router-link :to="item.url" class="clearfix">
              <span>{{item.name}}</span>
              <van-icon name="arrow" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      categories: [
        {
          banner: 'https://m.wowdsgn.com/static/img/furniture.png',
          list: [
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'}
          ]
        },
        {
          banner: 'https://m.wowdsgn.com/static/img/furniture.png',
          list: [
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'}
          ]
        },
        {
          banner: 'https://m.wowdsgn.com/static/img/furniture.png',
          list: [
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'}
          ]
        },
        {
          banner: 'https://m.wowdsgn.com/static/img/furniture.png',
          list: [
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'},
            {name: '沙发', url: '/item'}
          ]
        }
      ]
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
.categorys {
  position: relative;
  margin: 0 auto;
  background: #fff;
  padding: 0 30px 10px;
}
.list {
  overflow: hidden;
  transition: all .3s ease-in-out;
  padding: 20px 0 0;
  .first-category {
    width: 100%;
    display: block;
    img {
      width: 100%;
      display: block;
    }
  }
  ul li {
    line-height: 98px;
    height: 98px;
    font-size: 30px;
    color: #000;
    border-bottom: 1px solid #eaeaea;
    text-indent: 30px;
    span {
      float: left;
      color: #202020;
      overflow: hidden;
      width: 80%;
    }
    i {
      float: right;
      color: #ccc;
      font-size: 30px;
      line-height: 98px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
    }
  }
}
</style>
