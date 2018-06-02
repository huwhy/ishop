<template>
  <div class="item">
    <div class="box_50">
      <van-swipe :autoplay="3000" class="item-images">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="box_50">
      <p class="title">
        五指沙发 双人位 红＋橙
      </p>
      <b class="price">
        ￥9999
      </b>
    </div>
    <div class="box_50 content">
      <template v-for="(item, index) in contents">
        <img v-if="item.type === 'IMAGE'" :key="id + index" class="image" v-lazy="item.content"/>
        <p v-else :class="item.type === 'A'? 'text' : 'bold'" :key="id + index" >{{item.content}}</p>
      </template>
    </div>
    <div class="item-footer">
      <ul>
        <li>
          <a>
            <i class="icon iconfont icon-collect"></i>
          </a>
          <router-link to="/cart">
            <i class="icon iconfont icon-cart"></i>
            <div class="cart-num">1</div>
          </router-link>
        </li>
        <li @click="skuShow = true;">
          <router-link to="" >
            加入购物车
          </router-link>
        </li>
        <li>
          <router-link to="">
            立即购买
          </router-link>
        </li>
      </ul>
    </div>
    <van-popup v-model="skuShow" position="bottom">
      <div class="sku-select">
        <div class="cur">
          <img v-lazy="'https://img.wowdsgn.com/product/images/d0db4f5d-1195-4a9c-b306-1576d18e9ce6.jpg?imageslim'" />
          <div class="info">
            <p class="title">小魔方组合斗柜 白色</p>
            <b>￥999</b>
            <p class="remark">尺寸：L45×W35×H18cm  重量：5.5kg</p>
          </div>
          <div class="iconf close iconfont icon-x">
          </div>
        </div>
        <div class="select">
          <div class="comp">
            <p class="title">颜色</p>
            <div class="content-wrap">
              <div class="ul">
                <span class="li active">
                  白色
                </span>
                <span class="li">
                  黑色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
              </div>
            </div>
          </div>
          <div class="comp">
            <p class="title">规格</p>
            <div class="content-wrap">
              <div class="ul">
                <span class="li active">
                  白色
                </span>
                <span class="li">
                  黑色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
                <span class="li">
                  紫色
                </span>
              </div>
            </div>
          </div>
          <div class="comp">
            <p class="title">数量</p>
            <div class="content-wrap">
              <div class="minus disable">-</div>
              <div class="num">1</div>
              <div class="plus">+</div>
            </div>
          </div>
        </div>
        <div class="btn-ok">
          确定
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      skuShow: true,
      id: 1,
      images: [
        'https://img.wowdsgn.com/product/addtionalImage//96a24482-2c28-42c2-af6d-7225802ab997_2dimension_750x600.jpg?imageslim',
        'https://img.wowdsgn.com/product/images/5b2460ac-8a08-4025-a6e5-839bf133c76b_2dimension_800x800.jpg?imageslim',
        'https://img.wowdsgn.com/product/addtionalImage//1a77dc77-cc12-41d7-9f25-edce751ad342_2dimension_750x600.jpg?imageslim',
        'https://img.wowdsgn.com/product/addtionalImage//d9d7bfe4-1c62-4993-ba32-04895ac1e582_2dimension_750x600.jpg?imageslim',
        'https://img.wowdsgn.com/product/addtionalImage//91747583-20dd-4387-9ece-d706fc58b669_2dimension_750x600.jpg?imageslim'
      ],
      contents: [
        {
          type: 'B',
          content: '中国传统神话与北欧简约设计的集合体'
        },
        {
          type: 'A',
          content: '芬兰炙手可热的设计师Yuki Mattowasabi于2005年毕业于赫尔辛基艺术设计大学。2009年创立了设计工作室MOTTOWASABI，为很多芬兰品牌做出了标志性产品，他将中国传统神话的”五指山“与北欧简约的设计相结合，配以独特的审美，将高低长短错落有致的模块堆积出了充满趣味的造型，第一时间吸引眼球。'
        },
        {
          type: 'IMAGE',
          content: 'https://img.wowdsgn.com/product/introduction/c6296176-b7be-4600-b904-a011b10757a3_2dimension_750x500.jpg?imageslim'
        },
        {
          type: 'IMAGE',
          content: 'https://img.wowdsgn.com/product/introduction/c6296176-b7be-4600-b904-a011b10757a3_2dimension_750x500.jpg?imageslim'
        },
        {
          type: 'IMAGE',
          content: 'https://img.wowdsgn.com/product/introduction/c6296176-b7be-4600-b904-a011b10757a3_2dimension_750x500.jpg?imageslim'
        },
        {
          type: 'IMAGE',
          content: 'https://img.wowdsgn.com/product/introduction/c6296176-b7be-4600-b904-a011b10757a3_2dimension_750x500.jpg?imageslim'
        },
        {
          type: 'A',
          content: '芬兰炙手可热的设计师Yuki Mattowasabi于2005年毕业于赫尔辛基艺术设计大学。2009年创立了设计工作室MOTTOWASABI，为很多芬兰品牌做出了标志性产品，他将中国传统神话的”五指山“与北欧简约的设计相结合，配以独特的审美，将高低长短错落有致的模块堆积出了充满趣味的造型，第一时间吸引眼球。'
        },
        {
          type: 'A',
          content: '芬兰炙手可热的设计师Yuki Mattowasabi于2005年毕业于赫尔辛基艺术设计大学。2009年创立了设计工作室MOTTOWASABI，为很多芬兰品牌做出了标志性产品，他将中国传统神话的”五指山“与北欧简约的设计相结合，配以独特的审美，将高低长短错落有致的模块堆积出了充满趣味的造型，第一时间吸引眼球。'
        }
      ]
    }
  }
}
</script>

