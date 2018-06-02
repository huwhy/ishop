<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <v-footer />
    <div @click="toTop" v-show="topShow" class="back-top" style="display: block;"><img src="https://img.wowdsgn.com/icons/backTop.png"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      scrollPos: 0
    }
  },
  computed: {
    topShow () {
      return this.scrollPos > 750
    }
  },
  methods: {
    handleScroll () {
      this.scrollPos = window.scrollY
    },
    toTop () {
      var gotoTop = function () {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop
        currentPosition -= 10
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition)
        } else {
          window.scrollTo(0, 0)
          clearInterval(timer)
          timer = null
        }
      }
      var timer = setInterval(gotoTop, 1)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style type="text/css" lang="scss">
  .back-top {
    // display: block;
    position: fixed;
    right: 50px;
    bottom: 150px;
    display: none;
    z-index: 998;
    width: 70px;
    height: 70px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
