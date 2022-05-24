import Button  from "./src/Button";
import ButtonGroup from "./src/Button-group";
import Icon from "./src/Icon";
import Input from "./src/Input";
import Row from "./src/Row";
import Col from "./src/Col";
import Layout from "./src/Layout";
import Header from "./src/Header";
import Content from "./src/Content";
import Aside from "./src/Aside";
import Footer from "./src/Footer";
import MyPlugin from "./src/MyPlugin";
import tabs from "./src/Tabs";
import tabsHead from "./src/TabsHead";
import tabsBody from "./src/TabsBody";
import tabsPane from "./src/TabsPane";
import tabsTime from "./src/TabsTime";
import Popover from "./src/Popover";
import Collapse from "./src/Collapse";
import CollapseTime from "./src/CollapseTime";

const component = { //通过install来支持组件
    install(Vue) {
        Vue.component('g-button', Button)
        Vue.component('g-icon', Icon)
        Vue.component('g-button-group', ButtonGroup)
        Vue.component('g-input', Input)
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        Vue.component('g-layout', Layout)
        Vue.component('g-header', Header)
        Vue.component('g-content', Content)
        Vue.component('g-aside', Aside)
        Vue.component('g-footer', Footer)
        Vue.component('g-tabs', tabs)
        Vue.component('g-tabs-head', tabsHead)
        Vue.component('g-tabs-body', tabsBody)
        Vue.component('g-tabs-time', tabsTime)
        Vue.component('g-tabs-pane', tabsPane)
        Vue.component('g-popover', Popover)
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-time', CollapseTime)
        Vue.use(MyPlugin)
    }
}
if(typeof window!=='undefined' && window.Vue){
    window.Vue.use(component)
}

export default component
