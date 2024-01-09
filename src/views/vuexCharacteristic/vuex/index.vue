<template>
  <div class="main-content">
    <div class="content-title">Vuex</div>

    <div class="line">
      <h5>num：{{ num }}</h5>
      <el-button size="small" @click="sub({ num: 1 })">sub1</el-button>
      <el-button size="small" @click="computed({ num: 1 })">computed</el-button>
    </div>
    <h5>computedNum：{{ computedNum }}</h5>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// mapState映射，自动生成代码，解析
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
// import { getSocial, getSocial1 } from '@/utils/request';
export default {
  name: 'vuex',
  components: {},
  data() {
    return {
      tipMsg: '',
    };
  },
  beforeMount() { },
  mounted() {
    // this.getSocial();
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据，对象写法
    // ...mapState({ msg: 'message', num: 'num', width: 'app.width' }),
    // 借助mapState生成计算属性，从state中读取数据，数组写法，针对同名属性
    ...mapState(['message', 'num']),

    // 调用app模块中的state，第一个参数指定
    ...mapState('app', ['width']),
    // ...mapState({ appwith: 'app/ vwidth' }),

    // 借助mapGetters生成计算属性，从getter中读取数据，对象写法
    ...mapState('app', { apps: 'apps' }),
    // 借助mapGetters生成计算属性，从getter中读取数据，数组写法，针对同名属性
    ...mapGetters(['id']),
    number() {
      return this.$store.state.num;
    },
    computedNum() {
      return this.$store.getters.computedNum
    },
  },

  methods: {
    /**
     * @desption mapActions与mapMutations使用时，若需要传递参数需要: 在模板中绑定事件时传递参数，否则参数是事件对象。
     */
    // sub({num}) {
    // 	this.$store.commit('sub', { num });
    // },
    // 借助mapMutations生成方法，方法中会调用commit去联系mutations，对象写法
    ...mapMutations({ sub: 'sub' }),
    // 借助mapMutations生成方法，方法中会调用commit去联系mutations，数组写法
    ...mapMutations(['sub']),
    ...mapMutations(['sub']),


    // 借助mapActions生成方法，方法中会调用dispatch去联系actions，对象写法
    ...mapActions({ add: 'add' }),
    // 借助mapActions生成方法，方法中会调用dispatch去联系actions，数组写法
    ...mapActions(['add']),
    ...mapActions('app', ['updateApps']),
    computed({ num }) {
      this.$store.dispatch('vuexTestComputed', { computedNum: num });
    },
    async getSocial() {
      // 在此函数中调用异步请求，因此此函数将永远无法同步返回此异步请求的结果，还需要经过一层异步处理
      // const axios =  getSocial(); 返回的是promise
      //  返回的是data
      // const axios = await getSocial();
      // const service = await getSocial1();
      // console.log('service', service);
      // console.log('axios', axios);
      // this.tipMsg = axios.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content{
  .line {
    display: flex;

    h4 {
      margin-right: 12px;
    }
  }
}
</style>
