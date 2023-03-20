<template>
  <el-card class="c-myfocus">
    <template #header>
      <div class="content-header">
        <span>我的关注</span>
        <div>
          <el-button v-if="isEditFocus" link type="primary" @click="cancelEdit">取消</el-button>
          <el-button type="primary" link @click="editFocus">
            {{
            isEditFocus ? '保存' : '编辑'
            }}
          </el-button>
        </div>
      </div>
    </template>

    <div :class="['list', [isEditFocus ? 'list-edit' : '']]">
      <el-card class="item item-card" v-for="item in temQylist" :key="item.id">
        <div @click="onDelete(item.id)" v-if="isEditFocus" class="item-add">
          <el-icon size="24">
            <DeleteFilled />
          </el-icon>
        </div>
        <h4>{{ item.name }}</h4>
      </el-card>
      <el-card class="item item-add" v-if="temQylist.length < 4 && isEditFocus">
        <el-icon @click="showDialog" size="40">
          <Plus />
        </el-icon>
      </el-card>
    </div>

    <!-- 弹窗穿梭框 -->
    <el-dialog title="关注设置" v-model="dialogFormVisible">
      <div style="text-align: center">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value"
          :render-content="renderFunc"
          :titles="['源列表', '目标列表']"
          :button-texts="['加入左侧', '加入右侧']"
          :format="{
						noChecked: '${total}',
						hasChecked: '${checked}/${total}',
					}"
          @change="handleChange"
          :data="dataList"
        ></el-transfer>
      </div>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="cancel">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>

<script>
/**
 * @description 我的关注
 */
export default {
  name: "LgtMyFocus",
  components: {},
  data() {
    return {
      isEditFocus: false, // 编辑我的关注
      dialogFormVisible: false,
      value: [],
      // 临时副本 - 列表
      temQylist: [],
      qylist: [
        {
          id: 1,
          name: "凭证管理"
        },
        {
          id: 2,
          name: "申报管理"
        },
        {
          id: 3,
          name: "科目余额表"
        }
      ],
      dataList: [
        {
          key: 1,
          label: `凭证管理`
          // disabled:
        },
        {
          key: 2,
          label: `申报管理`
          // disabled:
        },
        {
          key: 3,
          label: `科目余额表`
          // disabled:
        },
        {
          key: 4,
          label: `科目余额表1`
          // disabled:
        },
        {
          key: 5,
          label: `科目余额表2`
          // disabled:
        }
      ]
    };
  },
  created() {},
  watch: {},
  mounted() {
    // 初始化数据
    this.value = this.temQylist.map(item => item.id);
    this.temQylist = [...this.qylist];
  },
  methods: {
    editFocus() {
      console.log(this.qylist);
      // 保存
      if (this.editFocus) {
        // 调用接口
      }
      this.isEditFocus = !this.isEditFocus;
    },
    cancelEdit() {
      this.temQylist = [...this.qylist];
      this.isEditFocus = false;
    },

    getData(date) {},
    onDelete(id) {
      this.temQylist = this.temQylist.filter(item => item.id !== id);
    },
    addFocus() {},
    // 调用接口保存数据
    submit() {
      if (this.value.length > 4) {
        this.$message({
          message: "最多只能添加4个！",
          type: "warning"
        });
        return;
      }
      this.dialogFormVisible = false;
      console.log(this.value);
      this.temQylist = this.value.map(item => {
        return {
          id: item,
          name: this.dataList.find(itx => itx.key === item).label
        };

      });
    },
    showDialog() {
      console.log(1);
      this.dialogFormVisible = true;
    },

    // 取消保存，不改变原始数据
    cancel() {
      this.dialogFormVisible = false;
      this.value = this.qylist.map(item => item.id);
    },
    handleChange() {},
    renderFunc(h, option) {
      return <span>{option.label}</span>;
    }
  }
};
</script>

<style lang="scss" scoped>
.c-myfocus {
  width: 100%;

  .content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list {
    display: flex;

    .item {
      flex-basis: 25%;
      text-align: center;
      justify-content: center;

      &:not(:last-child) {
        margin-right: 32px;
      }

      &:nth-child(1) /deep/ .el-card__body {
        border-bottom: 6px solid #02a7f0;
      }

      &:nth-child(2) /deep/ .el-card__body {
        border-bottom: 6px solid #70b603;
      }

      &:nth-child(3) /deep/ .el-card__body {
        border-bottom: 6px solid #ffff00;
      }

      &:nth-child(4) /deep/ .el-card__body {
        border-bottom: 6px solid #d9001b;
      }
    }

    .item-add {
      /deep/ .el-card__body {
        border-bottom: none !important;
      }
    }

    // 编辑状态
    &.list-edit {
      .item {
        background: #f2f2f2;
        color: #ccc;

        /deep/ .el-card__body {
          position: relative;
        }
        &.item-card {
          .el-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 38px;
            color: #d9001b;
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
