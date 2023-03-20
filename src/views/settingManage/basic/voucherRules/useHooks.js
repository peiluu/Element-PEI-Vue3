// 导入组合式API（Composition API）
import { ref, onMounted, onUnmounted, reactive } from "vue";

/**
 * @despition Vue 自定义hook - 本质是一个函数，把setup函数中使用的（数据方法、钩子）进行了封装
 * 类似于vue2.x中的mixin，但是自己自定义导出的数据和方法，更加灵活，
 * 自定义hook的优势: 复用代码,让setup中的逻辑更清楚易懂
 * 对比工具函数和外部常量：更加灵活，且得到的数据是响应式的，工具类函数是不带有状态的
 */
export const useMousePosition = () => {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  const sum = () => {
    console.log(1)
  }
  const textMap = reactive({
    update: "编辑凭证规则",
    create: "新增凭证规则",
    detail: "凭证规则详情",
  });

  const rules = reactive({
    abstracts: [
      {
        required: true,
        message: "请输入摘要",
        trigger: "blur",
      },
      {
        min: 1,
        max: 100,
        message: "长度在 1 到 20 个字符",
        trigger: "blur",
      },
    ],
    subjectName: [
      {
        required: true,
        message: "请选择科目",
        trigger: "blur",
      },
    ],
    dcdirection: [
      {
        required: true,
        message: "请选择借贷方向",
        trigger: "blur",
      },
    ],
  });
  onMounted(() => {
    console.log('onMounted')
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    console.log('onUnmounted')
    window.removeEventListener("mousemove", update);
  });

  return { x, y, textMap, rules, sum };
};
