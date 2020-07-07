<template>
  <div>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <!-- 头部下面的整体大盒子 -->
    <div class="downbigbox">
      <!-- 下面大盒子左侧 -->

      <!-- 下面大盒子整体右侧 -->
      <div class="bixboxright">
        <!-- 整体右侧靠左部分 -->
        <div class="kaoleft">
          <!-- 每一个小盒子 -->
          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">民警总数</div>
                <div class="shuliang">300000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/民警 (4).png" alt />
              </div>
            </div>
          </el-card>
          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">带情民警总数</div>
                <div class="shuliangtwo">500000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/带情 (4).png" alt />
              </div>
            </div>
          </el-card>
          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">采纳信息总数</div>
                <div class="shuliangseven">300000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/采纳信息 (2).png" alt />
              </div>
            </div>
          </el-card>

          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">发展信息员总数</div>
                <div class="shuliangfour">16000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/发展 (3).png" alt />
              </div>
            </div>
          </el-card>
          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">热心市民总数</div>
                <div class="shuliangfive">380000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/热心 (4).png" alt />
              </div>
            </div>
          </el-card>
          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">上报信息总数</div>
                <div class="shuliangsix">800000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/上报信息 (3).png" alt />
              </div>
            </div>
          </el-card>
          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">秘密力量总数</div>
                <div class="shuliangthree">20000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/神秘 (4).png" alt />
              </div>
            </div>
          </el-card>
          <el-card class="everysmall" shadow="always">
            <div class="flexbujv">
              <!-- 每一个小盒子左侧盒子 -->
              <div class="minjingshu">
                <div class="minjing">应用信息总数</div>
                <div class="shuliangeight">3000</div>
              </div>
              <!-- 每一个小盒子右侧盒子 -->
              <div class="imgright">
                <img src="../../assets/img/应用信息.png" alt />
              </div>
            </div>
          </el-card>
        </div>
        <!-- 整体右侧靠右部分 -->
        <div class="kaoright">
          <!-- 整体靠右上部分 -->
          <div class="kaorighttop">
            <!-- 左侧数据统计 -->
            <div class="sjtongji">数据统计</div>
            <!-- 右侧图文 -->
            <div class="xiaotuwen">
              <div class="tuwenyuan">
                <div class="topreports">上报信息</div>
                <div class="numb">80000</div>
              </div>
              <!-- 右侧图文 -->
              <div class="tuwenyuanl">
                <div class="topreports">采纳总数</div>
                <div class="numb">6000</div>
              </div>
              <!-- 右侧图文 -->
              <div class="tuwenyuanll">
                <div class="topreports">请奖信息</div>
                <div class="numb">80000</div>
              </div>
              <!-- 右侧图文 -->
              <div class="tuwenyuanlll">
                <div class="topreports">注册人数</div>
                <div class="numb">1000</div>
              </div>
            </div>
          </div>
          <!-- 整体靠右下部分 -->
          <div class="kaorightdown">
            <!-- 统计图 -->
            <el-card shadow="always" class="tongjitu">
              <div slot="header" class="clearfix">
                <span>上报 、采纳 、应用信息数量</span>
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
          <!-- <div class="qu" @click="myqu">区</div> -->
          <div class="suo" :class="[isShow?'suo':'suos']">所</div>
          <div class="user" @click="myuser">
            <div class="rentou"></div>
            <div class="shenti"></div>
          </div>
        </div>
      </div>
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
      activeDisplay: 'none', // 右箭头默认隐藏
      isShow: true // 颜色默认显示
    }
  },
  components: {
    'layout-header': LayoutHeader
  },
  methods: {
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
    // 点击用户
    myuser () {
      this.$router.push('/user')
    }
  },
  mounted () {
    // 进行echarts 的图表实例化，得到一个实例化对象
    this.myChart = Echarts.init(this.$refs.myChart)
    this.myChart.setOption({
      backgroundColor: '#fff',
      tooltip: {
        // 提示框组件
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
        bottom: '18%',
        top: '15%',
        // padding:'0 0 10 0',
        containLabel: true
      },
      legend: {
        // 图例组件，颜色和名字
        right: '1%',
        top: '5 %',
        itemGap: 16,
        itemWidth: 20,
        itemHeight: 15,
        data: [
          {
            name: '上报'
            // icon:'image://../wwwroot/js/url2.png', //路径
          },
          {
            name: '采纳'
          }
        ],
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
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisLabel: {
            // 坐标轴刻度标签的相关设置。
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
          axisTick: {
            // 坐标轴刻度相关设置。
            show: false
          },
          axisLine: {
            // 坐标轴轴线相关设置
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitLine: {
            // 坐标轴在 grid 区域中的分隔线。
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
          data: [
            1000,
            2000,
            3000,
            2000,
            6000,
            5000,
            6000,
            9000,
            8000,
            7000,
            6000,
            5500
          ],
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
              color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#8360ff'
                },
                {
                  offset: 1,
                  color: '#8360ff'
                }
              ]),
              barBorderRadius: 3,
              borderWidth: 3
            }
          }
        },
        {
          name: '采纳',
          type: 'bar',
          data: [
            2000,
            3000,
            4000,
            5000,
            6000,
            7000,
            6000,
            5000,
            7000,
            6000,
            5000,
            1000
          ],
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
              color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#f98986'
                },
                {
                  offset: 1,
                  color: '#f98986'
                }
              ]),
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

