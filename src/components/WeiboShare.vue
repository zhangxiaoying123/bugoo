<template>
  <div class="WeiboShare">
      <header>
        <router-link to='/'>关闭</router-link>
        <p>微博分享</p>
      </header>
  </div>
</template>

<script>
export default {
    name:'WeiboShare',
    data () {
        return {
            
        }
    }
}
</script>

<style lang='scss' scoped>
  header{
    width: 100%;
    height: 50px;
    padding: 10px 15px;
    box-sizing: border-box;
    // text-align: center;
    p{
      display: inline-block;
      margin-left: 30%;
    }
    a{
      text-decoration: none;
      color: black;
    }
  }
</style>
