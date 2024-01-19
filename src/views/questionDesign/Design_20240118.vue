<template>
  <div class="main-content">
    <div class="content-title">改造下面的代码，使之输出0 - 9，写出你能想到的所有解法</div>
    <code>
      <pre>
        for (var i = 0; i< 10; i++){
          setTimeout(() => {
            console.log(i);
            }, 1000)
        }
      </pre>
    </code>
  </div>
</template>

<script setup>
import { onMounted } from "vue";


onMounted(() => {
  // getResult1();
  getResult2();
});

// 转换参数
const getResult1 = () => {
  for (var i = 0; i < 10; i++) {
    const j = i
    setTimeout(() => {
      console.log(j);
    }, 1000)
  }
};
// 自执行函数
const getResult2 = () => {
  for (var i = 0; i < 10; i++) {
    (function fun5(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000)
    })(i);
  }
};

</script>

