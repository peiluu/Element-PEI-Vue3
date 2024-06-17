<template>
	<el-table
		:row-key="rowKey"
		ref="table"
		:data="data"
		:height="height"
		border
		stripe
		:header-cell-class-name="headerCellClassName"
		:tooltip-effect="tooltipEffect"
		:tree-props="treeProps"
    :header-cell-style="{ fontWeight: 400, borderTop: '1px solid #adb4bc', background: '#f7f9fd', color: '#333333', padding: '7px 0' }"
		@row-click="rowClick"
		@selection-change="selectionChange"
		@select="select"
		@select-all="selectAll"
		v-loading="loading"
	>
		<template v-for="(column, columnIndex) in columns">
			<template v-if="!column.hidden">
			<el-table-column
				v-if="column.slot"
				:key="columnIndex"
				:prop="column.dataIndex"
				:label="column.title"
				:fixed="column.fixed"
				:sortable="column.sortable"
				:align="column.align"
				:min-width="column.width"
				:show-overflow-tooltip="column.showTooltip"
			>
				<template slot="header">
					<span>{{ column.title }}</span>
					<!-- 显示表头hover提示 -->
					<el-tooltip v-if="column.tooltip" effect="light" :content="column.tooltip" placement="top">
						<i class="el-icon-question"></i>
					</el-tooltip>
				</template>
				<template slot-scope="scope">
					<slot :name="column.slot" :data="scope.row" :index="scope.$index">{{ scope.row[column.dataIndex] }}</slot>
				</template>
			</el-table-column>
			<!-- 格式化金额, 带有formatMoney参数， 默认靠右-->
			<el-table-column
				v-else-if="column.formatMoney"
				:key="columnIndex"
				:formatter="moneyFmt"
				:prop="column.dataIndex"
				:label="column.title"
				:fixed="column.fixed"
				:sortable="column.sortable"
				:align="column.align || 'right'"
				:min-width="column.width"
				:show-overflow-tooltip="column.showTooltip"
			/>

			<el-table-column
				v-else-if="column.dataIndex"
				:key="columnIndex"
				:prop="column.dataIndex"
				:label="column.title"
				:sortable="column.sortable"
				:align="column.align"
				:formatter="column.format"
				:min-width="column.width"
				:show-overflow-tooltip="column.showTooltip"
			>
				<template slot="header">
					<span>{{ column.title }}</span>
					<!-- 显示表头hover提示 -->
					<el-tooltip v-if="column.tooltip" effect="light" :content="column.tooltip" placement="top">
						<i class="el-icon-question"></i>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column
				v-else-if="column.type == 'selection' || column.type == 'index'"
				:selectable="column.selectable"
				:key="columnIndex"
				:type="column.type"
				:label="column.title"
				:sortable="column.sortable"
				:align="column.align"
				:min-width="column.width"
				:reserve-selection="true"
				:fixed="column.fixed"
			>
			</el-table-column>
			<!-- <el-table-column v-else-if="column.type == 'radio'" :key="columnIndex" :align="column.align" :min-width="column.width">
					<template slot-scope="scope">
						<vxe-radio-group v-model="radioValue" @change="radioChange(scope.row)">
							<vxe-radio :label="scope.row.id"></vxe-radio>
						</vxe-radio-group>
					</template>
				</el-table-column> -->
			<el-table-column v-else :key="columnIndex" type="index" :label="column.title" :sortable="column.sortable" :align="column.align" :fixed="column.fixed" :width="column.width">
				<template slot="header">
					<span>{{ column.title }}</span>
					<!-- 显示表头hover提示 -->
					<el-tooltip v-if="column.tooltip" effect="light" :content="column.tooltip" placement="top">
						<i class="el-icon-question"></i>
					</el-tooltip>
				</template>
				<template v-if="column.key == 'action'" slot-scope="scope">
					<slot name="myscope" :data="scope.row">{{ scope.row[column.dataIndex] }}</slot>
				</template>
			</el-table-column>
			</template>
		</template>

		<template #empty>
			<span>
				<img src="@/assets/no-data.png" style="width: 80px;height: 80px;" />
				<p>未搜索到数据</p>
			</span>
		</template>
	</el-table>
</template>
<script>
export default {
	name: 'AddTaxLedgerTableColumn',
	props: {
		rowKey: {
			type: String,
			default: 'id'
		},
		headerCellClassName: {
			type: String,
			default:''
		},
		border: {
			type: Boolean,
			default: true
		},
		stripe: {
			type: Boolean,
			default: true
		},
		data: {
			type: Array,
			default: () => []
		},
		height: {
			type: [Number, String],
			default: 230
		},
		tooltipEffect: {
			type: String,
			default: 'dark'
		},
		treeProps: {
			type: Object,
			default: () => ({ hasChildren: 'hasChildren', children: 'children' })
		},
		columns: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			loading: false
		}
	},
	methods: {
		callback(filed, ...args) {
			let data = null
			if (this.$listeners[filed] && typeof this.$listeners[filed] === 'function') {
				data = this.$listeners[filed](...args) || null
			}
			return data
		},
		// 当某一行被点击时会触发该事件
		rowClick(...args) {
			this.callback('row-click', ...args)
		},
		// 当用户手动勾选数据行的 Checkbox 时触发的事件
		select(...args) {
			this.callback('select', ...args)
		},
		// 当用户手动勾选全选 Checkbox 时触发的事件
		selectAll(...args) {
			this.callback('select-all', ...args)
		},
		// 当选择项发生变化时会触发该事件
		selectionChange(...args) {
			this.callback('selection-change', ...args)
		},
		doLayoutTable() {
			// this.loading = true // 勿删，否则自定义列切换是表格会闪动
			this.$nextTick(() => {
				// this.loading = false
				this.$refs.table.doLayout()
			})
		}
	}
}
</script>
<style lang="scss" scoped>
/deep/ .table-header-cell {
	font-weight: 400;
	border-top: 1px solid #adb4bc;
	background: #f7f9fd;
	color: #333333;
	padding: 7px 0;
}
</style>
