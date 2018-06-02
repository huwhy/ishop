<template>
  <header class="header">
    <img class="logo" src="https://m.wowdsgn.com/static/img/titleView.png">
    <div class="search-box">
      <img src="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" />
      <input type="search" name="searchKey" placeholder="搜索尖叫好物">
    </div>
  </header>
</template>

<script type="text/javascript">
export default {}
</script>

<style type="text/css" scoped lang="scss">
.header {
  height: 88px;
  line-height: 88px;
  padding: 0 20px;
  position: relative;
  background-color: #FFF;
  img {
    display: inline-block;
    margin-top: 6px;
    margin-bottom: 6px;
    vertical-align: middle;
    &.logo {
      width: 130px;
    }
  }
  .search-box {
    display: inline-block;
    width: 540px;
    height: 56px;
    line-height: 56px;
    vertical-align: middle;
    background-color: #f5f5f5;
    border-radius: 30px;
    margin-left: 15px;
    margin-bottom: 5px;
    img {
      width: 40px;
      margin: 0 10px;
    }
    input {
      background-color: #f5f5f5;
      display: inline-block;
      width: 80%;
      height: 54px;
    }
  }
}
</style>
