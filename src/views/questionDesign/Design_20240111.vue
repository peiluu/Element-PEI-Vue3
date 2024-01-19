<template>
  <div class="main-content">
    <div class="content-title">树形节点搜索关键字返回路径</div>
    <div>1. 给你一份数据 </div>
    <code>
      <pre>
        const data = {
          label: '北京市',
          children: [
            {
              label: '朝阳区',
              children: [
                { label: '建外街道' },
                { label: '三里屯街道' },
              ]
            },
            {
              label: '东城区',
              children: [
                { label: '东直门街道' },
                {
                  label: '东华门街道',
                  children: [
                    { label: '胡家园社区' },
                    { label: '新中街社区' },
                  ]
                },
              ]
            },
          ]
        }
      </pre>

                                              </code>
    <div>2. 要求如下</div>
    <div>根据指定关键字进行查找，如果找到，就返回完整的路径，如果找不到，就返回空。</div>
    <div>例如：关键字：'阳'，返回
      <p>1. ['北京市', '朝阳区']</p>

    </div>
    <div>例如：关键字：'街'，返回 [
      <p>1. ['北京市', '朝阳区', '建外街道']</p>
      <p>2. ['北京市', '朝阳区', '三里屯街道']</p>
      <p>3. ['北京市', '东城区', '东直门街道']</p>
      <p>4. ['北京市', '东城区', '东华门街道']</p>
      <p>5. ['北京市', '东城区', '东华门街道', '新中街社区']</p>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const basicData = {
  label: '北京市',
  children: [
    {
      label: '朝阳区',
      children: [
        { label: '建外街道' },
        { label: '三里屯街道' },
      ]
    },
    {
      label: '东城区',
      children: [
        { label: '东直门街道' },
        {
          label: '东华门街道',
          children: [
            { label: '胡家园社区' },
            { label: '新中街社区' },
          ]
        },
      ]
    },
  ]
}
onMounted(() => {
  console.log(getResult('街'))
});

const getResult = (keywords) => {
  const result = [];

  const exec = (data, parentPath) => {
    // 拼接完整的路径
    const currentPath = parentPath.concat(data.label)
    // 只要有符合条件的出现，立即放入数组中+
    if (data.label.includes(keywords)) {
      result.push(currentPath)
    }
    if (data?.children?.length > 0) {
      // 递归遍历每一个节点
      data.children.forEach((item) => {
        exec(item, currentPath)
      })
    }
  }
  exec(basicData, []);
  return result
};


</script>

