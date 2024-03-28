<template>
  <el-card class="com-card">
    <div class="red"> TEST COM 子组件 </div>
    <div class=""> TEST COM 子组件 </div>


  </el-card>
</template>

<script>
export default {
  name: 'VueBasics',
  components: {
  },
  // inheritAttrs: false,
  // props: {
  //   name: String
  // },

  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
      hasError: false,
      errorClass: 'errorClass1',
      activeClass: 'activeClass1',
      selected: ''

    };
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      // 从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。
      // 更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改
      // 应该更新它所依赖的源状态以触发新的计算。
      set(newValue) {
        console.log(newValue)
        // 注意：我们这里使用的是解构赋值语法
        this.firstName = newValue.split(',')[0]
        this.lastName = newValue.split(',')[1]
      }
    }
  },
  mounted() {

  },

  methods: {
    change() {
      this.fullName = '111, 222'
    }
  },
};
</script>
<style scoped>
.com-card {
  background: #fffff0;
}
</style>
