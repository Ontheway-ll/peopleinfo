<template>
  <div>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <!-- 头部下面整体部分 -->
    <div class="downbigboxx">
      <!-- 下面整体盒子头部 -->
      <div class="topheader">
        <el-carousel height="250px" trigger="click">
          <el-carousel-item>
            <div class="everyoneflex">
              <div class="everyone">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/民警.png" alt />
                  </div>
                  <div class="minjing">民警总数</div>
                  <div class="zongshu">800000</div>
                </el-card>
              </div>
              <div class="everytwo">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/带情.png" alt />
                  </div>
                  <div class="minjing">带情民警总数</div>
                  <div class="zongshu">60000</div>
                </el-card>
              </div>

              <div class="everythree">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/神秘.png" alt />
                  </div>
                  <div class="minjing">秘密力量总数</div>
                  <div class="zongshu">60000</div>
                </el-card>
              </div>

              <div class="everyfour">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/发展..png" alt />
                  </div>
                  <div class="minjing">发展信息员总数</div>
                  <div class="zongshu">60000</div>
                </el-card>
              </div>

              <div class="everyfive">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/热心.png" alt />
                  </div>
                  <div class="minjing">热心市民总数</div>
                  <div class="zongshu">60000</div>
                </el-card>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="everyoneflex">
              <div class="everysix">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/采纳.png" alt />
                  </div>
                  <div class="minjing">采纳信息总数</div>
                  <div class="zongshu">800000</div>
                </el-card>
              </div>

              <div class="everyseven">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/上报.png" alt />
                  </div>
                  <div class="minjing">上报信息总数</div>
                  <div class="zongshu">800000</div>
                </el-card>
              </div>

              <div class="everyeigh">
                <el-card class="firstimag" shadow="always">
                  <div class="iimg">
                    <img src="../../assets/img/应用.png" alt />
                  </div>
                  <div class="minjing">应用信息总数</div>
                  <div class="zongshu">800000</div>
                </el-card>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 下面整体盒子主体 -->
      <div class="mainbody">
        <!-- 下面整体盒子左面折线图 -->
        <div class="leftzhexian">
          <el-card class="zhexiantu">
            <div slot="header" class="clearfix">
              <span>上报 、采纳 、应用 ( 信息 ) 、信息数量</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div ref="myChart" class="echarts"></div>
          </el-card>
        </div>
        <!-- 下面整体盒子右面图文 -->
        <div class="righttuwen">
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
            <div class="toplia">
              <div class="everyone">
                <div class="ball">
                  <div class="third">300000</div>
                  <div class="topport">上报数量</div>
                </div>
              </div>

              <div class="everyone">
                <div class="balltwo">
                  <div class="third">300000</div>
                  <div class="topport">采纳数量</div>
                </div>
              </div>
            </div>

            <!-- 图文 -->
            <div class="toplia">
              <div class="everyone">
                <div class="ballthree">
                  <div class="third">300000</div>
                  <div class="topport">请奖数量</div>
                </div>
              </div>

              <div class="everyone">
                <div class="ballfour">
                  <div class="third">300000</div>
                  <div class="topport">注册数量</div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <!-- 导航栏 -->
       <div class="tanchuang" :class="[isActive?'tanchuang':'tanchuangs']" @click="tapme">
          <img src="../../assets/img/右侧菜单_03.png" alt />
        </div>
        <div class="tanchu" :style="{display:activeDisplay}">
          <div class="kongbai" @click="diandian">...</div>
          <div class="suo" @click="mysuo" >所</div>
          <div class="user" >
            <div class="rentou"></div>
            <div class="shenti"></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/home/layout-header'
