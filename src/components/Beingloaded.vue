<template>
  <div class="beingloaded">
      <header>
        <mt-header title="" fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </header>
      <div class="load">

      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Indicator } from 'mint-ui';
export default {
    name:'beingloaded',
    data () {
        return {
            
        }
    },
    methods: {
        
    },
    mounted(){
        Indicator.open({
        text: '',
        spinnerType: 'fading-circle'
        });
    }
}
</script>

<style lang='scss' scoped>
.mint-header{
    background: white;
    color: black;
    text-align: center;
  }
</style>
