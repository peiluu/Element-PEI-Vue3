<template>
  <div class="p-entry-voucher">
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-width="100px"
      inline
      :disabled="isDetail"
    >
      <h2>记账凭证</h2>
      <div class="form-header">
        <el-form-item label="凭证记" prop="mark">
          <div class="formitem">
            <span>记</span>
            <el-input
              :width="100"
              type="number"
              v-model="form.mark"
              :min="1"
              :disabled="updateStatus == 'update'"
            />
            <span>号</span>
          </div>
        </el-form-item>
        <el-form-item label="业务场景" prop="sceneId">
          <el-select
            v-model="form.sceneId"
            filterable
            placeholder="请选择业务场景"
          >
            <el-option
              v-for="item in metierSceneList"
              :key="item?.id"
              :label="item?.sceneName"
              :value="item?.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- <el-form-item prop="quarter">
        <el-select v-model="form.quarter" disabled>
          <el-option
            v-for="item in quarterlyList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          />
        </el-select>
      </el-form-item> -->
        <el-form-item label="日期" prop="accountingTime">
          <el-date-picker
            v-model="form.accountingTime"
            value-format="YYYY-MM-DD"
            placeholder="选择日期"
          />
        </el-form-item>
      </div>

      <div class="m-table">
        <div v-if="!isDetail">
          <el-icon @click="addLine" color="red">
            <Plus />
          </el-icon>
          <el-icon>
            <Delete @click="deleteLine" color="red" />
          </el-icon>
        </div>

        <table>
          <!-- 表头 -->
          <thead>
            <tr>
              <th rowspan="2" width="300">摘要</th>
              <th rowspan="2" width="300">会计科目</th>
              <th colspan="11">借方金额</th>
              <th colspan="11">贷方金额</th>
            </tr>
            <tr>
              <th v-for="item in unitList" :key="item.label">
                {{ item.label }}
              </th>
              <th v-for="item in unitList" :key="item.label">
                {{ item.label }}
              </th>
            </tr>
          </thead>
          <!-- 表行 -->
          <tbody>
            <!-- 循环列表数据 -->
            <tr v-for="(item, index) in tableList" :key="index">
              <td>
                <!-- 查询详情和输入表单展示不同的效果 -->
                <!-- <template v-if="isDetail">{{ item.summary }}</template>
                <el-input v-else v-model="item.summary" placeholder="请输入" /> -->
                <el-input v-model="item.summary" />
              </td>
              <td>
                <template v-if="isDetail">{{ item.subjectName }}</template>
                <el-select
                  v-else
                  v-model="item.subjectId"
                  filterable
                  style="margin: 0 8px"
                >
                  <el-option
                    v-for="subItem in subjectList"
                    :key="subItem.id"
                    :value="subItem.id"
                    :label="`${subItem.subjectCode}: ${subItem.cascadeSubjectName}`"
                  />
                </el-select>
              </td>
              <!-- 借方金额 - 编辑中状态 -->
              <template v-if="item.isDebitEdit">
                <td colspan="11">
                  <el-input
                    v-model="item.debitPrice"
                    @blur="onInputBlur"
                    @input="limitNum($event, 'debitPrice', index)"
                    v-focus
                    :key="index"
                  />
                </td>
              </template>
              <!-- 借方金额 - 展示状态 -->
              <td
                v-else
                v-for="(debitItem, subIndex) in unitList"
                :key="subIndex"
                @click="handleClick('isDebitEdit', index)"
              >
                {{ getValue(item.debitPrice, subIndex) }}
              </td>

              <!-- 贷方金额 - 编辑中状态 -->
              <template v-if="item.isCreditEdit">
                <td colspan="11">
                  <el-input
                    v-model="item.creditPrice"
                    @blur="onInputBlur"
                    @input="limitNum($event, 'isCreditEdit', index)"
                    v-focus
                    :key="index"
                  />
                </td>
              </template>
              <!-- 贷方金额 - 展示中状态 -->
              <td
                v-else
                v-for="(creditItem, subIndex) in unitList"
                :key="subIndex"
                @click="handleClick('isCreditEdit', index)"
              >
                {{ getValue(item.creditPrice, subIndex) }}
              </td>
            </tr>

            <!-- 合计行 -->
            <tr>
              <td colspan="2">合计：</td>
              <td v-for="(debitItem, subIndex) in unitList" :key="subIndex">
                {{ getTotalValue("debitPrice", subIndex) }}
              </td>

              <td v-for="(creditItem, subIndex) in unitList" :key="subIndex">
                {{ getTotalValue("creditPrice", subIndex) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div :class="{ 'table-footer': true, disabled: isDetail }">
        <div v-if="!isDetail">
          创建人：{{ this.form.creatorName || userName }}
        </div>
        <div>
          <el-button v-if="isDetail" link type="primary" size="large"
            >原始单据</el-button
          >
          <el-button
            v-else
            link
            type="primary"
            size="large"
            @click="showDialog(true)"
            >添加原始单据</el-button
          >
          <span>已添加 2 张</span>
        </div>
      </div>
      <el-dialog
        center
        title="选择添加的原始单据类型"
        v-model="dialogTableVisible"
        width="20%"
      >
        <!-- :disabled="isDetail" -->
        <el-button type="primary" @click="addOriginalVoucher('invoice')"
          >发票</el-button
        >
        <el-button type="primary" @click="addOriginalVoucher('other')"
          >其他</el-button
        >
        <el-button @click="showDialog(false)">取消</el-button>
      </el-dialog>
    </el-form>

    <div class="m-footer">
      <el-button @click="goBack">返回</el-button>
      <!-- :disabled="isDetail" -->
      <el-button v-if="!isDetail" type="primary" @click="handleSubmit"
        >提交</el-button
      >
    </div>
  </div>
</template>

<script>
import { getQuarterlyList, limitNumTool } from "@/utils/util";
import { unitList } from "@/const";
// import cookies from "@/utils/cookies";
import {
  addObj,
  editObj,
  findTaxMetierScene,
  findTaxSubject,
  relationVoucher,
  findAccountVoucherDetail,
} from "../api/index.js";
import "./index.scss";

export default {
  name: "voucherEntry",
  data() {
    return {
      form: {
        accountingTime: "",
      },
      // 是否是查看详情
      isDetail: false,
      dialogTableVisible: false,
      rules: {
        mark: [
          {
            required: true,
            message: "请输入凭证记号",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        accountingTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "blur",
          },
        ],
        sceneId: [
          {
            required: true,
            message: "请选择业务场景",
            trigger: "blur",
          },
        ],
      },
      // 表格数据
      tableList: [
        {
          debitPrice: "", // 贷方金额
          creditPrice: "", //借方金额
        },
        {
          debitPrice: "", // 贷方金额
          creditPrice: "", //借方金额
        },
        {
          debitPrice: "", // 贷方金额
          creditPrice: "", //借方金额
        },
        {
          debitPrice: "", // 贷方金额
          creditPrice: "", //借方金额
        },
      ],
      updateStatus: "",
      subjectList: [],
      metierSceneList: [],
      // quarterlyList: getQuarterlyList(2),
      orgId: "",
      markType: "",
      userName: this.$cookies.get("userName"),
      unitList
    };
  },
  created() {},

  mounted() {
    // 查询详情
    const {
      id = "",
      updateStatus = "",
      orgId = "",
      mark = "",
      markType = "",
    } = this.$route.query;
    this.isDetail = updateStatus === "detail";
    this.updateStatus = updateStatus;
    this.orgId = orgId;
    this.markType = markType;
    this.form.accountingTime = this.dateValue;
    this.findTaxMetierScene();
    this.findTaxSubject();
    // 如果id 存在就去查询详情
    if (id || mark) {
      this.findAccountVoucherDetail({
        id,
        mark,
        accountSetId: this.$cookies.get("accountSetId") || "",
      });
    }
  },
  computed: {
    // quarterlyList() {
    //   const list = getQuarterlyList(2);
    //   // this.form.quarter = list[list.length - 1];
    //   return list;
    // },
    // userName() {
    //   return this.$cookies.get("userName");
    // },
    dateValue() {
      const date = new Date();
      const year = date.getFullYear();
      const mon = date.getMonth() + 1;
      const day = date.getDate();
      return (
        year +
        "-" +
        (mon > 9 ? mon : "0" + mon) +
        "-" +
        (day > 9 ? day : "0" + day)
      );
    },
  },
  watch: {},
  methods: {
    // 查询详情
    findAccountVoucherDetail(params) {
      findAccountVoucherDetail(params).then((response = {}) => {
        this.form = response;
        this.tableList = this.tableList.map((item, index) => {
          return {
            ...item,
            ...response.list[index],
          };
        });
      });
    },
    // 获取业务场景
    findTaxMetierScene() {
      findTaxMetierScene({
        pageIndex: 1,
        pageSize: 0,
      }).then((response) => {
        this.metierSceneList = response.rows;
      });
    },
    // 获取科目列表
    findTaxSubject() {
      findTaxSubject({
        pageIndex: 1,
        pageSize: 0,
      }).then((response) => {
        this.subjectList = response.rows;
      });
    },

    // 增加一行
    addLine() {
      this.tableList.push({});
    },
    // 删除一行
    deleteLine() {
      // 至少保留一行
      if (this.tableList.length <= 1) return;
      this.tableList.splice(this.tableList.length - 1, 1);
    },

    // 单元格点击事件，
    handleClick(key, index) {
      // 查看详情时单元格点击无效
      if (this.isDetail) return;
      // 取借方或贷方的另一个
      const otherKey = key === "isDebitEdit" ? "isCreditEdit" : "isDebitEdit";
      this.tableList = this.tableList.map((subItem, subIndex) => {
        return {
          // 点击的当前行的借方或贷方的编辑属性设置成true，其余的重置为false
          ...subItem,
          [key]: index === subIndex,
          [otherKey]: false,
        };
      });
    },
    // 金额输入框失去焦点
    onInputBlur() {
      this.tableList = this.tableList.map((subItem) => {
        return {
          ...subItem,
          isDebitEdit: false,
          isCreditEdit: false,
        };
      });
    },
    // 限制金额的输入格式
    limitNum(value, key, index) {
      const money = limitNumTool(value, 10);
      this.tableList[index][key] = money;
    },

    // 获取单元格的值，按金额单位划分
    getValue(amount, index) {
      const arr = (amount + "").split(".");
      // 小数点前，将字符串翻转
      const reverseArr = arr[0].split("").reverse();
      let result = "";
      // 几位数
      if (9 - reverseArr.length <= index && index < 9) {
        result = reverseArr[9 - index];
      } else if (arr[1] && arr[1].length) {
        // 小数点后，正向连续取值
        result = arr[1][index - 9];
      }
      return isNaN(result) ? "" : result;
    },
    // 计算合计
    getTotalValue(key, index) {
      const total = this.tableList.reduce((sum, item) => {
        return sum + parseFloat(item[key] || 0);
      }, 0);
      return this.getValue(total, index);
    },

    // 返回凭证列表
    goBack() {
      const path =
        this.markType === "invoice"
          ? "/originalVoucherManage/invoiceList"
          : this.markType === "other"
          ? "/originalVoucherManage/originalCredentialList"
          : "/bookKeepingVoucherManage/query";
      this.$router.push({
        path,
      });
    },
    // 关联凭证
    relationVoucher(params) {
      if (!params.orgId) {
        this.goBack();

        return;
      }
      relationVoucher(params).then(() => {
        this.goBack();
      });
    },

    // 添加原始单据
    addOriginalVoucher(type) {
      const path =
        type === "invoice"
          ? "/originalVoucherManage/invoiceDetail"
          : "/originalVoucherManage/originalCredentialDetail";
      this.$router.push({
        path,
        query: {
          // 来自记账凭证
          updateStatus: "formEntry",
        },
      });
    },
    showDialog(flag) {
      this.dialogTableVisible = flag;
    },
    // 提交表单
    handleSubmit() {
      // debugger
      const set = this.$refs;
      set["form"].validate((valid) => {
        if (!valid) return false;
        const params = {
          ...this.form,
          list: this.tableList.map((item) => {
            return {
              ...item,
              debitPrice: parseFloat(item.debitPrice || 0),
              creditPrice: parseFloat(item.creditPrice || 0),
            };
          }),
          accountSetId: cookies.get("accountSetId") || "",
        };
        if (this.updateStatus === "update") {
          this.update(params);
          return;
        }
        this.create(params);
      });
    },
    // 创建
    create(params) {
      addObj(params).then((res = {}) => {
        this.$notify({
          title: "成功",
          message: "新建成功",
          type: "success",
          duration: 2000,
        });
        this.relationVoucher({
          orgId: this.orgId,
          voucherIds: [res.id],
        });
      });
    },
    // 编辑
    update(params) {
      editObj(params).then(() => {
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000,
        });
        this.relationVoucher({
          orgId: this.orgId,
          voucherIds: [params.id],
        });
      });
    },
  },
};
</script>
<style lang="scss">
.formitem {
  /deep/ .el-form-item__content {
    display: flex;
  }
}
.el-dialog__body {
  display: flex;
  justify-content: center;
}
</style>
