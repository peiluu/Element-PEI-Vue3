import demo from "./demo/src/Index.vue";
import card from "./card/src/Index.vue";
import QuarterDatePicker from "./quarterDatePicker/src/Index.vue";
const components = [demo, card, QuarterDatePicker];

const install = (Vue) => {
  // 避免重复注册
  if (install.installed) return;

  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};

const API = {
  install,
};
export default API;
