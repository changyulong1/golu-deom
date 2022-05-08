import Vue from 'vue'
import Button from "./Button.vue";
import Icon from "./Icon";
import buttonGroup from "./Button-group";
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)
new Vue({
    el:"#app",
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})
