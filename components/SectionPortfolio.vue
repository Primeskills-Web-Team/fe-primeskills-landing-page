<template>
  <div class="portofolio-section">
    <ClientOnly>
      <carousel
        class="carousel-dekstop"
        :items-to-show="1.1"
        touchDrag
        mouseDrag
        v-model="currentSlide"
      >
        <slide
          v-for="(slide, index) in data"
          :key="slide"
          class="card-carousel flex items-center"
          :style="{ backgroundImage: 'url(' + slide + ')' }"
        >
          <div
            v-if="index === 0"
            class="card-box flex flex-col justify-start items-start"
          >
            <img
              src="~/assets/img/cimb.svg"
              class="logo-box"
              style="margin-top: 98px"
            />
            <div class="text-box">
              The integration of <span class="bold-text">VR Training</span> has
              injected a new <br />
              level of excitement into CIMB Niaga's training sessions.
            </div>
            <div
              class="btn-readmore flex items-center justify-center"
              @click="toCIMB()"
            >
              READ MORE
            </div>
          </div>
          <div
            v-if="index === 1"
            class="card-box flex flex-col justify-start items-start"
            style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img
              src="~/assets/img/pcu.svg"
              class="logo-box"
              style="height: 73px; margin-bottom: 44px; margin-top: 65px"
            />
            <div class="text-box">
              Primeskills and Petra Digital Institute have joined <br />
              forces to create innovative learning using <br />
              Visual Novels and Virtual Reality.
            </div>
            <div
              class="btn-readmore flex items-center justify-center"
              style="background: #19304b"
              @click="toPCU()"
            >
              READ MORE
            </div>
          </div>
          <div
            v-if="index === 2"
            class="card-box flex flex-col justify-start items-start"
            style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img
              src="~/assets/img/kementrian.svg"
              class="logo-box"
              style="height: 73px; margin-bottom: 21px; margin-top: 56px"
            />
            <div class="text-box">
              Primeskills and the Ministry of Home Affairs (Kemendagri) <br />
              have entered into a collaboration aimed at crafting an <br />
              advanced and captivating assessment framework.
            </div>
            <div
              class="btn-readmore flex items-center justify-center"
              style="background: #19304b"
              @click="toKementrian()"
            >
              READ MORE
            </div>
          </div>
        </slide>
      </carousel>
      <carousel
        class="carousel-mobile"
        :items-to-show="1"
        touchDrag
        mouseDrag
        v-model="currentSlide"
      >
        <slide
          v-for="(slide, index) in data"
          :key="slide"
          class="card-carousel flex items-center"
          :style="{ backgroundImage: 'url(' + slide + ')' }"
        >
          <div
            v-if="index === 0"
            class="card-box flex flex-col justify-center items-center"
          >
            <img src="~/assets/img/cimb.svg" class="logo-box" />
            <div class="text-box">
              The integration of <span class="bold-text">VR Training</span> has
              injected a new <br />
              level of excitement into CIMB Niaga's training sessions.
            </div>
            <div
              class="btn-readmore flex items-center justify-center"
              @click="toCIMB()"
            >
              READ MORE
            </div>
          </div>
          <div
            v-if="index === 1"
            class="card-box flex flex-col justify-center items-center"
            style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img src="~/assets/img/pcu.svg" class="logo-box" />
            <div class="text-box">
              Primeskills and Petra Digital Institute have joined <br />
              forces to create innovative learning using <br />
              Visual Novels and Virtual Reality.
            </div>
            <div
              class="btn-readmore flex items-center justify-center"
              style="background: #19304b"
              @click="toPCU()"
            >
              READ MORE
            </div>
          </div>
          <div
            v-if="index === 2"
            class="card-box flex flex-col justify-center items-center"
            style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img
              src="~/assets/img/kementrian.svg"
              class="logo-box"
              style="height: 63px; margin-bottom: 21px; margin-top: 0px"
            />
            <div class="text-box">
              Primeskills and the Ministry of Home Affairs (Kemendagri) <br />
              have entered into a collaboration aimed at crafting an <br />
              advanced and captivating assessment framework.
            </div>
            <div
              class="btn-readmore flex items-center justify-center"
              style="background: #19304b"
              @click="toKementrian()"
            >
              READ MORE
            </div>
          </div>
        </slide>
      </carousel>

      <div class="flex flex-col items-center justify-center w-full btn-slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="12"
          viewBox="0 0 58 12"
          fill="none"
          style="margin-bottom: 38px"
        >
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="#D9D9D9"
            :fill-opacity="currentSlide === 0 ? '1' : '0.5'"
            @click="currentSlide = 0"
            class="cursor-pointer"
          />
          <circle
            cx="52"
            cy="6"
            r="6"
            fill="#D9D9D9"
            :fill-opacity="currentSlide === 2 ? '1' : '0.5'"
            @click="currentSlide = 2"
            class="cursor-pointer"
          />
          <circle
            cx="29"
            cy="6"
            r="6"
            fill="#D9D9D9"
            :fill-opacity="currentSlide === 1 ? '1' : '0.5'"
            @click="currentSlide = 1"
            class="cursor-pointer"
          />
        </svg>
        <svg
          @click="currentSlide > 0 ? currentSlide-- : ''"
          class="prev-mobile"
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="52"
          viewBox="0 0 51 52"
          fill="none"
        >
          <g filter="url(#filter0_bd_13_141)">
            <circle
              cx="25.2553"
              cy="22.0001"
              r="18.2553"
              transform="rotate(180 25.2553 22.0001)"
              fill="#071949"
              fill-opacity="0.6"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            d="M28.766 14.9788L20.3404 22.3511L28.766 29.7234"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
          <defs>
            <filter
              id="filter0_bd_13_141"
              x="-0.999985"
              y="-4.25537"
              width="52.5106"
              height="55.5107"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_13_141"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_13_141"
                result="effect2_dropShadow_13_141"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_13_141"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <svg
          @click="currentSlide < 2 ? currentSlide++ : ''"
          class="next-mobile"
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="52"
          viewBox="0 0 51 52"
          fill="none"
        >
          <g filter="url(#filter0_bd_13_138)">
            <circle
              cx="25.2553"
              cy="21.9999"
              r="18.2553"
              fill="#071949"
              fill-opacity="0.6"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            d="M21.7447 29.0212L30.1702 21.6489L21.7447 14.2766"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
          <defs>
            <filter
              id="filter0_bd_13_138"
              x="-1"
              y="-4.25537"
              width="52.5106"
              height="55.5107"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_13_138"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_13_138"
                result="effect2_dropShadow_13_138"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_13_138"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="flex flex-col items-center justify-center w-full custom-page">
        <NuxtLink :to="{ path: '/', hash: '#about' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            class="custom-dekstop"
            height="13"
            viewBox="0 0 19 13"
            fill="none"
          >
            <path
              d="M2 2L9.5 10L17 2"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="40"
            viewBox="0 0 66 40"
            fill="none"
            class="custom-mobile"
          >
            <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_13_144)" />
            <path
              d="M25 15L32.5 23L40 15"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_144"
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
    </ClientOnly>
  </div>
