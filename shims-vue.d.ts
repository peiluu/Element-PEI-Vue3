//declare声明宣告， 声明一个ambient module(即:没有内部实现的 module声明)
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

// 声明你包不能找到声明的包名
declare module 'element-pei-vue3'

