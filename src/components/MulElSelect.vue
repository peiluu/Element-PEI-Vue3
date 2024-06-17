<template>
	<el-select
		popper-class="my-mul-select"
		:value="values"
		placeholder="请选择"
		multiple
		@change="selectChange"
		:loading="loading"
		:collapse-tags="values.length > 50"
		:popper-append-to-body="false"
	>
		<li class="filter-input">
			<el-input v-model="fliterTxt" placeholder="请输入关键字" />
		</li>
		<li v-show="options.length" @click="handleSelectAll" class="el-select-dropdown__item my-select-dropdown__item" :class="{ selected: selectAll }">
			<span>全部</span>
		</li>
		<template v-for="item in options">
			<el-option
				v-show="!fliterTxt || item[propsInfo.lableKey].indexOf(fliterTxt) !== -1"
				:key="item[propsInfo.valueKey]"
				:label="getLabel(item)"
				:value="item[propsInfo.valueKey]"
			></el-option>
		</template>
	</el-select>
</template>
<script>
export default {
	name: 'MulElSelect',
	model: {
		prop: 'values',
		event: 'change'
	},
	props: {
		values: {
			type: Array,
			default: () => []
		},
		options: {
			type: Array,
			default: () => []
		},
		propsInfo: {
			type: Object,
			default: () => ({
				lableKey: 'label',
				valueKey: 'value'
			})
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			selectAll: false,
			fliterTxt: ''
		}
	},
	methods: {
		getLabel(item) {
			const { lableAddKey = '', lableKey } = this.propsInfo
			let l = item[lableKey]
			if (lableAddKey) {
				l += ` ${item[lableAddKey]}`
			}
			return l
		},
		handleSelectAll() {
			const { selectAll } = this
			let opts = []
			if (!selectAll) {
				this.options.forEach(item => opts.push(item[this.propsInfo.valueKey]))
			}
			this.$emit('change', opts)
			this.selectAll = !selectAll
		},
		selectChange(value) {
			this.selectAll = this.options.length === value.length
			this.$emit('change', value)
		}
	}
}
</script>
<style lang="scss">
.my-mul-select {
	.el-select-dropdown__list {
		padding-top: 32px !important;
	}
	.filter-input {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		padding: 4px;
		background-color: #fff;
	}
	.my-select-dropdown__item:hover {
		background-color: #f5f7fa !important;
	}
}
</style>
<style scoped lang="scss">
/deep/ .el-select__tags {
	height: 26px;
	overflow: hidden;
	overflow-y: auto;
}
</style>
