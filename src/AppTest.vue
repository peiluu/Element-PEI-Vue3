<template>
ffffffffff
</template>


<script>
import { ElConfigProvider } from "element-plus";//！！！！！！
import { defineComponent } from 'vue'

import zhCn from "element-plus/lib/locale/lang/zh-cn"

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  },
})

</script>
