<template>
  <div>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <div class="seconebox">
      <div class="boxx">
        <!-- 主体部分左侧部分 -->
        <div class="cebox">
          <div class="heping">和平区</div>
          <div class="lines"></div>

          <div class="heping">河东区</div>
          <div class="lines"></div>

          <div class="heping">河西区</div>
          <div class="lines"></div>

          <div class="heping">河北区</div>
          <div class="lines"></div>

          <div class="heping">南开区</div>
          <div class="lines"></div>

          <div class="heping">红桥区</div>
          <div class="lines"></div>

          <div class="heping">东丽区</div>
          <div class="lines"></div>

          <div class="heping">津南区</div>
          <div class="lines"></div>

          <div class="heping">西青区</div>
          <div class="lines"></div>

          <div class="heping">北辰区</div>
          <div class="lines"></div>

          <div class="heping">宝坻区</div>
          <div class="lines"></div>

          <div class="heping">武清区</div>
          <div class="lines"></div>

          <div class="heping">宁河区</div>
          <div class="lines"></div>

          <div class="heping">静海区</div>
          <div class="lines"></div>

          <div class="heping">蓟州区</div>
          <div class="lines"></div>

          <div class="heping">滨海新区</div>
          <div class="lines"></div>
        </div>
      </div>

      <div class="youcezhuti">
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
        <div class="xialia">
          <!-- 数据统计部分 -->
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

          <!-- 统计图 -->
          <el-card shadow="always" class="tongjitu">
            <div slot="header" class="clearfix">
              <span>近一年每月上报 、采纳 、应用 ( 信息 ) 、信息数量</span>
            </div>
            <div ref="myChart" class="echarts"></div>
          </el-card>
        </div>
      </div>
    </div>

     <!-- 侧面弹窗 -->
      <div class="tanchuang" :class="[isActive?'tanchuang':'tanchuangs']" @click="tapme">
        <img src="../../assets/img/右侧菜单_03.png" alt />
      </div>
      <div class="tanchu" :style="{display:activeDisplay}">
        <div class="kongbai" @click="diandian">...</div>
        <div class="shi"  @click="myshi">市</div>
        <div class="qu" @click="myqu">区</div>
        <div class="suo" @click="mysuo">所</div>
      </div>
  </div>
</template>

<script>
import Echarts from 'echarts'
import LayoutHeader from '@/components/home/layout-header'
export default {
  data () {
    return {
      isActive: true, // 左箭头默认显示
      activeDisplay: 'none' // 右箭头默认隐藏
      // isShow: true// 市的颜色默认显示
    }
  },
  components: {
    'layout-header': LayoutHeader
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
    // 点击市
    myshi () {
      this.$router.push('/home')
    },
    // 点击区
    myqu () {
      console.log(3)
      // this.isShow = false
      this.$router.push('/qu')
    },
    // 点击所
    mysuo () {
      console.log(4)
      this.$router.push('/suo')
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
        right: '10%',
        bottom: '15%',
        top: '20%',
        // padding:'0 0 10 0',
        containLabel: true
      },
      legend: { // 图例组件，颜色和名字
        right: '5%',
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
.seconebox {
  display: flex;
  .boxx {
    // display: flex;
    height: 840px;
    // 主体部分左侧部分样式
    .cebox {
      user-select: none;
      cursor: pointer;
      height: 830px;
      width: 250px;
      background-color: #3c20fe;
      margin-left: 40px;
      .heping {
        height: 50px;
        color: #ffffff;
        text-align: center;
        line-height: 50px;
        background-color: #3c20fe;
      }
      // heping:hover{
      //     color: red;
      //     background-color: blue;
      // }
      .lines {
        height: 1px;
        border-top: solid #ffffff 1px;
      }
    }
  }
  .youcezhuti {
    // 主体上半部分卡片
    .bigdiv {
      display: flex;
      flex-wrap: wrap;
      width: 1550px;
      height: 260px;
      background-color: #eaf2f8;
      margin: 20px;
      .firstimag {
        margin-right: 8px;
        height: 120px;
        width: 300px;
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
    .xialia {
      display: flex;
      // 数据统计部分
      .tongjibufen {
        margin-left: 20px;
        display: flex;
        width: 300px;
        height: 530px;
        .year {
          margin-left: 120px;
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
          margin-top: 10px;
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
      // 统计图
      .tongjitu {
        width: 1225px;
        height: 530px;
        margin-left: 20px;
        .echarts{
           width: 1100px;
           height: 530px;
        }
      }
    }
  }

}
// 侧边弹窗
  .tanchuang {
    cursor: pointer;
    position: absolute;
    top: 370px;
    right: 50px;
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
    right: 20px;
    background-image: url(../../assets/img/右侧菜单栏放_03.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 73px 302px;
    .shi {
      cursor: pointer;
      user-select: none;
      margin-left: 58px;
      font-size: 33px;
      font-weight: 700;
      margin-top: 20px;
      color: #ffffff;
    }
    // .shis {
    //   cursor: pointer;
    //   user-select: none;
    //   margin-left: 58px;
    //   font-size: 33px;
    //   font-weight: 700;
    //   margin-top: 20px;
    //   color: #ffffff;
    // }
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
      color: #ffffff;
    }
    .suo {
      margin-left: 58px;
      font-size: 33px;
      font-weight: 700;
      margin-top: 20px;
      color: #ffffff;
      cursor: pointer;
      user-select: none;
    }
  }

</style>
