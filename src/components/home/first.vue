<template>
  <div class="content">
    <div class="goodmaoing">早上好 , 欢迎登录人力情报系统 !</div>
    <div class="weather">2020年6月30日，多云转晴</div>
    <div class="bigbox">
      <div class="smallbox">
        <div class="total">民警总数</div>
        <div class="number">300000</div>
      </div>

      <div class="smallbox">
        <div class="total">带情民警总数</div>
        <div class="number">300000</div>
      </div>

      <div class="smallbox">
        <div class="total">秘密力量总数</div>
        <div class="number">300000</div>
      </div>

      <div class="smallbox">
        <div class="total">发展信息员总数</div>
        <div class="number">300000</div>
      </div>

      <div class="smallbox">
        <div class="total">热情市民总数</div>
        <div class="number">300000</div>
      </div>

      <div class="smallbox">
        <div class="total">上报信息总数</div>
        <div class="number">300000</div>
      </div>

      <div class="smallbox">
        <div class="total">采纳信息总数</div>
        <div class="number">380000000</div>
      </div>

      <div class="smallbox">
        <div class="total">应用信息总数</div>
        <div class="number">300000</div>
      </div>
    </div>
    <!-- 中间部分 -->
    <el-card class="box-card" shadow="always">
      <div slot="header">
        <span>数据统计</span>
        <el-dropdown class="year" @command="clickMenu" style="float: right; padding: 3px 0">
          <span class="el-dropdown-link">
            年
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">2020</el-dropdown-item>
            <el-dropdown-item command="b">2019</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="shuju">
        <div class="tutu">
          <div>
            <img src="../../assets/img/数据统计_07.png" alt />
          </div>
          <div class="midbox">
            <div class="shangbao">上报</div>
            <div class="tiao">
              3000
              <span class="tiaoaa">条</span>
            </div>
          </div>
        </div>

        <div class="tutu">
          <div>
            <img src="../../assets/img/数据统计_09.png" alt />
          </div>
          <div class="midbox">
            <div class="shangbao">采纳</div>
            <div class="tiao">
              3000
              <span class="tiaoaa">条</span>
            </div>
          </div>
        </div>

        <div class="tutu">
          <div>
            <img src="../../assets/img/数据统计_11.png" alt />
          </div>
          <div class="midbox">
            <div class="shangbao">请奖</div>
            <div class="tiao">
              3000
              <span class="tiaoaa">条</span>
            </div>
          </div>
        </div>

        <div class="tutu">
          <div>
            <img src="../../assets/img/数据统计_13.png" alt />
          </div>
          <div class="midbox">
            <div class="shangbao">注册</div>
            <div class="tiao">
              3000
              <span class="tiaoaa">条</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 折线图 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>上报 、采纳 、应用 ( 信息 ) 、信息数量</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div> </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    clickMenu (command) {
      if (command === 'a') {
        // 2020年，请求2020年数据
      }
    }
  }
}
</script>

<style lang="less" scoped >
.content {
  // display: flex;
  height: 220px;
  background-image: url(../../assets/img/数据统计_03.png);
  background-size: cover;
  background-repeat: no-repeat;
  margin: 20px;
  background-position: center;
  border-radius: 10px;
  .goodmaoing {
    margin-left: 40px;
    padding-top: 15px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
  }
  .weather {
    margin-left: 40px;
    margin-top: 10px;
    color: #ffffff;
  }
  .bigbox {
    display: flex;
    margin-left: 40px;
    margin-top: 26px;
    .smallbox {
      margin-right: 60px;
      // border: 1px solid #ccc;
      width: 120px;
      height: 100px;
      background-color: rgba(255, 255, 255, 0.2);
      .total {
        color: #ffffff;
        text-align: center;
        margin-top: 15px;
        font-weight: 700;
      }
      .number {
        color: #ffffff;
        text-align: center;
        margin-top: 20px;
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
  // 数据统计部分】
  .box-card {
    margin-top: 35px;
    .shuju {
      display: flex;

      .tutu {
        display: flex;
        margin-right: 160px;
        margin-left: 50px;
        .midbox {
          margin-left: 50px;
          .shangbao {
            margin-top: 10px;
            margin-left: 25px;
            font-size: 16px;
          }
          .tiao {
            font-size: 24px;
            margin-top: 10px;
            margin-left: -28px;
            color: #8fd3f4;
            .tiaoaa {
              color: black;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  // 折线图部分
}
</style>