<style lang="less" scoped>
.downbigbox {
  display: flex;
  background-color: #eaf2f8;
  width: 1840px;
  margin-left: 40px;
  .bixboxright {
    display: flex;
    width: 1840px;
    height: 800px;
    margin-top: 20px;
    margin-left: 40px;
    background-color: #eaf2f8;
    // border-radius: 5px;
    .kaoleft {
      width: 400px;
      height: 800px;
      margin-top: 10px;
      //   margin-left: 10px;
      .everysmall {
        border: 1px solid #9a84e9;
        margin-left: 5px;
        border-radius: 10px;
        margin-bottom: 7px;
        width: 400px;
        height: 90px;
        .flexbujv {
          display: flex;
          .minjingshu {
            .minjing {
              margin-left: 20px;
            }
            .shuliang {
              margin-left: 30px;
              color: #9880f5;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangtwo {
              margin-left: 30px;
              color: #2e64ff;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangthree {
              margin-left: 30px;
              color: #4df7ea;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangfour {
              margin-left: 30px;
              color: #14ec82;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangfive {
              margin-left: 30px;
              color: #fb936d;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangsix {
              margin-left: 30px;
              color: #fd70af;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangseven {
              margin-left: 30px;
              color: #eede2a;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangeight {
              margin-left: 30px;
              color: #f79ef3;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
          }
          .imgright {
            width: 50px;
            height: 62px;
            margin-left: 140px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .kaoright {
      width: 1130px;
      height: 800px;
      // background-color: red;
      margin-left: 40px;
      // 整体靠右上部分
      .kaorighttop {
        background-color: #fff;
        height: 250px;
        width: 1300px;
        border-radius: 20px;
        padding-top: 10px;
        margin-top: 10px;
        .sjtongji {
          margin-top: 10px;
          font-size: 20px;
          margin-left: 20px;
        }
        .xiaotuwen {
          display: flex;
          .tuwenyuan {
            width: 130px;
            height: 130px;
            background-image: url(../../assets/img/sb.png);
            margin-left: 180px;
            margin-top: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .topreports {
              text-align: center;
              padding-top: 35px;
              color: #656565;
            }
            .numb {
              text-align: center;
              padding-top: 8px;
              font-size: 24px;
              color: #2acefe;
              font-weight: 700;
            }
          }
          .tuwenyuanl {
            width: 130px;
            height: 130px;
            background-image: url(../../assets/img/cn.png);
            margin-left: 120px;
            margin-top: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .topreports {
              text-align: center;
              padding-top: 35px;
              color: #656565;
            }
            .numb {
              text-align: center;
              padding-top: 8px;
              font-size: 24px;
              color: #40ed8e;
              font-weight: 700;
            }
          }
          .tuwenyuanll {
            width: 130px;
            height: 130px;
            background-image: url(../../assets/img/qj.png);
            margin-left: 120px;
            margin-top: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .topreports {
              text-align: center;
              padding-top: 35px;
              color: #656565;
            }
            .numb {
              text-align: center;
              padding-top: 8px;
              font-size: 24px;
              color: #fed34c;
              font-weight: 700;
            }
          }
          .tuwenyuanlll {
            width: 130px;
            height: 130px;
            background-image: url(../../assets/img/zc.png);
            margin-left: 120px;
            margin-top: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .topreports {
              text-align: center;
              padding-top: 35px;
              color: #656565;
            }
            .numb {
              text-align: center;
              padding-top: 8px;
              font-size: 24px;
              color: #7076fd;
              font-weight: 700;
            }
          }
        }
      }
      .kaorightdown {
        height: 500px;
        width: 1300px;
        margin-top: 20px;
        border-radius: 20px;
        .tongjitu {
          border-radius: 20px;
          width: 1300px;
          height: 500px;
          // margin-left: 20px;
          .echarts {
            width: 1200px;
            height: 500px;
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
      .suos {
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
      .suo {
        margin-left: 58px;
        font-size: 33px;
        font-weight: 700;
        margin-top: 20px;
        color: #ff9f38;
        cursor: pointer;
        user-select: none;
      }
      .user {
        width: 50px;
        height: 50px;
        margin-left: 50px;
        margin-top: 90px;
        .rentou {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #a1a1a1;
          border: 2px solid #ffffff;
          margin-left: 14px;
        }
        .shenti {
          width: 35px;
          height: 18px;
          border: 2px solid #ffffff;
          background-color: #a1a1a1;
          border-radius: 35px 35px 0 0;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
