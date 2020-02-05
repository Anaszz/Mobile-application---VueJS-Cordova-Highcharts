import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import "chart.js"
import "hchs-vue-charts"
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'

Vue.config.productionTip = false

Vue.prototype.$axios = axios


Vue.use(window.VueCharts)
Vue.use(HighchartsVue, {
	highcharts: Highcharts
})

new Vue({
  render: h => h(App),
}).$mount('#app')
