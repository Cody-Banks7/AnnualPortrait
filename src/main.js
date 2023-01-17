import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import htmlToPdf from "./htmlToPdf";
import VForm from 'vform-builds'  //引入VForm库
import 'vform-builds/dist/VFormDesigner.css'  //引入VForm样式

Vue.config.productionTip = false

Vue.use(VForm)  //全局注册VForm(同时注册了v-form-designer和v-form-render组件)
Vue.use(htmlToPdf)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
