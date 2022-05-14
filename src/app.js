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
import MyPlugin from "./MyPlugin";

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-aside', Aside)
Vue.component('g-footer', Footer)
Vue.use(MyPlugin)
new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        value: '张灿'
    },
    methods: {
        positionTop() {
            this.$toast('<h3>我是标签1</h3>',
                {
                    position:"top"
                }
            )
        },
        center(){
            this.$toast('<h3>我是标签2</h3>',
                {
                    position:"middle",
                    closeButton: {text:'关闭把',callback:()=>{
                        console.log(666)
                        }}
                }
            )
        },
        bottom(){
            this.$toast('<h3>我是标签3</h3>',
                {
                    position:"bottom"
                }
            )
        }
    }
})