</template>
<script>
import img1 from "~/assets/img/c1.png";
import img2 from "~/assets/img/c2.png";
import img3 from "~/assets/img/c3.png";
export default {
  components: {},
  data() {
    return {
      data: [img1, img2, img3],
      currentSlide: 0,
    };
  },
  created() {},
  methods: {
    toCIMB() {
      this.$router.push("cimb-portfolio");
    },
    toPCU() {
      this.$router.push("petra-portfolio");
    },
    toKementrian() {
      this.$router.push("kemendagri-portfolio");
    },
  },
};
</script>
<style lang="scss" scoped>
.portofolio-section {
  .carousel-dekstop {
    display: block;
  }
  .carousel-mobile {
    display: none;
  }
  .title-por {
    display: none;
  }
  .card-carousel {
    position: relative;
    // box-shadow: 2px 1px 50px;
    box-shadow: 0px 5px 10px 22px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .card-box {
      position: absolute;
      left: 17%;
      padding-left: 55px;
      width: 633px;
      height: 383px;
      border-radius: 21px;
      border: 0.5px solid #858585;
      background: rgba(120, 17, 20, 0.6);
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(9.5px);
      .logo-box {
        margin-bottom: 16px;
        height: 46px;
      }
      .text-box {
        text-align: left;
        color: #fff;
        font-family: "okta";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        .bold-text {
          color: #fff;
          font-family: "okta";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
      .btn-readmore {
        position: absolute;
        bottom: 31px;
        right: 36px;
        width: 135px;
        height: 30px;
        border-radius: 6px;
        background: #ec1f27;
        color: #fff;
        text-align: center;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1.885px;
        cursor: pointer;
      }
      .btn-readmore:hover {
        opacity: 0.8;
      }
    }
  }
  .custom-page {
    cursor: pointer;
    position: absolute;
    bottom: 21px;
    .custom-dekstop {
      display: flex;
    }
    .custom-mobile {
      display: none;
    }
  }
  .btn-slide {
    position: absolute;
    bottom: 60px;
    .next-mobile {
      display: none;
    }
    .prev-mobile {
      display: none;
    }
  }
}

@media only screen and (max-width: 800px) {
  .portofolio-section {
    height: 770px;
    .title-por {
      position: absolute;
      top: 0px;
      z-index: 99;
      color: #fff;
      text-align: center;
      text-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.72);
      font-family: "okta";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
    }
    .carousel-dekstop {
      display: none;
    }
    .carousel-mobile {
      display: flex;
      .card-carousel {
        padding-left: 20px;
        padding-right: 20px;
        .card-box {
          position: static;
          width: 100%;
          height: 400px;
          padding: 20px;
          .logo-box {
            height: 40px;
            margin-top: 0px;
            object-fit: cover;
            margin-left: auto;
            margin-right: auto;
          }
          .text-box {
            margin-top: 10px;
            font-size: 18px;
            text-align: center;
            .bold-text {
              font-size: 18px;
            }
          }
          .btn-readmore {
            position: static;
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
          }
        }
      }
    }
    .btn-slide {
      position: absolute;
      bottom: 100px;
      .next-mobile {
        position: absolute;
        display: flex;
        right: 20px;
        bottom: 11px;
        cursor: pointer;
      }
      .prev-mobile {
        position: absolute;
        display: flex;
        left: 20px;
        bottom: 11px;
        cursor: pointer;
      }
    }
    .custom-page {
      position: absolute;
      bottom: 0px;
      cursor: pointer;
      .custom-dekstop {
        display: none;
      }
      .custom-mobile {
        display: flex;
      }
    }
  }
}
</style>
