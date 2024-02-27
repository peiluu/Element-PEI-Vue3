<template>
  <div class="page-defineproperty">
    <h4>Vue 数据代理</h4>
    <h5>{{ person }}</h5>
    <button @click="add">添加响应式数据</button>
    <h5>{{ hobby }}</h5>
    <h5> <button @click="changeArr">改变数组</button></h5>
    <h5>{{ friends }}</h5>
    <h5> <button @click="changeObjArr">改变对象数组</button></h5>
    <h5> <button @click="handleClick">触发事件</button></h5>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  name: 'observer',
  components: {},
  data() {
    return {
      form: {},
      listData: {},
      person: {
        name: '张三',
        age: 18,
      },
      hobby: ['语文', '数学', '英语'],
      friends: [{
        name: 'Jack',
        age: 20
      }]
    }
  },
  beforeMount() { },
  mounted() { },

  methods: {
    add() {
      // Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.
      // 无法在vue实例或者根数据对象上直接添加属性
      // $set(this, 'name', '张三')
      // $set(this.person, 'name', '李四')
    },
    changeArr() {
      // Vue里面无法检测到直接通过索引值改变的数组。因为数组里的每一个元素不是通过set 和get来实现监视了
      // 实际上数组是已经变化了
      this.hobby[3] = "物理"
      console.log(this)
      /**
       * Vue将被侦听的数组的变更方法(改变原数组)进行了包裹，所以他们也将会触发视图更新(push)
       * 1. 调用原始的push方法
       * 2. 重新解析模板，生成虚拟DOM，触发视图更新
       */

      this.hobby.push('化学')
      // 改变索引值为3的数组项
      this.$set(this.hobby, 3, '打台球')

      /**
       * 当使用非变更方法时，可以将处理后的数据重新赋值（filter）
      */
      this.hobby = this.hobby.filter((item) => item !== '学习')
    },

    changeObjArr() {
      // 对象数组里的每一个元素不是通过set 和get来实现监视了，但是对象中的属性有get和set方法
      // 不能根据索引值直接赋值，但是可以改变元素对象的属性
      // this.friends[0].age = 10
      this.friends[1] = {
        name: 'Mary',
        age: 20
      }
    },

    handleClick() {
      let data = {
        name: '张三',
        age: 18
      }
      // 创建一个监视的实例对象，用于监视data中属性的变化
      let obj = new Observer(data)

      console.log(obj)
      console.log(this)

      // 准备一个vm实例对象
      let vm = {}
      vm._data = data = obj

      function Observer(obj) {
        // 汇总对象中所有的属性形成一个数组
        const keys = Object.keys(obj)

        keys.forEach((k) => {
          Object.defineProperty(this, k, {
            get() {
              return obj[k]
            },
            set(val) {
              obj[k] = val
            }
          })
        })

      }

    }
  }
};
</script>

<style lang="scss">
.page-defineproperty {
  div {
    margin-bottom: 16px;
  }
}
</style>
