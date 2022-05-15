const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs';
import tabsHead from "../src/TabsHead";
import tabsBody from "../src/TabsBody";
import tabsPane from "../src/TabsPane";
import tabsTime from "../src/TabsTime";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    describe('props', function () {
        it('接受selected属性', (done) => {
            Vue.component('g-tabs', Tabs)
            Vue.component('g-tabs-head', tabsHead)
            Vue.component('g-tabs-body', tabsBody)
            Vue.component('g-tabs-time', tabsTime)
            Vue.component('g-tabs-pane', tabsPane)
            let div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
                 <g-tabs selected="sports">
                   <g-tabs-head>
                       <g-tabs-time name="woman"> 美女 </g-tabs-time>
                       <g-tabs-time name="finance">财金</g-tabs-time>
                       <g-tabs-time name="sports">体育</g-tabs-time>
                   </g-tabs-head>
                   <g-tabs-body>
                        <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
                       <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                       <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
                   </g-tabs-body>
                </g-tabs>
    `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                const time=vm.$el.querySelector(`.g-tabs-time[data-name="sports"]`)
                expect(time.classList.contains('active')).to.be.true
                done()
            })

        })


    })
})
