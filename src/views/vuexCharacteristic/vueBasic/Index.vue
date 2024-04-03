<template>
  <div class="main-content">
    <div>firstName: {{ firstName }}</div>
    <div>lastName: {{ lastName }}</div>
    <div>fullName: {{ fullName }}</div>
    <el-button @click="change">改变computed</el-button>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError === false, }">11</div>
    <div :class="[{ active: isActive }, errorClass]">2222222</div>
    <div :class="[isActive ? activeClass : '', errorClass]">33</div>

    <Com name="1" />
    <!-- 果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。 -->
    <div v-memo="[memolist]">
      <span>This will never change: {{ msg }}</span>
      <el-button @click="changeMsg">改变msg不会重新刷新dom</el-button>
    </div>
    <!--  v-once仅渲染元素和组件一次，并跳过之后的更新。 -->
    <span v-once>This will never change: {{ msg }}</span>
    <el-button @click="changeMsg">改变msg不会重新刷新dom</el-button>
    <Transition>
      <div v-if="ok">toggled content</div>
    </Transition>
    <el-button @click="ok = !ok">toggled content</el-button>

    <component :is="view" />
    <component :is="refInput" />
    <div class="red">css v-bind </div>
    <p :class="$style.red">This should be red</p>
    <!-- <QuarterDatePicker /> -->


  </div>
</template>

<script>
import Com from './Com.vue';
export default {
  name: 'VueBasics',
  components: {
    Com,
  },

  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
      hasError: false,
      errorClass: 'errorClass1',
      activeClass: 'activeClass1',
      selected: '',
      msg: '初始值 ',
      memolist: [],
      ok: true,
      view: Com,
      red: 'red'
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
    },
    refInput() {
      // return this.$ref('input')
    }
  },
  mounted() {
    console.log(this.$attrs)

  },

  methods: {
    change() {
      this.fullName = '111, 222'
    },
    changeMsg() {
      this.msg = '111, 222'
    },
  },
};
</script>
<!-- 使用 scoped 后，父组件的样式将不会渗透到子组件中。不过，子组件的根节点会同时被父组件的作用域样式和子组件的作用域样式影响 -->
<style scoped>
.red {
  color: v-bind(red)
}

.com-card {
  border: 1px solid #ccc;
}
</style>

<style module>
.red {
  color: red;
}
</style>
