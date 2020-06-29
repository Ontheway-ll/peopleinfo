<template>
    <el-container>
       <el-header>
        <layout-header></layout-header>
       </el-header>
        <!-- <el-main></el-main> -->
        <!-- 二级路由容器 -->
        <router-view></router-view>
    </el-container>
</template>

<script>
import LayoutHeader from '@/components/home/layout-header'
export default {
  data () {
    return {

    }
  },
  components: {
    'layout-header': LayoutHeader
  }
}
</script>

<style>

</style>
