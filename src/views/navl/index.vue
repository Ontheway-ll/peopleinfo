<template>
  <div>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <!-- 头部下面的整体大盒子 -->
    <div class="downbigbox">
      <!-- 下面大盒子左侧 -->
      <div class="bigboxleft">
        <div class="heping">向阳路</div>
        <div class="lines"></div>
        <div class="heping">王顶堤</div>
        <div class="lines"></div>
        <div class="heping">八里台</div>
        <div class="lines"></div>
        <div class="heping">学府街</div>
        <div class="lines"></div>
        <div class="heping">华苑</div>
        <div class="lines"></div>
        <div class="heping">兴南</div>
        <div class="lines"></div>
        <div class="heping">万兴</div>
        <div class="lines"></div>
        <div class="heping">嘉陵道</div>
        <div class="lines"></div>
        <div class="heping">广开</div>
        <div class="lines"></div>
        <div class="heping">鼓楼</div>
        <div class="lines"></div>
        <div class="heping">体育中心</div>
        <div class="lines"></div>
        <div class="heping">水上公园</div>
        <div class="lines"></div>
      </div>
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
                <div class="minjing">神秘力量总数</div>
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
          <div class="kaorighttop"></div>
          <!-- 整体靠右下部分 -->
          <div class="kaorightdown"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Echarts from 'echarts'
import LayoutHeader from '@/components/home/layout-header'
export default {
  data () {
    return {}
  },
  components: {
    'layout-header': LayoutHeader
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.downbigbox {
  display: flex;
  .bigboxleft {
    user-select: none;
    cursor: pointer;
    height: 820px;
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
    .lines {
      height: 1px;
      border-top: solid #ffffff 1px;
    }
  }
  .bixboxright {
    display: flex;
    width: 1550px;
    height: 800px;
    margin-top: 20px;
    margin-left: 20px;
    background-color: #ccc;
    .kaoleft {
      width: 400px;
      height: 800px;
      .everysmall {
        margin-bottom: 8px;
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
            .shuliangtwo{
              margin-left: 30px;
              color: #2e64ff;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangthree{
              margin-left: 30px;
              color: #4df7ea;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangfour{
               margin-left: 30px;
              color: #14ec82;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangfive{
              margin-left: 30px;
              color: #fb936d;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangsix{
                 margin-left: 30px;
              color: #fd70af;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangseven{
                margin-left: 30px;
              color: #eede2a;
              font-size: 26px;
              font-weight: 700;
              margin-top: 5px;
            }
            .shuliangeight{
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
      background-color: red;
      margin-left: 20px;
      .kaorighttop {
        height: 300px;
        width: 1130px;
        border-radius: 20px;
        background-color: coral;
      }
      .kaorightdown {
        height: 480px;
        width: 1130px;
        background-color: cornflowerblue;
        margin-top: 20px;
        border-radius: 20px;
      }
    }
  }
}
</style>
