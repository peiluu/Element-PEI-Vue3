<template>
	<div>
		<h3>算法题目 - 2023030</h3>
		<ol>
			<li>数组中有一个数字出现的次数超过数组长度的一半, 请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
				由于数字2在数组中出现了5次,超过数组长度的一半, 因此输出2。如果不存在则输出0。</li>

			<li>输入一个正数N, 输出所有和为N的连续正数序列. 例如输入15, 结果: [[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]</li>

			<li>给定一个整数数组，其中第 i 个元素代表了第 i天的股票价格;非负整数 fee 代表了交易股票的手续费用，求返回获得利润的最大值
				输入: arr: [1, 12, 13, 9, 15, 8, 6, 16]; fee: 2 输出： 22</li>

			<li>输入一组列表如下，转化成树形结构</li>
		</ol>
		<card />
	</div>
</template>

<script>

export default {
	name: "algorithm",
	components: {},
	data() {
		return {
			obj: {
				get() { }
			}
		};
	},
	mounted() {
		// this.getResult1()
		// this.getResult2(15)
		this.getResult3()
	},
	methods: {
		// getResult1() {
		// 	const arr = [1,2,3,2,2,2,5, 4,2]
		// 	console.log(arr.length)
		// 	const targetLen = Math.floor(arr.length / 2)
		// 	let targetItem = ''
		// 	arr.forEach((item) => {
		// 		const number = arr.filter((itm) => itm === item).length
		// 		// console.log(number > targetLen ? item : 0)
		// 		if (number > targetLen) {
		// 			targetItem = item
		// 		}
		// 	})
		// 	targetItem = targetItem || 0
		// 	console.log(targetItem)
		// }
		getResult1() {
			const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]
			let out = 0;
			let obj = {};
			let length = arr.length / 2;
			arr.forEach(item => {
				debugger
				// 如果该数组项已经出现过，累加一个，不然计算为1
				!obj[item] ? obj[item] = 1 : obj[item]++
			});
			// console.log(obj) // {1: 1, 2: 5, 3: 1, 4: 1, 5: 1}
			for (let [key, value] of Object.entries(obj)) {
				if (value > length) {
					out = key;
				}
			}
			return out;
		},

		// 输入一个正数N, 输出所有和为N的连续正数序列. 例如输入15, 结果: [[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]
		getResult2(count) {
			// 创建一个从n开始，长度为len的数组
			const createdArr = (n, len) => {
				const temArr = []
				for (let i = n; i < n + len; i++) {
					temArr.push(i)
				}
				return temArr
			}
			// 计算得出平均数。向下取值
			let result = [];
			//取出中间值
			let middle = Math.ceil(count / 2);
			//从1开始累加
			for (let i = 1; i <= middle; i++) {
				//控制累加多少次
				for (let j = 2; j <= middle; j++) {
					// 循环得出所有的数组
					// const total = createdArr(i, j).reduce((pre, current) => pre + current)
					const temArr = new Array(j).fill(i + j)
					console.log(temArr)
					// 筛选符合条件的数组
					// if (total === count) {
					// 	result.push(createdArr(i, j))
					// }
					// let total = (i + (i + j - 1)) * (j / 2)
					// debugger
					// if (total > count) {
					// 	beak
					// } else if (total === count) {
					// result.push(createdArr(i, j))
					// }
				}
			}
			console.log(result)
			return result
		},
		// 输入一组列表如下，转化成树形结构
		getResult3() {
			const arr = [
				{ id: 1, title: "child1", parentId: 0 },
				{ id: 2, title: "child2", parentId: 0 },
				{ id: 3, title: "child1_1", parentId: 1 },
				{ id: 4, title: "child1_2", parentId: 1 },
				{ id: 5, title: "child2_1", parentId: 2 },
				{ id: 6, title: "child1_1", parentId: 4 },
				{ id: 7, title: "child1_2", parentId: 5 },
				{ id: 8, title: "child2_1", parentId: 4 }
			]
			let map = {}
			let treeData = arr.filter((item) => !item.parentId)
			// 获取数组项的子元素
			const getChildren = (targetArr) => {
				targetArr.forEach((item) => {
					item.children = arr.filter((itm) => item.id === itm.parentId)
					if (item.children) {
						getChildren(item.children)
					}
				})
			}
			getChildren(treeData)
		}
	},


};
</script>

<style lang="scss"></style>
