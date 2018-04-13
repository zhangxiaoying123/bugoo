import Vue from 'vue'
import Router from 'vue-router'
import NewX from '@/components/NewX'
import Shade from '@/components/shade/Shade'
import Lssuer from '@/components/Lssuer'
import Nwe from '@/components/Nwe'
import NewY from '@/components/NewY'
import ShareOut from '@/components/ShareOut'
import Beingloaded from '@/components/Beingloaded'
import WeiboShare from '@/components/WeiboShare'
import TheissuerShare from '@/components/theissuer/TheissuerShare'
import Publisher from '@/components/theissuer/Publisher'
import IssuerShare from '@/components/theissuer/IssuerShare'
import Modifydata1 from '@/components/modifydata/Modifydata1'
import Modifydata2 from '@/components/modifydata/Modifydata2'
import Modifydata3 from '@/components/modifydata/Modifydata3'
import Modifydata4 from '@/components/modifydata/Modifydata4'
import Bookingrules from '@/components/userinstructions/Bookingrules'
import Timedeal from '@/components/userinstructions/Timedeal'
import Guide from '@/components/userinstructions/Guide'
import Useagreement from '@/components/userinstructions/Useagreement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ShareOut',
      name: 'ShareOut',
      component: ShareOut
    },
    {
      path: '/NewX',
      name: 'NewX',
      component: NewX
    },
    {
      path: '/Shade',
      name: 'Shade',
      component: Shade
    },
    {
      path: '/Lssuer',
      name: 'Lssuer',
      component: Lssuer
    },
    {
      path: '/Nwe',
      name: 'Nwe',
      component: Nwe
    },
    {
      path: '/NewY',
      name: 'NewY',
      component: NewY
    },
    {
      path: '/Beingloaded',
      name: 'Beingloaded',
      component: Beingloaded
    },
    {
      path: '/WeiboShare',
      name: 'WeiboShare',
      component: WeiboShare
    },
    {
      path: '/TheissuerShare',
      name: 'TheissuerShare',
      component: TheissuerShare
    },
    {
      path: '/Publisher',
      name: 'Publisher',
      component: Publisher
    },
    {
      path: '/IssuerShare',
      name: 'IssuerShare',
      component: IssuerShare
    },
    {
      path: '/Modifydata1',
      name: 'Modifydata1',
      component: Modifydata1 
    },
    {
      path: '/Modifydata2',
      name: 'Modifydata2',
      component: Modifydata2 
    },
    {
      path: '/Modifydata3',
      name: 'Modifydata3',
      component: Modifydata3 
    },
    {
      path: '/Modifydata4',
      name: 'Modifydata4',
      component: Modifydata4 
    },
    {
      path: '/Bookingrules',
      name: 'Bookingrules',
      component: Bookingrules
    },
    {
      path: '/Timedeal',
      name: 'Timedeal',
      component: Timedeal
    },
    {
      path: '/Guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/Useagreement',
      name: 'Useagreement',
      component: Useagreement
    }
  ]
})
