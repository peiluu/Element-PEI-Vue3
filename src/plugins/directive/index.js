/**
 * @desption 自定义全局指令 - Vue中的自定义指令其实就是把原生操作DOM进行了一次封装
 * Vue3的自定义指令相对Vue2生命周期函数发生了变化
 * @param {Vue} Vue构造器
 * @param {options} 一个可选的选项对象，调用的时候可传参数
 */
export default {
  // 注册全局指令
  install(Vue, options) {
    Vue.directive("focus", {
      // 当被绑定的元素挂载到 DOM 中时……
      mounted: function (el) {
        // 获取当前点击DOM下的input元素，并触发聚焦
        const input = el.getElementsByTagName("input")[0];
        input.focus();
      },
      // unmounted() {
      //   console.log("unmounted");
      // },
      // created: function (el) {
      //   console.log(11);
      //   // 聚焦元素
      //   el.focus();
      // },
      // beforeMount() {
      //   console.log("beforeMount");
      // },
      // mounted() {
      //   console.log("mounted");
      // },
      // beforeUpdate() {
      //   console.log("beforeUpdate");
      // },
      // updated() {
      //   console.log("updated");
      // },
      // beforeUnmount() {
      //   console.log("beforeUnmount");
      // },
      // unmounted() {
      //   console.log("unmounted");
      // },
    });
  },
};
