<template>
 <div class="main-content">
  1
 </div>

</template>

<script setup>
import { onMounted, reactive } from "vue";

// 缓存已经出现过的坐标
const cacheList = reactive([]);
const coordinate = reactive({});

onMounted(() => {});
/***
 * @param radius 半径, 输入 1
 * @returns 随机坐标
 */
const getData = () => {
  // 假设圆心的坐标是（0,0）
  const radius = { x: 0, y: 0 };
  // 随机数范围
  const randomRange = [-1, 1];
  // const x = mat;
  const random = () => randomRange[+(Math.random() > 0.5)] * Math.random();
  const generate = () => {
    const x = random();
    const y = random();
    // 满足勾股定理和不重复原则
    if (Math.pow(x, 2) + Math.pow(y, 2) <= 1 && !cacheList[`${x}${y}`]) {
      coordinate.x = x;
      coordinate.y = y;
      cacheList.push([x, y]);
      return;
    }
    // 不满足条件，递归调用
    generate();
  };
  generate();
};

// 参考答案
const generateRandomPos = () => {
  const cache = {};
  const boundRect = [-1, 1];
  // 生成在-1到1的随机值
  // + 操作符能将boolean类型转化为数字类型
  // + true = 1, + false = 0 , [+(Math.random() > 0.5)] 生成0或1的等比率随机数
  // boundRect[+(Math.random() > 0.5)] 就能得到-1或者1的等比率随机数
  const random = () => boundRect[+(Math.random() > 0.5)] * Math.random();
  return generate();

  function generate() {
    // 生成x,y坐标
    let x = random(),
      y = random();

    // 根据勾股定理,xy的平方和应小于等于1(圆形坐标关系),并且之前没有生成同样的坐标
    if (Math.pow(x, 2) + Math.pow(y, 2) <= 1 && !cache[`${x}${y}`]) {
      // console.log([`${x}${y}`]);
      return (cache[`${x}${y}`] = [x, y]);
    } else {
      return generate();
    }
  }
};
</script>
