<template>
  <div class="portfolio flex items-center justify-center">
    <div class="content-data flex items-center justify-center flex-col">
      <img
        src="~/assets/img/portfolio/logo_dark.svg"
        class="cursor-pointer logo-img"
        @click="toHome()"
      />
      <div class="title-por">Our Portfolios</div>
      <img src="~/assets/img/portfolio/bg_cimb.jpg" class="bg-img" />
      <div class="flex items-start flex-row mt-4 coloumn-sec">
        <div class="flex flex-col justify-start left-side mr-4 flex-auto">
          <img src="~/assets/img/portfolio/cimb.png" class="logo-img2" />
          <div class="desc">
            The integration of VR Training has injected a new level of
            excitement into CIMB Niaga's training sessions
          </div>
        </div>
        <div class="flex right-side flex-col">
          The technology transports employees into virtual environments where
          they can actively participate and apply their knowledge in realistic
          scenarios. This not only enhances their understanding but also allows
          for practical skill development in a risk-free and controlled
          setting. 
          <br />
          Together with CIMB Niaga, Primeskills
          <span class="bold-text"
            >have developed a range of training modules and deployed 300+ VR
            Headsets throughout Indonesia</span
          >
          to enhance their employees' understanding of crucial work-related
          scenarios. These modules cover essential topics such as
          <span class="bold-text"
            >fire safety training, customer transactions, and effective
            communication skills when dealing with customers over the
            phone.</span
          >
          <br />
          The increasing recognition and adoption of VR technology have paved
          the way for more effective and enjoyable training and learning
          experiences. We firmly believe that VR is not limited to gaming but
          holds immense potential for immersive and impactful training programs.
        </div>
      </div>
      <div class="next-portfolio flex flex-row">
        <div class="card-port">
          <img src="~/assets/img/c3.png" class="bg-card" />
          <div class="text-card">
            Primeskills and the Ministry of Home Affairs (Kemendagri) have
            entered into a collaboration aimed at crafting an advanced and
            captivating assessment framework.
          </div>
          <div
            class="btn-act flex items-center justify-center"
            @click="toKementrian()"
          >
            Read More
          </div>
        </div>
        <div class="card-port">
          <img src="~/assets/img/portfolio/bg_petra.jpg" class="bg-card" />
          <div class="text-card">
            Primeskills and Petra Digital Institute have joined forces to create
            innovative learning using Visual Novels and Virtual Reality.
          </div>
          <div
            class="btn-act flex items-center justify-center"
            @click="toPCU()"
          >
            Read More
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: [1, 2, 3],
      currentSlide: 0,
    };
  },
  created() {},
  methods: {
    toHome() {
      this.$router.push("/");
    },
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
.portfolio {
  background: #e8e9e4;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  .content-data {
    width: 898px;
    .logo-img {
      width: 142px;
      height: 32px;
    }
    .title-por {
      margin-top: 56px;
      margin-bottom: 42px;
      color: #000;
      font-family: "okta";
      font-size: 35px;
      font-style: normal;
      font-weight: 600;
    }
    .bg-img {
      width: 898px;
      height: 437px;
    }
    .left-side {
      .logo-img2 {
        margin-top: 20px;
        width: 341px;
        object-fit: cover;
      }
      .desc {
        margin-top: 22px;
        color: #071949;
        font-family: "okta";
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
      }
    }
    .right-side {
      max-width: 508px;
      height: 100%;
      color: #000;
      font-family: "okta";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      text-align: justify;
      .bold-text {
        color: #000;
        font-family: "okta";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
      }
    }
    .next-portfolio {
      margin-top: 90px;
      .card-port {
        position: relative;
        width: 337px;
        height: 317px;
        margin-right: 38px;
        border-radius: 13px;
        background: #fff;
        box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
        .bg-card {
          height: 154px;
          width: 100%;
          object-fit: cover;
        }
        .text-card {
          color: #000;
          font-family: "okta";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          padding: 14px 20px 14px 20px;
        }
        .btn-act {
          width: 89px;
          height: 23px;
          border-radius: 5px;
          background: #d9d9d9;
          cursor: pointer;
          color: #000;
          font-family: "okta";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
        .btn-act:hover {
          opacity: 0.9;
        }
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .portfolio {
    padding-left: 20px;
    padding-right: 20px;
    .content-data {
      width: 100%;
      .title-por {
        font-size: 25px;
        margin-bottom: 30px;
      }
      .bg-img {
        height: 200px;
        width: 100%;
        object-fit: cover;
      }
      .coloumn-sec {
        flex-direction: column;
      }
      .left-side {
        .logo-img2 {
          width: 200px;
          margin-left: auto;
          margin-right: auto;
        }
        .desc {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
      .next-portfolio {
        margin-top: 40px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 30px;
        .card-port {
          min-width: 300px;
        }
      }
    }
  }
}
</style>
