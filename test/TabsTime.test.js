const expect = chai.expect;
import Vue from 'vue'
import tabsTime from "../src/TabsTime";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tabsTime', () => {
    it('存在.', () => {
        expect(tabsTime).to.exist
    })
    describe('props', function () {
        it('接受 name 属性', () => {
            const Constructor = Vue.extend(tabsTime)
            const vm = new Constructor({
                propsData: {
                    name: 'xxx',
                }
            }).$mount()
                expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
        })
        it('接受 disabled 属性', () => {
            const Constructor = Vue.extend(tabsTime)
            const vm = new Constructor({
                propsData: {
                    disabled: true,
                }
            }).$mount()
            expect(vm.$el.classList.contains('disabled')).to.be.true
            const callback = sinon.fake();
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
        })


    })
})

