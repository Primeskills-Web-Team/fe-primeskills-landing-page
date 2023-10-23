<template>
  <div class="section-product flex items-center justify-center">
    <div class="bg-img" />
    <div class="container">
      <div class="out">Our Products & Services</div>
      <div class="provide">
        Primeskills provides comprehensive
        <span class="end">end-to-end consulting</span> services
        in immersive technologies.
      </div>
      <!-- <div class="btn-readmore flex items-center justify-center cursor-pointer">
        READ MORE
      </div> -->
      <div class="ai-card flex flex-row">
        <img src="~/assets/img/ai.svg" class="logo-ai" />
        <svg
          class="line-ai"
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="58"
          viewBox="0 0 90 58"
          fill="none"
        >
          <path
            d="M4 0V18C4 37.8823 20.1177 54 40 54H90"
            stroke="#2B6DBA"
            stroke-opacity="0.48"
            stroke-width="8"
          />
        </svg>
        <div class="box-ai flex flex-row flex-nowrap items-center justify-around data-dekstop" style="overflow-x:auto;overflow-y:hidden">
          <div class="pro-card" @click="dialogVisible = true">
            <img src="~/assets/img/p1.svg" class="img-pro" />
            <div class="text-pro">Virtual Reality</div>
          </div>
          <div class="pro-card" @click="dialogVisible2 = true">
            <img src="~/assets/img/p2.svg" class="img-pro" />
            <div class="text-pro">Augmented Reality</div>
          </div>
          <div class="pro-card" @click="dialogVisible3 = true">
            <img src="~/assets/img/p3.svg" class="img-pro" />
            <div class="text-pro">Multiplayer Learning</div>
          </div>
          <div class="pro-card" @click="dialogVisible4 = true">
            <img src="~/assets/img/p4.svg" class="img-pro" />
            <div class="text-pro">
              Gamified Assesment <br />
              and Learning
            </div>
          </div>
        </div>
        <div class="box-ai flex flex-row flex-nowrap items-center justify-around data-mobile" style="overflow-x:auto;overflow-y:hidden">
          <div class="pro-card" @click="dialogVisible5 = true">
            <img src="~/assets/img/p1.svg" class="img-pro" />
            <div class="text-pro">Virtual Reality</div>
          </div>
          <div class="pro-card" @click="dialogVisible6 = true">
            <img src="~/assets/img/p2.svg" class="img-pro" />
            <div class="text-pro">Augmented Reality</div>
          </div>
          <div class="pro-card" @click="dialogVisible7 = true">
            <img src="~/assets/img/p3.svg" class="img-pro" />
            <div class="text-pro">Multiplayer Learning</div>
          </div>
          <div class="pro-card" @click="dialogVisible8 = true">
            <img src="~/assets/img/p4.svg" class="img-pro" />
            <div class="text-pro">
              Gamified Assesment <br />
              and Learning
            </div>
          </div>
        </div>
      </div>
      <div class="powered flex items-center justify-center ">
        <div class="text-pow">
          Powered<br>By
        </div>
        <img src="~/assets/img/ai.svg" class="img-pow" />
      </div>
    </div>
    <div class="btn-next cursor-pointer">
      <NuxtLink :to="{ path: '/', hash: '#portfolio' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
        >
          <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_37_83)" />
          <path
            d="M25 15L32.5 23L40 15"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_37_83"
              x1="33"
              y1="0"
              x2="33"
              y2="66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#438ED3" />
              <stop offset="1" stop-color="#104679" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </NuxtLink>
    </div>
    <el-dialog
      v-model="dialogVisible"
      width="530px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/p1.svg" class="img-dialog" />
          <div class="title-content">Virtual Reality</div>
          <div class="desc-content">
            Experience learning that transcends traditional boundaries with our
            VR training solutions. Dive into interactive simulations, and
            realistic scenarios, and acquire practical skills. We, as leading VR
            consultants, have redefined traditional training, evidenced by our
            partnerships with industry leaders like CIMB Niaga, who have adopted
            our innovative approach to enhance their training programs.
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible2"
      width="530px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/p2.svg" class="img-dialog" />
          <div class="title-content">Augmented Reality</div>
          <div class="desc-content">
            Our AR solutions seamlessly blend virtual elements with the real
            world, taking learning and interaction to new heights. As pioneers
            in AR consulting, we enable complex concepts visualization and
            interactive experiences that enhance understanding.
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible3"
      width="530px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/p3.svg" class="img-dialog" />
          <div class="title-content">Multiplayer Learning</div>
          <div class="desc-content">
            Embrace the power of collaboration and connectivity with Multiplayer
            Learning. Join forces with fellow learners in shared virtual spaces,
            where teamwork and cooperation flourish. Engage in interactive
            activities, solve challenges together, and harness the collective
            intelligence of a diverse community.
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible4"
      width="530px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/p4.svg" class="img-dialog" />
          <div class="title-content">Gamified Assessment & Learning</div>
          <div class="desc-content">
            Unlock a new era of objective evaluation with our Gamified
            Assessment capabilities. Through immersive virtual environments, we
            provide precise and comprehensive assessments of skills,
            competencies, and performance. Our Gamified Assessment
            revolutionizes traditional evaluation methods, offering insightful
            feedback and empowering individuals and organizations to make
            informed decisions.
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog
      v-model="dialogVisible5"
      width="95%"
      height="100%"
      top="15vh"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-mobile flex items-center flex-col justify-start">
        <div class="header-dialog">
          <div style="transform: rotate(180deg); margin-top: 5px">
            <div class="triangle" />
          </div>
          <div class="content-dialog flex flex-col items-center">
            <div class="intro">Virtual Reality</div>
            <div class="at">
              Experience learning that transcends traditional boundaries with our VR training solutions. Dive into interactive simulations, and realistic scenarios, and acquire practical skills. We, as leading VR consultants, have redefined traditional training, evidenced by our partnerships with industry leaders like CIMB Niaga, who have adopted our innovative approach to enhance their training programs.
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible6"
      width="95%"
      height="100%"
      top="15vh"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-mobile flex items-center flex-col justify-start">
        <div class="header-dialog">
          <div style="transform: rotate(180deg); margin-top: 5px">
            <div class="triangle" />
          </div>
          <div class="content-dialog flex flex-col items-center">
            <div class="intro">Augmented Reality</div>
            <div class="at">
              Our AR solutions seamlessly blend virtual elements with the real world, taking learning and interaction to new heights. As pioneers in AR consulting, we enable complex concepts visualization and interactive experiences that enhance understanding.            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible7"
      width="95%"
      height="100%"
      top="15vh"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-mobile flex items-center flex-col justify-start">
        <div class="header-dialog">
          <div style="transform: rotate(180deg); margin-top: 5px">
            <div class="triangle" />
          </div>
          <div class="content-dialog flex flex-col items-center">
            <div class="intro">Multiplayer Learning</div>
            <div class="at">
              Embrace the power of collaboration and connectivity with Multiplayer Learning. Join forces with fellow learners in shared virtual spaces, where teamwork and cooperation flourish. Engage in interactive activities, solve challenges together, and harness the collective intelligence of a diverse community.            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible8"
      width="95%"
      height="100%"
      top="15vh"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-mobile flex items-center flex-col justify-start">
        <div class="header-dialog">
          <div style="transform: rotate(180deg); margin-top: 5px">
            <div class="triangle" />
          </div>
          <div class="content-dialog flex flex-col items-center">
            <div class="intro">Gamified Assessment & Learning</div>
            <div class="at">
              Unlock a new era of objective evaluation with our Gamified Assessment capabilities. Through immersive virtual environments, we provide precise and comprehensive assessments of skills, competencies, and performance. Our Gamified Assessment revolutionizes traditional evaluation methods, offering insightful feedback and empowering individuals and organizations to make informed decisions.            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dialogVisible = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);
