<template>
	<div>
		<h3>算法题目 - 20230321</h3>
		<ol>
			<li>有一个数组arr = [a1, a2, a3, b1, b2, b3, c1, c2, c3…], 通过算法将数组进行拆分, 转化为如下格式的数组[a1, b1, c1], [a2, b2, c2], [a3, b3, c3]并实现通用公式.

			</li>
			<li>找出数字数组中出现多次的数字，比如[1,2,2,3,4,5,4] => [2,4]</li>

			<li> 已知圆的半径为1, 用javascript算法, 实现每次都返回不同的坐标值, 且坐标值都在圆内.</li>
		</ol>
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
		// this.getResult2()
		// this.getResult()
		this.getResult4()
	},
	methods: {
		getResult1() {
			const arr = ['a11', 'a2', 'a3', 'b1', 'b2', 'b3', 'c4', 'c2', 'c1', 'c12', 'd100']
			const targetArr = []
			const newArr = arr.sort((a, b) => /\d*$/.exec(b)[0] - /\d*$/.exec(a)[0])
			const max = /\d*$/.exec(newArr[0])[0]
			console.log(max)
			for (let i = 0; i <= max; i++) {
				const temArr = arr.filter(item => /\d*$/.exec(item)[0] == i)
				if (temArr.length > 0) {
					targetArr.push(temArr)
				}
			}
			console.log(targetArr)
		},
		getResult2() {
			/**  * arr 待排序数组  * result 计算的结果数组  */
			const arr = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
			const result = []
			arr.forEach(item => {
				// exec()函数用于检索字符串中正则表达式的匹配, 如果有匹配的值则返回该函数的值，如果没有则返回null
				console.log(/\d*$/.exec(item))
				let i = /\d*$/.exec(item)[0]
				result[i] ? result[i].push(item) : (result[i] = [item])
			})
			console.log(result.filter(Boolean))
			return result.filter(Boolean)
		},

		// 找出数字数组中出现多次的数字，比如[1,2,2,3,4,5,4，2] => [2,4]
		getResult3() {
			const map = {}
			const arr = [1, 2, 2, 3, 4, 5, 4, 2]
			// arr.forEach((item) => {
			// 	map[item] ? map[item]++ : (map[item] = 1)
			// })
			const temArr = arr.filter((item) => {
				// 在循环中逐步添加数据，当第一次循环到2的时候，map[item]的值不会返回,但是当重复的次数大于2的时候
				// 无法满足，还是需要去重处理
				map[item] ? map[item]++ : (map[item] = 1)

				return map[item] > 1
			})
			// 利用new Set去重
			const result = [...new Set(temArr)]
			const result1 = []
			console.log(map) // 	{1: 2, 2: 4, 3: 2, 4: 4, 5: 2}
			// 利用对象的key...in 方法去重
			for (let key in map) {
				if (map[key] > 1) {
					result1.push(key)
				}
			}
			console.log(result)
			console.log(result1)
		},
		// 找出数字数组中出现多次的数字，比如[1,2,2,3,4,5,4，2] => [2,4]
		getResult4() {
			const result = []
			const map = {}
			const arr = [1, 2, 2, 3, 4, 5, 4, 2]
			// 先得出数组项和出现次数的对应关系 -- map结构数据
			arr.forEach((item) => {
				map[item] ? map[item]++ : (map[item] = 1)
			})
			// 再筛选出map中value值大于1的key,得出最后的结果
			for (let key in map) {
				if (map[key] > 1) {
					result.push(key)
				}
			}
			console.log(result)
		}
	},


};
</script>

<style lang="scss"></style>
