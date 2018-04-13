<template>
  <div class="Timedeal">
    <header>
        <router-link to=''><</router-link>
        <p>时间交易规则</p>
    </header>
    <div class="main">
        <div class="trading">
            <h1>交易规则</h1>
            <table border="1" cellspacing='0'>
                <tr>
                    <td >可交易时间</td>
                    <td>7*24小时，出维护时间外，全年无交易</td>
                </tr>
                <tr>
                    <td>最小交易单位</td>
                    <td>秒</td>
                </tr>
                <tr>
                    <td>基准价格</td>
                    <td>每天0点、12点更新基准价格一句前12小时内该发行人说有成交的加权平均价得出</td>
                </tr>
                <tr>
                    <td>上限价</td>
                    <td>若基准价 >= 0.20,上限价为基准价的1.1被<br/>若基准价< 0.20，上限价为基准价 + 0.02</td>
                </tr>
                <tr>
                    <td>下限价</td>
                    <td>若基准价 >= 0.20，下限价为基准价的0.9倍<br/>若基准价 < 0.20，下限价为基准价 - 0.02</td>
                </tr>
                <tr>
                    <td>涨跌幅</td>
                    <td>涨跌幅指当前基准价相当于上一个基准价的涨跌幅</td>
                </tr>
                <tr>
                    <td>买卖手续费</td>
                    <td>免手续费，买卖过程中不收取任何手续费</td>
                </tr>
            </table>
        </div>
        <div class="purchase">
            <h1>申购规则</h1>
            <table border="1" cellspacing='0'>
                <tr>
                    <td >可申购时间</td>
                    <td>申购开始至申购结束期间内可不限次数申购，期间申购订单可以撤销</td>
                </tr>
                <tr>
                    <td>公布中签时间</td>
                    <td>申购结束的15分钟后，公布中签结果</td>
                </tr>
                <tr>
                    <td>申购成交时间</td>
                    <td>申购结束的30分钟后，将统一成交所有申购订单，并退还中签部分的冻结资金</td>
                </tr>
                <tr>
                    <td>抽签方式</td>
                    <td>用户每申购100秒即匹配一个抽签号码，在所有号码中，水鸡抽出（发行量/100）个中签号码。用户的申购订单中包含有多少个中签号码，就可以成功购买相应的秒数。申购的数量越多，中签的概率越大</td>
                </tr>
                <tr>
                    <td>最小申购单位</td>
                    <td>100秒或其整数倍</td>
                </tr>
                <tr>
                    <td>申购额度</td>
                    <td>申购额度指用户申购单个发行人的最大可申购数量<br/>申购额度 = 总持有市值 + 100000（秒），最大不超过100万秒</td>
                </tr>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Timedeal',
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
    padding: 0 15px;
    box-sizing: border-box;
    h1{
        margin-bottom: 10px;
    }
}
.trading{
    table{
        width: 100%;
        border: 1px solid #ccc;
        tr{
            border: 1px solid #f2f2f2; 
            td{
                font-size: 10px;
            }
            td:nth-of-type(1){
                width: 25%;
                background: #333;
                color: white;
                text-align: center;
                line-height: 25px;
            }
        }
    }
}
.purchase{
    margin-top: 40px;
    margin-bottom: 10px;
    table{
        width: 100%;
        border: 1px solid #ccc;
        tr{
            border: 1px solid #f2f2f2; 
            td{
                font-size: 10px;
            }
            td:nth-of-type(1){
                width: 25%;
                background: #333;
                color: white;
                text-align: center;
                line-height: 25px;
            }
        }
    }
}
</style>
