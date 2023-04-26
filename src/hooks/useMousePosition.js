import { ref, onMounted, onUnmounted } from "vue";

export const useMousePosition = () => {
  const x = ref(0);
  const y = ref(0);
  // 模拟普通公共函数中的数据
  let copyX = 0;
  const updateMouse = (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
    copyX = e.pageX;
    console.log(copyX); // 在此处copyX值会跟着x的值变化
  };

  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });

  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });

  return { x, y, copyX };
};

export default useMousePosition;
