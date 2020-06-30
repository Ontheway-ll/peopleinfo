<template>
  <div class="test">
        <div class="testNav">
             <span class="people" >人力情报管理系统</span>
             <span class="imgs" ><img src="../../assets/img/信息员管理.png" alt=""></span>
             <div :class="{'selected' :tab === 1,'testTitle':true}" @click="toTab(1)">信息员管理
            <div class="nav"></div>
            </div>

             <span class="imgs" ><img src="../../assets/img/信息管理.png" alt=""></span>
            <div :class="{'selected':tab === 2,'testTitle':true}"  @click="toTab(2)">信息管理
            <div class="nav"></div>
            </div>

             <span class="imgs" ><img src="../../assets/img/任务管理.png" alt=""></span>
            <div :class="{'selected':tab === 3,'testTitle':true}"  @click="toTab(3)">任务管理
            <div class="nav"></div>
            </div>

             <span class="imgs" ><img src="../../assets/img/新闻管理.png" alt=""></span>
             <div :class="{'selected':tab === 4,'testTitle':true}"  @click="toTab(4)">新闻管理
            <div class="nav"></div>
            </div>

             <span class="imgs" ><img src="../../assets/img/系统管理.png" alt=""></span>
             <div :class="{'selected':tab === 5,'testTitle':true}"  @click="toTab(5)">系统管理
            <div class="nav"></div>
            </div>

             <span class="imgs" ><img src="../../assets/img/请奖管理.png" alt=""></span>
             <div :class="{'selected':tab === 6,'testTitle':true}"  @click="toTab(6)">请奖管理
            <div class="nav"></div>
            </div>
             <span @click="dengchu" class="guanli">
               <img src="../../assets/img/管理员.png" alt="">
               管理员
               <img class="imgg" src="../../assets/img/注销.png" alt="">
             </span>
        </div>
        <div class="container">
            <keep-alive>
                <first v-if="tab === 1">
                </first>
                <second v-else-if="tab === 2">
                </second>
                 <third v-else-if="tab === 3">
                </third>
                 <fourth v-else-if="tab === 4">
                </fourth>
                 <fifth v-else-if="tab === 5">
                </fifth>
                <sixth v-else>
                </sixth>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import first from './first'
import second from './second'
import third from './third'
import fourth from './fourth'
import fifth from './fifth'
import sixth from './sixth'
export default {
  data () {
    return {
      tab: 1
    }
  },
  components: {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth
  },
  methods: {
    toTab (index) {
      this.tab = index
    },
    dengchu () {
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

<style lang="less" scoped>
.test {
      user-select:none;
    // width: 100%;
    .testNav {
        // position: relative;
        height: 60px;
        line-height: 60px;
        display: flex;
        // border-bottom: 1px solid #e5e5e5;
        font-weight: 700;
        color: #ffffff;
        background-color: #1476ff;
        .people{
            flex: 4;
          margin-left: 50px;
          font-size: 22px;
          font-weight: 700;
        }
        .imgs{
          // position: absolute;
          // top: 4px;
          // left: 10px;
          margin-right: 10px;
          height: 18px;
          width: 18px;
          margin-top: 4px;
          img{
            width: 100%;
            height: 100%;
            margin-left: -423px;
          }
        }
        .testTitle {
          margin-left: -430px;
            flex: 3;
            // text-align: center;
            cursor:pointer;
        }
        .selected {
            color: black;
              .nav{
              background: #ff9f41;
              width: 65px;
              height: 5px;
              margin-top: -6px;
              // margin-left: px;
              border-radius: 3px;
              }
        }
        .guanli{
          cursor:pointer;
          height: 28px;
          width: 28px;
          // margin-top: px;
          img{
            width: 100%;
            height: 100%;
            margin-left: -150px;
            vertical-align:middle;
            margin-right:5px;
          }
          .imgg{
            margin-left: 5px;
            height: 18px;
             width: 18px;
             margin-top: -2px;
          }
        }

    }
}
</style>
