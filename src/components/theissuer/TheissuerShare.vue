<template>
  <div class="theissuerShare">
    <div id="PersonalInformation">
        <div class="nickname">
            <div>
                <h2>昵称</h2>
                <p>认证信息</p>
                <p>城市 年龄</p>
                <p>详细资料></p>
            </div> 
            <router-link to='/' class="videobtn">视频介绍</router-link>
        </div>
    </div>
    <div class="abouttime">
        <p>预约她的时间</p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <DIV class="download">
        <p class="icon">icon</p>
        <div class="software">
            <p>推荐下载的软件名称</p>
            <p>下载App购买她的时间</p>
        </div>
        <router-link to='/'>立即下载</router-link>
    </DIV>
  </div>
</template>

<script>
// import Vue from 'vue'
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
export default {
    name:'theissuerShare',
    data () {
        return {
            
        }
    }
}
</script>

<style lang='scss' scoped>
  #PersonalInformation{
      width: 100%;
      height: 400PX;
      box-sizing: border-box;
      background: rgb(193, 199, 204);
      color: white;
      position: relative;
      .nickname{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 15px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          h2{
              margin-bottom: 5px;
          }
      }
      p{
          font-size: 10px;
      }
     .videobtn{
         width: 70px;
         height: 30px;
         line-height: 30px;
         background: rgb(117, 137, 153);
         outline: none;
         border: none;
         color: white;
         font-size: 12px;
         text-align: center;
         text-decoration: none;
     } 
  }
  .abouttime{
      font-size: 10px;
      color: rgb(112, 130, 145);
      width: 100%;
      padding: 20px 15px;
      box-sizing: border-box;
      ul{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          li{
              width: 100px;
              height: 100px;
              background: #F2F2F2;
              border-radius: 10px;
          }
      }
  }
  .download{
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 10px 15px;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      background: white;
    .icon{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        background: #ccc;
        text-align: center;
        line-height: 50px;
    }
    .software{
        margin-right: 60px;
        font-size: 15px;
        p:nth-of-type(2){
            font-size: 10px;
            color: #ccc;
        }
    }
    a{
        width: 70px;
        height: 30px;
        background: rgb(125, 151, 172);
        display: inline-block;
        text-decoration: none;
        color: white;
        font-size: 10px;
        text-align: center;
        line-height: 30px;
    }
  }
</style>
