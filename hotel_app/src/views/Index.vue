<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <h2>酒店管理系统</h2>
          <div class="user-info">
            <el-space>
                <span class="el-space-register">注册</span>
                <span class="el-space-login">登录</span>
            </el-space>
            
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
              active-text-color="#fff"
              background-color="#272727"
              class="el-menu-vertical-demo"
              text-color="#fff"
              router
            >
              <el-menu-item index="/home">
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="/introduce">
                <span>酒店介绍</span>
              </el-menu-item>
              <el-menu-item index="/service">
                <span>客房服务</span>
              </el-menu-item>
              <el-menu-item index="/information">
                <span>个人信息</span>
              </el-menu-item>
              <el-menu-item index="/orderList">
                <span>我的订单</span>
              </el-menu-item>
              
            </el-menu>
          </el-aside>
          <el-main>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="item in breadcrumb" :key="item">{{ item }}</el-breadcrumb-item>
            </el-breadcrumb>
            <RouterView />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
    export default {
      data(){
        return{
          activeIndex:''
        }
      },
      created(){
        this.activeIndex=this.$route.path
      },
      computed:{
        breadcrumb(){
          return this.$route.meta.breadcrumb || [];
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
  .el-container{
    background-color: #cdc1b0;
  }

  .el-header{
    background: #272727;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-header h2{
    color: #c0c0c0;
  }
  .el-header .el-space span{
    color: #fff;
  }
  .user-info{
    display: flex;
    align-items: center;
  }
  .el-aside{
    height: calc(100vh - 60px);
  }
  .el-menu{
    height: 100%;
  }
  .el-menu-item:hover{
    background-color: #00caca;
  }
  .el-menu-item span{
    display: block;
    margin: auto;
  }
  
  </style>