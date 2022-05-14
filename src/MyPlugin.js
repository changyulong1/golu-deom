import Toast from "./Toast";
let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast =(message,toastOptions)=>{
            if(currentToast){
                currentToast.clear()
            }
            currentToast=createToast({Vue,message,propsData:toastOptions})
        }
    }
}







function createToast({Vue,message,propsData}){
    let constructor = Vue.extend(Toast)
    let toast = new constructor({propsData})
    toast.$slots.default=[message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
