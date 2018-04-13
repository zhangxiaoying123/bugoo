<template>
  <div class="Guide">
    <header>
        <router-link to=''><</router-link>
        <p>新手指南</p>
    </header>
    <div class="main">
        <div class="whatbg">
            <h1>布谷是做什么的？</h1>
            <p>布谷是名人时间共享互动平台。在布谷您可以购买您喜欢的名人时间，使用这些时间可以向名人兑换权益。当然，您也可以持有名人的时间，待更值钱的时候转让，赚取差价。</p>
        </div>
        <div class="lowprice">
            <h1>低价申购名人时间</h1>
            <p>名人时间的首次发型采用先申购后抽签的方式，所有用户在申购期间内均可以申购名人的时间。带申购结束后将统一随机抽签，每100秒为一签，申购的越多，中签的概率越大，中签后就可成功购买相应数量的时间。<br/>由于名人时间的首次方形通常原题与其世纪身价，同时名人会为自己的时间价值“保底”，如果市场价格跌破发行价，将以发行价回购自己的时间，因此申购时间是获得名人时间最超值的方式，一旦申购成功，将有机会获得可观的收益！</p>
        </div>
        <div class="exchange">
            <h1>使用时间兑换权益</h1>
            <p>使用名人的时间可以像鸣人兑换各种权益，比如一起吃饭、一起玩游戏、是哦拼脚力欧、技能教学、商业演出等等，让你有机会近距离和名人互动！具体权益可查看名人的个人主页。</p>
        </div>
        <div class="exchange">
            <h1>出售闲置时间</h1>
            <p>时间申购成功后，如果暂时不想兑换权益，也可以将手中闲置的时间在交易市场中出售给其他人，并赚取差价。在交易市场中每个名人都有一个基准价用来反映该名人当前的时间价值，基准价每12小时变动一次，根据前12小时的平均成交价决定，用户可以在基准价上下10%的范围内收购、出售时间。</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Guide',
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
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 15px;
        box-sizing: border-box;
        position: relative;
        a{
            position: absolute;
            left: 15px;
            text-decoration: none;
            font-size: 20px;
            color: #333;
        }
    }
    .main{
        width: 100%;
        padding: 15px 15px;
        box-sizing: border-box;
       h1{
           font-weight: bold;
           margin-bottom: 10px;
       }
       p{
           font-size: 10px;
           color: #777;
           text-align: justify;
       }
       div{
           margin-bottom: 30px;
       }
    }
</style>