<style type="text/css" lang="scss">
* {
  box-sizing: border-box;
}
.item {
  overflow: hidden;
  margin-bottom: 118px;
  .box_all {
    background-color: #FFF;
  }
  .box_50 {
    padding: 0 50px;
    background-color: #FFF;
    position: relative;
  }
  .item-images {
    width: 650px;
    height: 600px;
    img {
      width: 650px;
      height: 520px;
    }
  }
  .title {
    text-align: initial;
    padding-top: 30px;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price {
    font-size: 36px;
    color: #000;
    font-family: PingFangSC-Semibold;
    vertical-align: sub;
    padding-bottom: 28px;
    display: inline-block;
  }
}
.content {
  * {
    width: 100%;
  }
  .bold {
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: 32px;
    color: #000;
    letter-spacing: 1px;
    text-align: center;
    margin: 30px 0 10px;
  }
  .text {
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #707070;
    margin: 30px 0;
  }
  .image {
    width: 100%;
    display: block;
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
      width: 250px;
      height: 100%;
      display: table-cell;
      vertical-align: middle;
      font-size: 30px;
      text-align: center;
    }
    li:nth-child(1) {
      height: 100%;
      line-height: 88px;
      background-color: #fff;
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a {
        display: block;
        flex: 1;
        height: 100%;
        position: relative;
      }
      i {
        // position: absolute;
        top: 50%;
        font-size: 37px;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        color: #000;
      }
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
        background-color: #f5f5f5;
    }
    li:nth-child(3) {
        background-color: #FFD900;
    }
  }
}
.sku-select {
  width: 750px;
  line-height: 22px;
  font-size: 14px;
  .cur {
    position: relative;
    padding: 30px;
    img {
      width: 180px;
      height: 180px;
      border: 1px solid #F2F2F2;
    }
    .info {
      position: absolute;
      left: 230px;
      top: 30px;
      .title {
        font-family: PingFangSC-Regular;
        font-size: 36px;
        color: #000000;
        letter-spacing: 0;
        line-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom: 25px;
        margin-right: 10px;
        text-align: center;
      }
      b {
        font-weight: bold;
        display: block;
        font-size: 30px;
      }
      .remark {
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #808080;
        letter-spacing: 0;
        margin-top: 10px;
      }
    }
  }
  .close {
    position: absolute;
    top: 30px;
    right: 10px;
    font-size: 30px;
    width: 60px;
    z-index: 199999999;
  }
  .select {
    padding: 42px 40px;
    background: #fff;
    .comp {
      width: 100%;
      font-size: 28px;
      text-align: center;
      .title {
        color: #707070;
        font-size: 26px;
      }
      .content-wrap {
        width: 100%;
        text-align: left;
      }
      .minus, .plus, .num {
        background-color: #f5f5f5;
        padding: 15px 22px;
        margin: 0 20px 20px 0;
        display: inline-block;
        text-align: center;
        &.disable {
          color: #ccc;
        }
      }
      .num {
        width: 128px;
        background-color: #FFF;
      }
      .ul {
        overflow-x: auto;
        white-space: nowrap;
      }
      .li {
        display: inline-block;
        font-size: 28px;
        line-height: 28px;
        color: #000;
        background-color: #FFF;
        border: 1px solid #FFD900;
        padding: 15px 22px;
        &.active {
          color: #000;
          background-color: #FFD900;
        }
      }
    }
  }
  .btn-ok {
    text-align: center;
    background-color: #FFD900;
    height: 100px;
    font-size: 30px;
    line-height: 100px;
    width: 750px;
  }
}
</style>
