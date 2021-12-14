<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
        generateTitle(item.meta.title)
        }}</span>
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="handleLinkClick(item)">{{
        generateTitle(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { generateTitle } from '@/utils/i18n'

const router = useRoute()
// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = router.matched.filter(
    (item) => item.meta && item.meta.title
  )
}
// 监听路由变化时触发
watch(
  router,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

const handleLinkClick = (item) => {
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
  }

  .redirect:hover {
    // 将来需要进行主题替换，所以这里不去写死样式
    color: v-bind(linkHoverColor);
  }
}
</style>
