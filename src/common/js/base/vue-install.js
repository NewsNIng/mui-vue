import _plusReady from '../5+/plusReady.js'

const install = function (Vue, options) {
  // 1. 添加全局方法或属性
//   Vue.myGlobalMethod = function () {
   
//   }

  // 2. 添加全局资源
  // Vue.directive('my-directive', {
  //     bind(el, binding, vnode, oldVnode) {

  //     }

  //   })
  // 3. 注入组件
  Vue.mixin({
      created: function () {
        _plusReady(() => {
          this.plusReady(plus.webview.currentWebview())
        })
      },
      methods: {
        plusReady: function () {}
      }
    })
    // 4. 添加实例方法
    //   Vue.prototype.$myMethod = function (options) {


  //   }
}

module.exports = {
  install
}
