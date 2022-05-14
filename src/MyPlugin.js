import Toast from "./Toast";
export default {
    install(Vue,options){
        Vue.prototype.$toast =(message,toastOptions)=>{
            let constructor = Vue.extend(Toast)
           let toast = new constructor({
               propsData:toastOptions
           })
            toast.$slots.default=[message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
