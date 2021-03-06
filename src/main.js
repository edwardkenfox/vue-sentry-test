// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'
import RavenVue from './raven-vue.js'

Raven
  .config(YOUR_SENTRY_DSN)
  .addPlugin(RavenVue, Vue)
  .install()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
