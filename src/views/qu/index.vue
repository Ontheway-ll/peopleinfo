<template>
  <div>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <!-- 头部下面整体大盒子 -->
    <div class="downbigbox">
      <!-- 整体盒子头部 -->
      <div class="headerbox">
        <!-- 主体上半部分卡片 -->
        <div class="bigdiv">
          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/民警.png" alt />
            </div>
            <div class="minjing">民警总数</div>
            <div class="zongshu">800000</div>
          </el-card>

          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/带情.png" alt />
            </div>
            <div class="minjing">带情民警总数</div>
            <div class="zongshu">800000</div>
          </el-card>

          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/神秘.png" alt />
            </div>
            <div class="minjing">秘密力量总数</div>
            <div class="zongshu">800000</div>
          </el-card>

          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/发展..png" alt />
            </div>
            <div class="minjing">发展信息员总数</div>
            <div class="zongshu">800000</div>
          </el-card>

          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/热心.png" alt />
            </div>
            <div class="minjing">热心市民总数</div>
            <div class="zongshu">800000</div>
          </el-card>

          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/上报.png" alt />
            </div>
            <div class="minjing">上报信息总数</div>
            <div class="zongshu">800000</div>
          </el-card>

          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/采纳.png" alt />
            </div>
            <div class="minjing">采纳信息总数</div>
            <div class="zongshu">800000</div>
          </el-card>

          <el-card class="firstimag" shadow="always">
            <div class="iimg">
              <img src="../../assets/img/应用.png" alt />
            </div>
            <div class="minjing">应用信息总数</div>
            <div class="zongshu">800000</div>
          </el-card>
        </div>
      </div>
      <!-- 卡片下面整体大盒子 -->
      <div class="carddownbox">
        <!-- 下面大盒子左侧数据统计 -->
        <div class="leftshuju">
          <el-card shadow="always" class="tongjibufen">
            <span class="num">数据统计</span>
            <el-dropdown class="year" @command="clickmenu" style="float: right; padding: 3px 0">
              <span class="el-dropdown-link">
                年
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">2020</el-dropdown-item>
                <el-dropdown-item command="b">2019</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- 图文 -->
            <div class="tuwen">
              <div class="everyone">
                <span class="topport">上报</span>
                <div class="ball">
                  <div class="third">30000</div>
                </div>
              </div>
            </div>

            <div class="tuwen">
              <div class="everyone">
                <span class="topport">采纳</span>
                <div class="balltwo">
                  <div class="third">30000</div>
                </div>
              </div>
            </div>

            <div class="tuwen">
              <div class="everyone">
                <span class="topport">请奖</span>
                <div class="ballthree">
                  <div class="third">30000</div>
                </div>
              </div>
            </div>

            <div class="tuwen">
              <div class="everyone">
                <span class="topport">注册</span>
                <div class="ballfour">
                  <div class="third">30000</div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
        <!-- 下面大盒子右侧的统计图 -->
        <div class="zhuzhuangtu">
          <!-- 统计图 -->
          <el-card shadow="always" class="tongjitu">
            <div slot="header" class="clearfix">
              <span>近一年每月上报 、采纳 、应用 ( 信息 ) 、信息数量</span>
            </div>
            <div ref="myChart" class="echarts"></div>
          </el-card>
        </div>
      </div>
       <!-- 侧面弹窗 -->
      <div class="tanchuang" :class="[isActive?'tanchuang':'tanchuangs']" @click="tapme">
        <img src="../../assets/img/右侧菜单_03.png" alt />
      </div>
      <div class="tanchu" :style="{display:activeDisplay}">
        <div class="kongbai" @click="diandian">...</div>
        <!-- <div class="shi"  @click="myshi">市</div> -->
        <div class="qu" :class="[isShow?'qu':'qus']" @click="myqu">区</div>
        <div class="suo" @click="mysuo">所</div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/home/layout-header'
import Echarts from 'echarts'