import Echarts from 'echarts'

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
    // 点击所
    mysuo () {
      this.isShow = false
      this.$router.push('/suo')
    }
  },
  mounted () {
    const bgColor = '#fff'
    const color = [
      '#0090FF',
      '#36CE9E',
      '#FFC005',
      '#FF515A',
      '#8B5CFF',
      '#00CA69'
    ]
    const echartData = [
      {
        name: '1',
        value1: 1000,
        value2: 2330
      },
      {
        name: '2',
        value1: 1380,
        value2: 2330
      },
      {
        name: '3',
        value1: 3500,
        value2: 2000
      },
      {
        name: '4',
        value1: 1730,
        value2: 1800
      },
      {
        name: '5',
        value1: 1800,
        value2: 1990
      },
      {
        name: '6',
        value1: 1500,
        value2: 2330
      },
      {
        name: '7',
        value1: 1800,
        value2: 2100
      },
      {
        name: '8',
        value1: 2300,
        value2: 1800
      },
      {
        name: '9',
        value1: 1500,
        value2: 2000
      },
      {
        name: '10',
        value1: 1600,
        value2: 1200
      },
      {
        name: '11',
        value1: 1700,
        value2: 1600
      },
      {
        name: '12',
        value1: 2300,
        value2: 2000
      }
    ]

    const xAxisData = echartData.map(v => v.name)
    // ["1", "2", "3", "4", "5", "6", "7", "8"]
    const yAxisData1 = echartData.map(v => v.value1)
    // [100, 138, 350, 173, 180, 150, 180, 230]
    const yAxisData2 = echartData.map(v => v.value2)
    // [233, 233, 200, 180, 199, 233, 210, 180]
    const hexToRgba = (hex, opacity) => {
      let rgbaColor = ''
      const reg = /^#[\da-f]{6}$/i
      if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
          '0x' + hex.slice(3, 5)
        )},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
      }
      return rgbaColor
    }

    // 进行echarts 的图表实例化，得到一个实例化对象
    this.myChart = Echarts.init(this.$refs.myChart)
    this.myChart.setOption({
      backgroundColor: bgColor,
      color: color,
      legend: {
        right: 30,
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let html = ''
          params.forEach(v => {
            // console.log(v)
            html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                  color[v.componentIndex]
                };"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${
                  color[v.componentIndex]
                };font-weight:700;font-size: 18px">${v.value}</span>
                `
          })

          return html
        },
        extraCssText:
          'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        // 这是坐标轴指示器（axisPointer）的全局公用设置。
        axisPointer: {
          type: 'shadow', // 阴影指示器
          shadowStyle: {
            color: '#ffffff',
            shadowColor: 'rgba(225,225,225,1)',
            shadowBlur: 5
          }
        }
      },
      grid: {
        top: 50, // grid 组件离容器上侧的距离
        containLabel: true // grid 区域是否包含坐标轴的刻度标签
      },
      xAxis: [
        {
          // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠
          type: 'category', // 坐标轴类型。'category' 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
          boundaryGap: false, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
          axisLabel: {
            // 坐标轴刻度标签的相关设置。
            formatter: '{value}月',
            textStyle: {
              color: '#333'
            }
          },
          axisLine: {
            // 坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
            lineStyle: {
              color: '#D9D9D9'
            }
          },
          data: xAxisData
        }
      ],
      yAxis: [
        {
          // 直角坐标系 grid 中的 y 轴
          type: 'value',
          name: '',
          axisLabel: {
            /// /坐标轴刻度标签的相关设置
            textStyle: {
              color: '#666'
            }
          },
          nameTextStyle: {
            // 坐标轴名称的文字样式。
            color: '#666',
            fontSize: 12,
            lineHeight: 40
          },
          splitLine: {
            // 坐标轴在 grid 区域中的分隔线。
            lineStyle: {
              type: 'dashed',
              color: '#E9E9E9'
            }
          },
          axisLine: {
            // 是否显示坐标轴轴线。
            show: false
          },
          axisTick: {
            // 是否显示坐标轴刻度。
            show: false
          }
        }
      ],
      series: [
        {
          // 系列列表。每个系列通过 type 决定自己的图表类型
          name: '上报',
          type: 'line',
          smooth: true,
          // showSymbol: false,/
          symbolSize: 8, // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
          zlevel: 3, // 折线图所有图形的 zlevel 值。制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
          lineStyle: {
            normal: {
              color: color[0],
              shadowBlur: 3,
              shadowColor: hexToRgba(color[0], 0.5),
              shadowOffsetY: 0
            }
          },
          areaStyle: {
            // 区域填充样式。
            normal: {
              color: new Echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: hexToRgba(color[0], 0.3)
                  },
                  {
                    offset: 1,
                    color: hexToRgba(color[0], 0.1)
                  }
                ],
                false
              ),
              shadowColor: hexToRgba(color[0], 0.1),
              shadowBlur: 10
            }
          },
          data: yAxisData1
        },
        {
          name: '采纳',
          type: 'line',
          smooth: true,
          // showSymbol: false,
          symbolSize: 8,
          zlevel: 3,
          lineStyle: {
            normal: {
              color: color[1],
              shadowBlur: 3,
              shadowColor: hexToRgba(color[1], 0.5),
              shadowOffsetY: 0
            }
          },
          areaStyle: {
            normal: {
              color: new Echarts.graphic.LinearGradient(
                0, // graphic 是原生图形元素组件。可以支持的图形元素包括：
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: hexToRgba(color[1], 0.3)
                  },
                  {
                    offset: 1,
                    color: hexToRgba(color[1], 0.1)
                  }
                ],
                false
              ),
              shadowColor: hexToRgba(color[1], 0.1),
              shadowBlur: 10
            }
          },
          data: yAxisData2
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped >
// 头部下面整体部分
.downbigboxx {
  width: 1840px;
  height: 850px;
  background-color: #eaf2f8;
  margin-left: 40px;
  // 下面整体盒子头部
  .topheader {
    height: 250px;
    width: 1760px;
    background-color: #ffffff;
    margin-left: 40px;
    // padding-top: 10px;
    .everyoneflex {
      display: flex;
      .everyone {
        // display: flex;
        // flex-wrap: wrap;
        width: 300px;
        height: 150px;
        background-color: #75b4ff;
        border-radius: 7px;
        margin-top: 50px;
        margin-left: 43px;
        .firstimag {
          width: 300px;
          height: 150px;
          background-color: #75b4ff;
          border: none;
          .iimg {
            width: 85px;
            height: 85px;
            padding-top: 12px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .minjing {
            margin-top: -80px;
            margin-left: 120px;
            color: #ffffff;
            font-weight: 700;
          }
          .zongshu {
            margin-top: 20px;
            margin-left: 120px;
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
      .everytwo {
        // display: flex;
        // flex-wrap: wrap;
        width: 300px;
        height: 150px;
        background-color: #ffbb7f;
        border-radius: 7px;
        margin-top: 50px;
        margin-left: 43px;
        .firstimag {
          width: 300px;
          height: 150px;
          background-color: #ffbb7f;
          border: none;
          .iimg {
            width: 85px;
            height: 85px;
            padding-top: 12px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .minjing {
            margin-top: -80px;
            margin-left: 120px;
            color: #ffffff;
            font-weight: 700;
          }
          .zongshu {
            margin-top: 20px;
            margin-left: 120px;
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
      .everythree {
        // display: flex;
        // flex-wrap: wrap;
        width: 300px;
        height: 150px;
        background-color: #b68dfe;
        border-radius: 7px;
        margin-top: 50px;
        margin-left: 43px;
        .firstimag {
          width: 300px;
          height: 150px;
          background-color: #b68dfe;
          border: none;
          .iimg {
            width: 85px;
            height: 85px;
            padding-top: 12px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .minjing {
            margin-top: -80px;
            margin-left: 120px;
            color: #ffffff;
            font-weight: 700;
          }
          .zongshu {
            margin-top: 20px;
            margin-left: 120px;
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
      .everyfour {
        // display: flex;
        // flex-wrap: wrap;
        width: 300px;
        height: 150px;
        background-color: #ff98a8;
        border-radius: 7px;
        margin-top: 50px;
        margin-left: 43px;
        .firstimag {
          width: 300px;
          height: 150px;
          background-color: #ff98a8;
          border: none;
          .iimg {
            width: 85px;
            height: 85px;
            padding-top: 12px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .minjing {
            margin-top: -80px;
            margin-left: 120px;
            color: #ffffff;
            font-weight: 700;
          }
          .zongshu {
            margin-top: 20px;
            margin-left: 120px;
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
      .everysix {
        // display: flex;
        // flex-wrap: wrap;
        width: 300px;
        height: 150px;
        background-color: #ff98a8;
        border-radius: 7px;
        margin-top: 50px;
        margin-left: 43px;
        .firstimag {
          width: 300px;
          height: 150px;
          background-color: #ff98a8;
          border: none;
          .iimg {
            width: 85px;
            height: 85px;
            padding-top: 12px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .minjing {
            margin-top: -80px;
            margin-left: 120px;
            color: #ffffff;
            font-weight: 700;
          }
          .zongshu {
            margin-top: 20px;
            margin-left: 120px;
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
      .everyseven {
        // display: flex;
        // flex-wrap: wrap;
        width: 300px;
        height: 150px;
        background-color: #fea966;
        border-radius: 7px;
        margin-top: 50px;
        margin-left: 43px;
        .firstimag {
          width: 300px;
          height: 150px;
          background-color: #fea966;
          border: none;
          .iimg {
            width: 85px;
            height: 85px;
            padding-top: 12px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .minjing {
            margin-top: -80px;
            margin-left: 120px;
            color: #ffffff;
            font-weight: 700;
          }
          .zongshu {
            margin-top: 20px;
            margin-left: 120px;
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
      .everyeigh {
        // display: flex;
        // flex-wrap: wrap;
        width: 300px;
        height: 150px;
        background-color: #bf98fe;
        border-radius: 7px;
        margin-top: 50px;
        margin-left: 43px;
        .firstimag {
          width: 300px;
          height: 150px;
          background-color: #bf98fe;
          border: none;
          .iimg {
            width: 85px;
            height: 85px;
            padding-top: 12px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .minjing {
            margin-top: -80px;
            margin-left: 120px;
            color: #ffffff;
            font-weight: 700;
          }
          .zongshu {
            margin-top: 20px;
            margin-left: 120px;
            font-size: 30px;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }
    }
    .everyfive {
      // display: flex;
      // flex-wrap: wrap;
      width: 300px;
      height: 150px;
      background-color: #07db67;
      border-radius: 7px;
      margin-top: 50px;
      margin-left: 43px;
      .firstimag {
        width: 300px;
        height: 150px;
        background-color: #07db67;
        border: none;
        .iimg {
          width: 85px;
          height: 85px;
          padding-top: 12px;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .minjing {
          margin-top: -80px;
          margin-left: 120px;
          color: #ffffff;
          font-weight: 700;
        }
        .zongshu {
          margin-top: 20px;
          margin-left: 120px;
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
        }
      }
    }
  }
  .mainbody {
    height: 580px;
    width: 1760px;
    margin-left: 40px;
    // background-color: darkturquoise;
    margin-top: 20px;
    display: flex;
  }
  // 下面整体盒子左面折线图
  .leftzhexian {
    width: 1200px;
    height: 570px;
    background-color: greenyellow;
    // 折线图部分
    .echarts {
      width: 1200px;
      height: 470px;
      //   padding-left: 0;
    }
  }
  // 下面整体盒子右面图文
  .righttuwen {
    width: 560px;
    height: 568px;
    margin-left: 20px;
     user-select: none;
    // 数据统计部分
    .tongjibufen {
      // display: flex;
      width: 540px;
      height: 568px;
      .year {
        //   margin-left: 140px;
        cursor: pointer;
      }
      .num {
        color: #646464;
        font-weight: 700;
        font-size: 18px;
      }
      .toplia {
        display: flex;
        .everyone {
          margin-right: 20px;
          .topport {
            // margin-top: 30px;
            font-size: 16px;
            color: #656565;
            text-align: center;
            padding-top: 10px;
          }
          .ball {
            margin-top: 50px;
            background-image: url(../../assets/img/tjsb.png);
            height: 180px;
            width: 180px;
            margin-left: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .third {
              text-align: center;
              padding-top: 60px;
              font-size: 34px;
              font-weight: 700;
              color: black;
            }
          }
          .balltwo {
            margin-top: 50px;
            background-image: url(../../assets/img/tjcn.png);
            height: 180px;
            width: 180px;
            margin-left: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .third {
              text-align: center;
              padding-top: 60px;
              font-size: 34px;
              font-weight: 700;
              color: black;
            }
          }
          .ballthree {
            margin-top: 50px;
            background-image: url(../../assets/img/tjqj.png);
            height: 180px;
            width: 180px;
            margin-left: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .third {
              text-align: center;
              padding-top: 60px;
              font-size: 34px;
              font-weight: 700;
              color: black;
            }
          }
           .ballfour {
            margin-top: 50px;
            background-image: url(../../assets/img/tjzc.png);
            height: 180px;
            width: 180px;
            margin-left: 30px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .third {
              text-align: center;
              padding-top: 60px;
              font-size: 34px;
              font-weight: 700;
              color: black;
            }
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
        color: #ffffff;
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
          background-color:#ffa13f;
        }
        .shenti {
          width: 35px;
          height: 18px;
          border: 2px solid #ffffff;
          background-color: #a1a1a1;
          border-radius: 35px 35px 0 0;
          margin-left: 5px;
          background-color:#ffa13f
        }
      }
    }
}
</style>
