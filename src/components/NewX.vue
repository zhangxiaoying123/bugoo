<template>
  <div class="hello">
    <div>
        <header>
        <mt-header title="" fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button icon="more" slot="right" @click="share(isShow)"></mt-button>
        </mt-header>
      </header>
      <div class="main">
        <!-- <ul>
          <li v-for="item in this.obj">
              <h1>{{item.title}}</h1>
              <h3>{{item.author}}</h3>
          </li>
        </ul> -->
        <h1>新闻标题</h1>
        <p class="p-1">官方  <span>发表日期</span></p>
        <p class="p-2"></p>
        <img src="../assets/img/004iKh4Tzy7cWDkax6pa1&690.jpeg" alt="">
        <p class="p-3"></p>
      </div>
    </div>
    <!-- <Shade v-show="!isShow"></Shade> -->
    <div class="shade" v-show="isShow" @click="vanish(isShow)">
      <div class="fen">
        <div class="fren">

        </div>  
      </div>
      <button class="btn">取消</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import Shade from './shade/Shade'
//eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'NewX',
  data () {
    return {
      obj:'',
      isShow:false
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
    share(isShow){
      this.isShow = !isShow;
    },
    vanish(isShow){
      this.isShow = !isShow;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .mint-header{
    background: white;
    color: black;
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
    }
    img{
      width: 345px;
      height: 201px;
      margin: 31px 0 0 0;
    } 
    // .p-3{
    //   width: 343px;
    //   height: 148px;
    //   background: rgb(203, 202, 202);
    //   // margin-bottom: 30px;
    // }
  }
  .shade{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 15;
        .fen{
            position: absolute;
            bottom: 61px;
            width: 100%;
            height: 151px;
            background: rgba(255, 255, 255,0.9);
        }  
        .btn{
          width: 100%;
          height: 61px;
          border: none;
          background: white;
          outline: none;
          position: absolute;
          bottom: 0;
        }
    }
</style>
