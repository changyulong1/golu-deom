import Vue from 'vue'
import Button from "./Button.vue";
import Icon from "./Icon";
import buttonGroup from "./Button-group";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Aside from "./Aside";
import Footer from "./Footer";
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-aside',Aside)
Vue.component('g-footer',Footer)
new Vue({
    el:"#app",
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        value:'张灿'
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
})






//单元测试
import chai from 'chai'
import spies from "chai-spies"
chai.use(spies)
const expect = chai.expect

try {
    //测试button按钮是否有icon
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setup'
            }
        })
        vm.$mount()
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-setup')
        vm.$el.remove()
        vm.$destroy()
    }
//测试是否开始加载icon
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setup',
                loading:true
            }
        })
        vm.$mount()
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
//测试默认的icon的默认位置
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setup',
            }
        })
        vm.$mount(div)
        const svg = vm.$el.querySelector('svg')
        const {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
//测试添加iconPosition后icon的位置
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setup',
                iconPosition:'right'
            }
        })
        vm.$mount(div)
        const svg = vm.$el.querySelector('svg')
        const {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
//测试button的click是否执行

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setup',

            }
        })
        vm.$mount()
        //模拟事件执行函数
        let spy = chai.spy(function (){})
        vm.$on('click',spy)
        const button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }

}catch (error){
    window.errors = [error]
}finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}
