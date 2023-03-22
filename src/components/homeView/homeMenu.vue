<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @select="hanldeSelect" router>
    <template v-for="item in menuData">
      <!-- 折叠样式 -->
      <el-sub-menu v-if="item.children?.length" :key="item.menuid" :index="item.menurouter">
        <template #title>
          <el-icon>
            <i-ep-edit></i-ep-edit>
          </el-icon>
          <span>{{ item.menuname }}</span>
        </template>
        <!-- 子类 -->
        <template v-for="subitem in item.children" :key="subitem.menuid">
          <el-menu-item :index="subitem.menurouter">
            <!-- <el-icon><icon-menu /></el-icon> -->
            <span>{{ subitem.menuname }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <!--  menuitem -->
      <el-menu-item v-else :index="item.menurouter">
        <!-- <el-icon><icon-menu /></el-icon> -->
        <span>{{ item.menuname }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import type { menuModel } from '@/models/homeModel/homeModel'
const menuData = reactive<menuModel[]>([
  {
    menuid: '01',
    menuname: '用户管理',
    menurouter: '/user',
    children: [
      {
        menuid: '01-1',
        menuname: '用户管理1-1',
        menurouter: '/user1'
      },
      {
        menuid: '01-2',
        menuname: '用户管理1-2',
        menurouter: '/user2'
      }
    ]
  },
  {
    menuid: '02',
    menuname: '用户管理',
    menurouter: '/yonghu'
  },
  {
    menuid: '03',
    menuname: '角色管理',
    menurouter: '/juese'
  },
  {
    menuid: '04',
    menuname: '菜单管理',
    menurouter: '/caidan'
  },
  {
    menuid: '05',
    menuname: '部门管理',
    menurouter: '/bumen'
  },
  {
    menuid: '06',
    menuname: '岗位管理',
    menurouter: '/gangwei'
  }
])

const hanldeSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss"></style>
