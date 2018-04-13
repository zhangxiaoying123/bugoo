<template>
  <div class="NewY">
        <header>
        <mt-header title="" fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
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
        <div class="theme">
            <h1>新闻标题</h1>
            <p class="p-1">官方  <span>发表日期</span></p>
            <p class="p-2">文字描述1</p>
            <img src="../assets/img/004iKh4Tzy7cWDkax6pa1&690.jpeg" alt="">
            <p class="p-3">文字描述2</p>
        </div>
        <div class="shareWay">
            <p class="p-4">分享给好友</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
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
  name: 'NewY',
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
    .p-3{
      width: 343px;
      height: 248px;
      background: rgb(203, 202, 202);
      // margin-bottom: 30px;
    }
    .shareWay{
        // width: 100%;
        // margin: auto;
        .p-4{
            font-size: 10px;
            color: rgb(221, 221, 221);
            margin-top: 20px;
        }
        ul{
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgb(132, 143, 154);
            }
        }
    }
  }
</style>
