<template>
  <div class="shade">
      <div class="fen">
        <div class="fren">

        </div>
        <!-- <button class="btn">取消</button> -->
      </div>
      
  </div>
</template>

<script>
export default {
    name:'Shade',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoed>
    .shade{
        width: 100%;
        height: 667px;
        background: rgba(0, 0, 0,0.5);
        .fen{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 151px;
            background: rgba(255, 255, 255,0.9);
        }  
    }
</style>
