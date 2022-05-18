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
import tabs from "./Tabs";
import tabsHead from "./TabsHead";
import tabsBody from "./TabsBody";
import tabsPane from "./TabsPane";
import tabsTime from "./TabsTime";
import Popover from "./Popover";
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
Vue.component('g-tabs',tabs)
Vue.component('g-tabs-head',tabsHead)
Vue.component('g-tabs-body',tabsBody)
Vue.component('g-tabs-time',tabsTime)
Vue.component('g-tabs-pane',tabsPane)
Vue.component('g-popover',Popover)
Vue.use(MyPlugin)
new Vue({
    el: "#app",
    data: {
        selectedTab: 'sports'
    },
    methods: {
        yyy(){
            console.log('yyy')
        }
    }
})


