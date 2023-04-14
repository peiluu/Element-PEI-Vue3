<template>
  <h3>
    <h2>算法实践_20230414</h2>
    <ol>
      <li>
        给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
        <div>请你返回所有和为 0 且不重复的三元组。</div>
        <div>注意：答案中不可以包含重复的三元组。</div>
      </li>
    </ol>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  getData();
  threeSum([-1,0,1,2,-1,-4]);
});
/***
 * @param - 输入nums = [-1,0,1,2,-1,-4]
 * @returns [[-1,-1,2],[-1,0,1]]
 */
const getData = () => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (
          i !== j &&
          i !== k &&
          j !== k &&
          nums[i] + nums[j] + nums[k] === 0
        ) {
          const temArr = [nums[i], nums[j], nums[k]].sort();
          if (
            arr.findIndex(
              item => JSON.stringify(item) === JSON.stringify(temArr)
            ) < 0
          ) {
            arr.push(temArr);
          }
        }
        // 二维数组去重
        // const obj = {};
        // const result = [];
        // arr.forEach(item => {
        //   !obj[item] ? (obj[item] = item) : "";
        // });
        // for (let key in obj) {
        //   result.push(obj[key]);
        // }
        // console.log(obj)
        // console.log(result);
      }
    }
  }
  console.log(arr);
};

// 参考 答案 排序 + 双指针
const threeSum = function(nums) {
  let len = nums.length; // 定义数组长度
  let ans = []; // 定义结果数组
  // 1.如果数量小于 3，直接返回
  if (len < 3) {
    return [];
  }
  // 2.排序，从小到大
  nums.sort((a, b) => a - b);
  console.log(nums);
  // 3.如果排好序的第一个元素大于 0，或最后一个元素小于 0，直接返回
  if (nums[0] > 0 || nums[len - 1] < 0) {
    return [];
  }
  // 4.开始遍历寻找三个元素
  // 第一层 for 循环，找到第一个元素

  for (let i = 0; i < len; i++) {
    // 获取第一个元素
    let first = nums[i];
    // 制造一个 target，变为两数相加，因为  first+second+third=0; 所以 second+third=-fisrt
    let target = -first;
    // 对第一个元素去重，如果重复直接跳过本次循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        // 如果刚好满足 target，则 push结果集，并同时回缩 left 和 right
        ans.push([first, nums[left], nums[right]]);
        // 先进行 left 和 right 各自指针的改变
        left++;
        right--;
        // 再判断，避免 left 和 right 重复，如果重复，则跳至下一个
        while (nums[left] == nums[left - 1]) {
          left++;
        }
        while (nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (nums[left] + nums[right] < target) {
        // 如果小于 target，则还需要 left 继续变大才能满足
        left++;
      } else {
        // 如果大于 target，则需要减小 right
        right--;
      }
    }
  }
  console.log(ans);
  return ans;
};
</script>
