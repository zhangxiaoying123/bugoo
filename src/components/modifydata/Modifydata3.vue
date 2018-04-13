<template>
  <div class="Modifydata3">
    <mt-header title="个人信息">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="" slot="right">保存</mt-button>
    </mt-header>
    <ul class="information">
        <li>
            <P>头像</P>
            <router-link to=''>
                <span></span>
                    <p>></p>
            </router-link>
        </li>
        <li>
            <p>昵称</p>
            <input type="text" placeholder="默认用户名称"><p>></p>
        </li>
        <li>
            <p>性别</p>
            <router-link to='' @click='according()'>
                <p>未填写</p>
                <p>></p>
            </router-link>
            
            <mt-popup
                v-model="this.popupVisible"
                position="bottom" v-show="!isShow">
                <div class="kuang">
                    <div class="quxiao">
                        <p>取消</p>
                        <p>确定</p>
                    </div>
                    <div class="gender">
                        生日日期
                    </div>
                </div>
            </mt-popup>
        </li>
        <li>
            <p>生日</p>
            <router-link to='' @click='birthday()'>
                <p>未填写</p>
                <p>></p>
            </router-link>
        </li>
        <li>
            <p>地区</p>
            <router-link to='' @click='region()'>
                <p>未填写</p>
                <p>></p>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
export default {
    name:'Modifydata3',
    data () {
        return {
            popupVisible:''
        }
    }
}
</script>

<style lang='scss' scoped>
.mint-header{
    background: rgb(255, 255, 255);
    color: black;
    text-align: center;
  }
  a{
      text-decoration: none;
      color: black;
      span{
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ccc;
      }
      p{
          display: inline-block;
        //   line-height: 60px;
      }
  }
  h1{
      text-align: center;
      width: 56px;
      height: 14px;
  }
.Modifydata3{
    width: 100%;
    height: 667px;
    background: #f2f2f2;
}
.information{
    width: 100%;
    margin-top: 20px;
    li{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        border-bottom: 1px solid #d7d7d7;
        padding: 0 20px;
        box-sizing: border-box;
        position: relative;
        input{
            height: 50px;
            outline: none;
            border: none;
            // margin-left: 50px;
            position: absolute;
            bottom: 0;
            right: 35px;
            text-align: center;
        }
        a{
            color: #d7d7d7;
        }
    }
}
.mint-popup-bottom{
    width: 100%;
    height: 300px;
    background: rgba(255, 255, 255,0.9);
}
.kuang{
    .quxiao{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        background: rgb(221, 220, 220);
    }
    .gender{
        width: 100%;
        margin-top: 80px;
        p{
            text-align: center;
            font-size: 25px;
            line-height: 35px;
        }
        
    }
}
</style>