const dialogVisible4 = ref(false);

const dialogVisible5 = ref(false);
const dialogVisible6 = ref(false);
const dialogVisible7 = ref(false);
const dialogVisible8 = ref(false);

const handleClose = (done: () => void) => {
  done();
};
</script>

<style lang="scss" scoped>.dialog-mobile {
  width: 100%;
  height: 100%;
  background: #1799e2;
  border-radius: 15px;
  .header-dialog {
    border-radius: 9px 9px 0px 0px;
    height: 20px;
    width: 100%;
    background: #0a528c;
    .triangle,
    .triangle:before,
    .triangle:after {
      width: 1em;
      height: 1em;
    }
    .triangle {
      transform: rotate(90deg);
      overflow: hidden;
      position: relative;
      margin: 0px auto 0;
      border-radius: 20%;
      transform: translateY(50%) rotate(30deg) skewY(30deg) scaleX(0.866);
      cursor: pointer;
      pointer-events: none;
    }
    .triangle:before,
    .triangle:after {
      position: absolute;
      background: white;
      pointer-events: auto;
      content: "";
    }
    .triangle:before {
      border-radius: 20% 20% 20% 53%;
      transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
        skewX(30deg) scaleY(0.866) translateX(-24%);
    }
    .triangle:after {
      border-radius: 20% 20% 53% 20%;
      transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
        skewX(-30deg) scaleY(0.866) translateX(24%);
    }
  }
  .content-dialog {
    min-height: 200px;
    border-radius: 0px 0px 10px 10px;
    background: #1799e2;
    padding: 20px;
    .intro {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .where {
      color: #fff;
      font-family: "okta";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .at {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      .data-bold {
        color: #fff;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
      }
    }
  }
}
.dialog-btn {
  height: 100%;
  position: relative;
  width: 100%;
  background: rgb(27, 54, 97);
  background: linear-gradient(
    356deg,
    rgba(27, 54, 97, 1) 0%,
    rgba(21, 44, 81, 1) 0%,
    rgba(16, 35, 65, 1) 100%
  );
  border-radius: 20px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;
  .content-data {
    z-index: 2;
    padding: 20px;
    .img-dialog {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }
    .title-content {
      color: #4da3f1;
      text-align: start;
      font-family: "okta";
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .desc-content {
      color: #fff;
      font-family: "okta";
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
    }
  }
  .bg-grad {
    z-index: 1;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 500px;
    background: linear-gradient(180deg, rgba(7, 25, 73, 0) 0%, #071949 66.12%);
  }
}
.section-product {
  height: 100vh;
  width: 100%;
  .bg-img {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-image: url("../assets/img/bg-3.jpg");
  }
  .container {
    z-index: 2;

    padding-left:10%;
    padding-right: 10%;
    .out {
      color: #fff;
      font-family: "okta";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.16px;
    }
    .provide {
      width:746px;
      margin-top: 25px;
      margin-bottom: 25px;
      color: #fff;
      font-family: "okta";
      font-size: 44px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.16px;
      line-height: 55px; /* 55.044px */

      .end {
        color: #6ebfed;
        font-family: "okta";
        font-size: 44px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.16px;
      }
    }
    .btn-readmore {
      margin-bottom: 70px;
      margin-top: 20px;
      border-radius: 6px;
      background: #546792;
      width: 135px;
      height: 30px;
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1.885px;
    }
    .btn-readmore:hover {
      opacity: 0.8;
    }
    .ai-card {
      margin-top:90px;
      position: relative;
      .logo-ai {
        position: absolute;
        top: 60px;
        left: -40px;
      }
      .line-ai {
        position: absolute;
        bottom: 51px;
        left: 10px;
      }
      .box-ai {
        margin-left: 100px;
        width: 713px;
        height: 227px;
        flex-shrink: 0;
        background: transparent;
        border-radius: 33px;
        border: 7px solid rgba(43, 109, 186, 0.48);
        .pro-card {
          cursor: pointer;
          .img-pro {
            margin-bottom: 23px;
            width: 126px;
            height: 126px;
          }
          .text-pro {
            color: #fff;
            text-align: center;
            font-family: "okta";
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
          }
        }
        .pro-card:hover {
          filter: brightness(170%);
          .text-pro {
            font-weight: bold;
          }
        }
      }
      .data-dekstop {
        display: flex;
      }
      .data-mobile {
        display: none;
      }
    }
    .powered {
      display: none;
    }
  }
  .btn-next {
    position: absolute;
    bottom: -30px;
    z-index: 2;
  }
}
// mobile
@media only screen and (max-width: 1030px) {
  .section-product {
    min-height: 900px;
    .container {
      padding-left: 0px;
      padding-right: 0px;
      .out {
        padding-left: 20px;
        padding-right: 20px;
        font-size:16px;
      }
      .provide {
        
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        color: #FFF;
        font-family: 'okta';
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.16px;
        .end {
          font-size: 25px;
          line-height: normal;
          color: #6EBFED;
          font-family: 'okta';
          font-size: 25px;
          font-style: normal;
          font-weight: 500;
          letter-spacing: 0.16px;
        }
      }
      .ai-card {
        margin-top:30px;
        padding-left: 0px;
        padding-right: 0px;
        .logo-ai {
          display: none;
        }
        .line-ai {
          display: none;
        }
        .box-ai {
          border: 0px;
          margin-left:0px;
          width:100%;
          justify-content: start;
          overflow-x:scroll;
          overflow-y:hidden;
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none; 
          .pro-card {
            min-width: 185px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            justify-items: center;
            .img-pro {
              margin-left: auto;
              margin-right: auto;
            }
          }
        }
        .box-ai::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }
        
      .data-dekstop {
        display: none ;
      }
      .data-mobile {
        display: flex;
      }
      }
      .powered {
        margin-top:50px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        .text-pow {
          color: #FFF;
          text-align: right;
          font-family: 'okta' Neue;
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 14px;
          letter-spacing: 0.16px;
        }
        .img-pow {
          margin-left:13px;
          width: 78px;
          height: 40px;
        }
      }
    }
  }
}

</style>
