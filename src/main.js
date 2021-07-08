import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PrimeVue from 'primevue/config'
import VueMaterial from 'vue-material'
import VTooltip from 'v-tooltip'
import ToastService from 'primevue/toastservice'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'primevue/resources/themes/vela-purple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/style/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// https://vuematerial.io/components/tabs/pages
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMaterial)
Vue.use(VTooltip)
Vue.use(ToastService)
Vue.use(PrimeVue, { ripple: true })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
