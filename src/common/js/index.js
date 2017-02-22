import Vue from 'vue'
// import {
//   myMixin,
//   myExtend
// } from './base/vue-mixins.js'
import VueExtends from './base/vue-install.js'

Vue.use(VueExtends)

import mui from '../../../static/js/mui.min.js'
// require ('../../../static/css/mui.min.css')

import ax from './config/server.js'

module.exports = {mui,ax}
