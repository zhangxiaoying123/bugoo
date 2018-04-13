<template>
  <div class="ShareOut">
        <header>
        <mt-header title="发表的新闻标题(分享)" fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </header>
      <div class="main">
        <!-- <ul>
          <li v-for="item in this.obj">
              <h1>{{item.title}}</h1>
              <h3>{{item.author}}</h3>
          </li>
        </ul> -->
        <div>
          <h1>新闻标题</h1>
          <p class="p-1">官方  <span>发表日期</span></p>
          <p class="p-2">新闻内容</p>
          <div class="wenP">
            图片
            <!-- <img src="../assets/img/004iKh4Tzy7cWDkax6pa1&690.jpeg" alt="" class="i-1"> -->
          </div>
          
          <p class="p-3"></p>
        </div>
        <div class="download">
          <img src="../assets/img/004iKh4Tzy7cWDkax6pa1&690.jpeg" alt="" class="i-2">
          <div class="wen">
            <p class="down">需要下载的软件名称</p>
            <p class="loadtime">下载app购买他的时间</p>
          </div>
          
          <button class="downloadbtn">立即下载</button>
        </div>
      </div> 
      
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import Shade from './shade/Shade'
export default {
  name: 'ShareOut',
  data () {
    return {
      obj:''
    }
  },
  // components: {
  //   Shade
  // },
  mounted(){
    this.$http.get('http://47.95.226.243/api/app/news?id=1')
    .then((response)=>{
        this.obj = response.data;
        console.log(this.obj)
    },(error)=>{
        console.log(error)
    })
  },
  methods: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .mint-header{
    background: black;
    color: white;
  }
  img[data-v-27be1ae8]{
    width: 200px;
    height: 200px;
  }
  .main{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 58px;
    h1{
      width: 342px;
      height: 47px;
      background: rgb(233, 231, 229);
      margin: auto;
      text-align: center;
      margin-bottom: 18px;
    }
    .p-1{
      /* width: 100%;
      padding: 0 16px; */
      margin-left: 16px;
      font-size: 10px;
      // color:rgb(203, 202, 202); 
      margin-bottom: 29px;
    }
    .p-2{
      width: 343px;
      height: 148px;
      margin: auto;
      /* text-align: center; */
      background: rgb(203, 202, 202);
      margin-bottom: 30px;
    }
    .wenP{
        width: 345px;
        height: 201px;
        margin-top: 31px;
        background: rgb(203, 202, 202);
        margin:auto;
    }
  }
  .download{
    width: 100%;
    height: 50px;
    display: flex;
    // justify-content: space-between;
    // align-items: center;
    position: fixed;
    bottom: 0;
    .i-2{
      width: 50px;
      height: 50px;
    }
    .wen{
      margin-left: 15px;
      margin-right: 70px;
    }
    .loadtime{
      font-size: 10px;
      color: rgb(235, 237, 237);
    }
    .down{
      font-size: 15px;
    }
    .downloadbtn{
      width: 70px;
      height: 30px;
      background: rgb(92, 123, 145);
      color: white;
      outline: none;
      border: none;
    }
  }
</style>
