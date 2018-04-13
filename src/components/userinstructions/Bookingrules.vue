<template>
  <div class="Bookingrules">
    <header>
        <router-link to=''><</router-link>
        <p>预约规则</p>
    </header>
    <div class="main">
        <div class="process">
            <h1>预约流程</h1>
            <p>
            用户申请预约--> 用户支付时间 --> 发行人接受邀请 --> 双方履约 --> 发行人确认 --> 用户评价
            </p>
        </div>
        <div class="Payattention">
            <h1>预约注意事项</h1>
            <ol>
                <li>
                    <p>1.申请人需提前7天申请预约发行人，并支付所需时间、由布谷官方冻结保管，预约成功后，扣除时间；预约未成功，则返还时间</p>
                </li>
                <li>
                    <p>2.申请人申请预约72小时内，发行人根据自身情况确定是否接受预约。</p>
                </li>
                <li>
                    <p>3.如遇到特殊情况有迟到的可能，需提前15分钟和布谷客服进行沟通。</p>
                </li>
                <li>
                    <p>4.根据用户协议，申请人无故迟到30分钟，发行人有权确定此次预约成立，提供相关证据与布谷客服进行联系；发行人迟到30分钟，申请人有权要求退还预约时间。</p>
                </li>
                <li>
                    <p>5.若发行人已经与申请人约定好时间，但因发行人方面原因，造成不能履约，经申请人同意后，发行人可与申请人另行约定时间。<br/>当发行人已经与申请人约定好时间，但因申请人方面原因，造成不能履约，造成的损失由申请人自行承担，平台按照申请人已经行权，发行人履约结算。</p>
                </li>
                <li>
                    <p>6.由于预约产生的车马、服装、餐饮、住宿等费用需由申请人承担。</p>
                </li>
            </ol>
        </div>
        <div class="specification">
            <h1>预约行为规范</h1>
            <p>申请人仅限于在预约项目规定的范围内行使权益。<br/>履约期间，双方必须保证行为合理合法。<br/>布谷拥有对《预约规则》最终解释权，并随时进行修订。</p>
        </div>
    </div>   
  </div>
</template>

<script>
// import Vue from 'vue'
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
export default {
    name:'Bookingrules',
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
        p{
            text-align: justify;
        }
    }
    .process{
        margin-top: 10px;
        h1{
            font-weight: bold;
            margin-bottom: 10px;
        }
        p{
            font-size: 10px;
            color: #777;
        }
    }
    .Payattention{
        margin-top: 30px;
        h1{
            font-weight: bold;
        }
        ol{
            li{
                padding: 5px 0;
                p{
                    font-size: 10px;
                    color: #777;
                    // line-height: 10px;
                }
            }
        }
    }
    .specification{
        margin-top: 30px;
        h1{
            font-weight: bold;
            margin-bottom: 5px;
        }
        p{
            font-size: 10px;
            color: #777;
            line-height: 20px;
        }
    }
</style>
