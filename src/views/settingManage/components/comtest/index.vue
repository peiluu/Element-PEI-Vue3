<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>vue3子组件 - {{ props.msg }}</div>

</template>

<script setup>
import { defineComponent, reactive, defineProps , onMounted, ref } from 'vue';
// export default defineComponent({
// setup() {
// ref定义基本数据类型
const message = ref('提示消息');
const dataMap = reactive({
	fullscreenLoading: true,
	text: 1,
	fetchData: () => {
		setTimeout(() => {
			dataMap.fullscreenLoading = false;
		}, 2000);

		setTimeout(() => {

		}, 2600);
	},
});
const fun = () => {
	console.log('调用fun, 输出' + message.value);
};

const props = defineProps({
  msg: {
    type: String,
    default:''
  },
})
onMounted(() => {
	console.log(props);
	
});

</script>
