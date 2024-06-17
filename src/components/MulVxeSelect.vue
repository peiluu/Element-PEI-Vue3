<template>
  <div class="com-mut-vxe-select">
    <vxe-select filterable size="small" :value="modelValue" placeholder="请选择" :options="selectList" multiple clearable transfer @clear="toggleSelectAll(false)" :filter-method="mutFilterValue">
      <template #checkAll="{ option }">
        <el-checkbox v-model="checkedAll" @change="toggleSelectAll($event)">全选</el-checkbox>
      </template>
      <template #checkbox="{ option }">
        <span style="color: green">
          <el-checkbox @change="toggleSelect($event, option)" v-model="option.checked">{{ option.label }}</el-checkbox>
        </span>
      </template>
    </vxe-select>
  </div>
</template>
<script>

export default {
  name: 'MulVxeSelect',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      default: () => [],
      type: Array,
    },
    options: {
      default: () => [],
      type: Array,
    },
    propsInfo: {
      type: Object,
      default: () => ({
        lableKey: 'label',
        valueKey: 'value',
        splicing: true
      })
    },

  },
  data() {
    return {
      selectList: [],
      selectFilterValue: '',
      MulVxeSelectVal: [],
      checkedAll: false,
    };
  },
  watch: {
    modelValue: {
      handler(val) {
        if (val) {
          this.MulVxeSelectVal = [...val]
          this.intiForm();
        }
      },
    },
    options: {
      handler(val) {
        this.selectList = [{ value: 'all', label: '全选', slots: { default: 'checkAll' } }].concat(val.map((item) => {
          return {
            value: item[this.propsInfo.valueKey],
            label: this.propsInfo.splicing ? `${item[this.propsInfo.lableKey]} ${item[this.propsInfo.valueKey]}` : `${item[this.propsInfo.lableKey]}`,
            slots: { default: 'checkbox' }
          }
        }))
      },

    },
  },
  methods: {
    mutFilterValue({ searchValue, option, group }) {
      this.selectFilterValue = searchValue
      if (option.label.toUpperCase().indexOf(searchValue.toUpperCase()) > -1 || option.slots.default == 'checkAll') {
        return true
      } else {
        return false
      }
    },
    toggleSelectAll(value) {
      if (!value) {
        this.MulVxeSelectVal = [];
        this.checkedAll = false;
        for (var i = 0; i < this.selectList.length; i++) {
          this.selectList[i].checked = false;
        }
      } else {
        this.MulVxeSelectVal = this.selectList.filter((item => item?.slots?.default != 'checkAll' && item.label.toUpperCase().indexOf(this.selectFilterValue.toUpperCase()) > -1)).map((item) => item.value)
        for (var j = 0; j < this.selectList.length; j++) {
          // 输入检索条件时，全选只选筛选后的
          if (this.selectFilterValue != '') {
            if (this.selectList[j].label.toUpperCase().indexOf(this.selectFilterValue.toUpperCase()) > -1) {
              this.selectList[j].checked = true;
            }
          } else {
            this.selectList[j].checked = true;
          }
        }
        this.MulVxeSelectVal = this.selectList.filter((item => item?.slots?.default != 'checkAll' && item.label.toUpperCase().indexOf(this.selectFilterValue.toUpperCase()) > - 1)).map((item) => item.value)
      }
      this.$emit('change', this.MulVxeSelectVal)
      this.$emit("mulVxeSelectChange", this.MulVxeSelectVal);

    },
    toggleSelect(value, item) {
      item.checked = value
      if (item.checked) {
        this.MulVxeSelectVal.push(item.value);
        // 全选
        if (this.selectList.every((subItem, subIndex) => subItem.checked && subIndex !== 0)) {
          this.checkedAll = true
        }
      } else {
        var index = this.MulVxeSelectVal.indexOf(item.value);
        if (index >= 0) {
          this.checkedAll = false
          this.MulVxeSelectVal.splice(index, 1)
        }
      }
      this.$emit('change', this.MulVxeSelectVal)
      this.$emit("mulVxeSelectChange", this.MulVxeSelectVal);
    },

    intiForm() {
      for (var i = 0; i < this.selectList.length; i++) {
        this.selectList[i].checked = this.modelValue.includes(this.selectList[i].value)
      }
    },
    reset() {
      this.checkedAll = false
    },
  },
};
</script>
<style lang="scss">
.vxe-select--panel {
  z-index: 99999 !important;

}
</style>