export default {
  components: {
    'layout-header': LayoutHeader
  },
  data () {
    return {
      isActive: true, // 左箭头默认显示
      activeDisplay: 'none', // 右箭头默认隐藏
      isShow: true// 区的颜色默认显示
    }
  },
  methods: {
    // 点击日期下面的年
    clickmenu (command) {
      // 点击年弹窗列表
      if (command === 'a') {
        // 2020年，请求2020年数据
      }
    },
    // 点击侧面箭头弹窗框
    tapme () {
      this.isActive = false
      this.activeDisplay = 'block'
    },
    // 点点
    diandian () {
      // console.log(1)
      this.activeDisplay = 'none'
      this.isActive = true
    },
    // 点击区
    myqu () {
      console.log(3)
      this.isShow = false
    //   this.$router.push('/qu')
    },
    // 点击所
    mysuo () {
      console.log(4)
      this.$router.push('/navl')
    }
  },
  mounted () {
    // 进行echarts 的图表实例化，得到一个实例化对象
    this.myChart = Echarts.init(this.$refs.myChart)
    this.myChart.setOption({
      backgroundColor: '#fff',
      tooltip: { // 提示框组件
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
        axisPointer: {
          type: 'shadow',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12
        }
      },
      grid: {
        left: '10%',
        right: '5%',
        bottom: '15%',
        top: '15%',
        // padding:'0 0 10 0',
        containLabel: true
      },
      legend: { // 图例组件，颜色和名字
        right: '1%',
        top: '10%',
        itemGap: 16,
        itemWidth: 20,
        itemHeight: 15,
        data: [{
          name: '上报'
          // icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
          name: '采纳'
        }],
        textStyle: {
          color: 'black',
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12
        }
      },
      xAxis: [
        {
          type: 'category',
          // boundaryGap: true,//坐标轴两边留白
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLabel: { // 坐标轴刻度标签的相关设置。
            // interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
            // margin:15,
            textStyle: {
              color: 'black',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 14
            },
            rotate: 0
          },
          axisTick: { // 坐标轴刻度相关设置。
            show: false
          },
          axisLine: { // 坐标轴轴线相关设置
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitLine: { // 坐标轴在 grid 区域中的分隔线。
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitNumber: 5,
          axisLabel: {
            textStyle: {
              color: '#6c6f79',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 14
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['black'],
              opacity: 0.06
            }
          }

        }
      ],
      series: [
        {
          name: '上报',
          type: 'bar',
          data: [1000, 2000, 3000, 2000, 6000, 5000, 6000, 9000, 8000, 7000, 6000, 5500],
          barWidth: 15,
          barGap: 0, // 柱间距离
          // label: {//图形上的文本标签
          //     normal: {
          //       show: true,
          //       position: 'top',
          //       textStyle: {
          //           color: '#a8aab0',
          //           fontStyle: 'normal',
          //           fontFamily: '微软雅黑',
          //           fontSize: 12,
          //       },
          //     },
          // },
          itemStyle: {
            normal: {
              show: true,
              color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#07b187'
              }, {
                offset: 1,
                color: '#07b187'
              }]),
              barBorderRadius: 3,
              borderWidth: 3
            }
          }
        },
        {
          name: '采纳',
          type: 'bar',
          data: [2000, 3000, 4000, 5000, 6000, 7000, 6000, 5000, 7000, 6000, 5000, 1000],
          barWidth: 10,
          barGap: 0.1, // 柱间距离
          // label: {//图形上的文本标签
          //     normal: {
          //       show: true,
          //       position: 'top',
          //       textStyle: {
          //           color: '#a8aab0',
          //           fontStyle: 'normal',
          //           fontFamily: '微软雅黑',
          //           fontSize: 12,
          //       },
          //     },
          // },
          itemStyle: {
            normal: {
              show: true,
              color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#ffd588'
              }, {
                offset: 1,
                color: '#ffd588'
              }]),
              barBorderRadius: 2,
              borderWidth: 0
            }
          }
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped >
// 头部下面整体大盒子
.downbigbox {
  width: 1840px;
  height: 850px;
  background-color: #eaf2f8;
  margin-left: 40px;
  // 整体盒子头部
  .headerbox {
    width: 1760px;
    height: 250px;
    // background-color: #ccc;
    margin-left: 40px;
    padding-top: 10px;
    // 主体上半部分卡片
    .bigdiv {
      display: flex;
      flex-wrap: wrap;
      width: 1760px;
      height: 250px;
      .firstimag {
        margin-right: 20px;
        height: 110px;
        width: 320px;
        .iimg {
          width: 85px;
          height: 85px;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .minjing {
          margin-top: -75px;
          margin-left: 120px;
        }
        .zongshu {
          margin-top: 15px;
          margin-left: 120px;
          font-size: 22px;
          font-weight: 700;
          color: #342ae0;
        }
      }
    }
  }
  //   卡片下面整体大盒子
  .carddownbox {
    display: flex;
    width: 1760px;
    height: 580px;
    // background-color: coral;
    margin-left: 40px;
    // 面大盒子左侧数据统计
    .leftshuju {
      // 数据统计部分
      .tongjibufen {
        // margin-left: 20px;
        display: flex;
        width: 320px;
        height: 580px;
        .year {
          margin-left: 140px;
          cursor: pointer;
        }
        .num {
          color: #646464;
          font-weight: 700;
          font-size: 18px;
        }
        .tuwen {
          width: 200px;
          height: 110px;
          // background-color: #ccc ;
          margin-top: 20px;
          .everyone {
            margin: 10px;
            display: flex;
            .topport {
              margin-top: 30px;
              font-size: 20px;
              color: #989898;
            }
            .ball {
              background-image: url(../../assets/img/统计上报.png);
              height: 90px;
              width: 90px;
              margin-left: 50px;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              .third {
                margin-left: 23px;
                margin-top: 32px;
                font-size: 16px;
                font-weight: 700;
                color: #ffffff;
              }
            }
            .balltwo {
              background-image: url(../../assets/img/统计采纳.png);
              height: 90px;
              width: 90px;
              margin-left: 50px;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              .third {
                margin-left: 23px;
                margin-top: 32px;
                font-size: 16px;
                font-weight: 700;
                color: #ffffff;
              }
            }
            .ballthree {
              background-image: url(../../assets/img/统计请奖.png);
              height: 90px;
              width: 90px;
              margin-left: 50px;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              .third {
                margin-left: 23px;
                margin-top: 32px;
                font-size: 16px;
                font-weight: 700;
                color: #ffffff;
              }
            }
            .ballfour {
              background-image: url(../../assets/img/统计注册.png);
              height: 90px;
              width: 90px;
              margin-left: 50px;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              .third {
                margin-left: 23px;
                margin-top: 32px;
                font-size: 16px;
                font-weight: 700;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
    .zhuzhuangtu{

     // 统计图
      .tongjitu {
          border-radius: 10px;
        width: 1417px;
        height: 578px;
        margin-left: 20px;
        .echarts{
           width: 1300px;
           height: 530px;
        }
      }
    }
  }
   // 侧边弹窗
  .tanchuang {
    cursor: pointer;
    position: absolute;
    top: 370px;
    right: 42px;
    width: 23px;
    height: 98px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tanchuangs {
    display: none;
  }
  .tanchu {
    cursor: pointer;
    width: 133px;
    height: 220px;
    position: absolute;
    top: 310px;
    right: 12px;
    background-image: url(../../assets/img/右侧菜单栏放_03.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 73px 302px;
    // .shi {
    //   cursor: pointer;
    //   user-select: none;
    //   margin-left: 58px;
    //   font-size: 33px;
    //   font-weight: 700;
    //   margin-top: 20px;
    //   color: #ff9f41;
    // }
    .qus {
      cursor: pointer;
      user-select: none;
      margin-left: 58px;
      font-size: 33px;
      font-weight: 700;
      margin-top: 20px;
      color: #ffffff;
    }
    .kongbai {
      position: absolute;
      user-select: none;
      margin-left: 34px;
      font-size: 16px;
      margin-top: 94px;
      color: #cccccc;
    }
    .qu {
      cursor: pointer;
      user-select: none;
      margin-left: 58px;
      font-size: 33px;
      font-weight: 700;
      margin-top: 20px;
      color: #ff9f3d;
    }
    .suo {
      margin-left: 58px;
      font-size: 33px;
      font-weight: 700;
      margin-top: 80px;
      color: #ffffff;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
