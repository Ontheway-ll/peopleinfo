<template>
  <el-container>
    <el-header>
      <div class="test">
        <div class="testNav">
          <span class="people">人力情报管理系统</span>
          <span class="imgs" ><img src="../../assets/img/信息员管理.png" alt=""></span>
          <span class="manger">信息员管理</span>

          <span class="imgss" ><img src="../../assets/img/信息管理.png" alt=""></span>
          <span class="mangerr">信息管理</span>

           <span class="imgss" ><img src="../../assets/img/任务管理.png" alt=""></span>
          <span class="mangerr">任务管理</span>

            <span class="imgss" ><img src="../../assets/img/新闻管理.png" alt=""></span>
          <span class="mangerr">新闻管理</span>

           <span class="imgss" ><img src="../../assets/img/系统管理.png" alt=""></span>
          <span class="mangerr">系统管理</span>

           <span class="imgss" ><img src="../../assets/img/请奖管理.png" alt=""></span>
          <span class="mangerr">请奖管理</span>

          <span  class="guanli" @click="dengchuqu" >
               <img class="imm" src="../../assets/img/管理员.png" alt="">
          </span>
          <span class="guanliyuan" @click="dengchuqu" >管理员</span>
          <span class="dengchu" @click="dengchuqu" >
               <img class="zhuxiao"  src="../../assets/img/注销.png" alt="">
          </span>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 登出操作
    dengchuqu () {
      this.$confirm('是否退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped >
.test {
  user-select: none;
  .testNav {
    cursor:pointer;
    height: 60px;
    line-height: 60px;
    display: flex;
    font-weight: 700;
    color: #ffffff;
    background-color: #1476ff;
    .people {
      // flex: 1;
      margin-left: 50px;
      font-size: 22px;
      font-weight: 700;
       user-select: none;

    }
    .imgs{
          margin-left: 150px;
          height: 18px;
          width: 18px;
          margin-top: 4px;
          img{
            width: 100%;
            height: 100%;
          }

    }
    .manger{
      margin-left: 8px;
      margin-top: 1px;
    }
    .imgss{
          margin-left:80px ;
          height: 18px;
          width: 18px;
          margin-top: 4px;
          img{
            width: 100%;
            height: 100%;
          }

    }
    .mangerr{
      margin-left: 8px;
      margin-top: 1px;
    }
    .guanli{
         cursor:pointer;
          height: 28px;
          width: 28px;
          margin-left: 200px;
           .imm{
            width: 100%;
            height: 100%;
            vertical-align:middle;
           }

    }
    .guanliyuan{
      margin-left: 7px;
      cursor:pointer;
    }
    .dengchu{
       height: 22px;
       width: 20px;
      margin-left: 7px;
      cursor:pointer;
      .zhuxiao{
            width: 100%;
            height: 100%;
            vertical-align:middle;
           }
    }
  }
}
</style>
