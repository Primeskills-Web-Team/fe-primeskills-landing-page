<template>
  <div class="primeskills">
    <div class="flex items-center justify-center navbar">
      <div class="container">
        <img
          src="~/assets/img/logo.png"
          @click="toHero()"
          class="cursor-pointer logo-img"
        />
      </div>
    </div>
    <div class="btn-blog" @click="toBlog()">Blog</div>
    <div
      class="btn-nav flex item-center justify-center noselect"
      style="position: fixed; z-index: 11"
      @click="nav = true"
    >
      <img src="~/assets/img/nav.svg" class="icon-img" />
    </div>
    <div v-show="nav" class="show-nav flex items-center jusitfy-center flex-col">
      <img
        src="~/assets/img/close.svg"
        class="icon-btn noselect cursor-pointer"
        @click="nav = false"
      />
      <div class="text-nav noselect" @click="toWhy()">Why Us</div>
      <div class="text-nav noselect" @click="toProduct()">Our Products & Services</div>
      <div class="text-nav noselect" @click="toPortfolio()">Our Portfolios</div>
      <div class="text-nav noselect" @click="toMyth()">
        Myth and Facts about Immersive Technology
      </div>
      <div class="text-nav noselect" @click="toBlog()">Blog</div>
    </div>
    <SectionHero id="hero" class="card-section" />
    <SectionWhyUs id="why" class="card-section" />
    <SectionProduct id="product" class="card-section" />
    <SectionPortfolio id="portfolio" class="card-section" />
    <SectionAbout id="about" class="card-section" />
    <SectionFooter id="footer" class="card-section" />
    <div
      class="btn-wa noselect flex noselect items-center justify-center"
      @click="toWa()"
    >
      <img src="~/assets/img/whatsapp.svg" class="icon-img" />
    </div>
    <div class="notif-img" v-if="notif">
      <div class="card-notif flex items-center justify-between">
        <div class="text-notif">
          Hello Mac Visitors! <br />
          For best Experience, please zoom out the website to 80% by pressing ⌘ - Thank
          You!
        </div>
        <div
          @click="closeNotif()"
          class="btn-close flex cursor-pointer items-center justify-center"
        >
          Close
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const nav = ref(false);
let notif = ref(true);
onMounted(() => {
  if (navigator.appVersion.indexOf("Mac") != -1) {
    notif.value = true;
  } else {
    notif.value = false;
  }
});

function toWa() {
  window.open(
    "https://api.whatsapp.com/send/?phone=62817719100&text&type=phone_number&app_absent=0",
    "_blank"
  );
}

function toBlog() {
  window.open("https://blog.primeskills.id/", "_blank");
}

function toHero() {
  window.scrollTo(0, 0);
}
function toWhy() {
  router.push({ path: "/", hash: "#why" });
  nav.value = false;
}
function toAbout() {
  router.push({ path: "/", hash: "#about" });
  nav.value = false;
}
function toProduct() {
  router.push({ path: "/", hash: "#product" });
  nav.value = false;
}
function toPortfolio() {
  router.push({ path: "/", hash: "#portfolio" });
  nav.value = false;
}
function toMyth() {
  router.push({ path: "/", hash: "#about" });
  nav.value = false;
}
function closeNotif() {
  notif.value = false;
}
</script>

<style lang="scss" scoped>
.primeskills {
  .btn-blog {
    position: fixed;
    top: 30px;
    right: 20px;
    color: #fff;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    font-family: "inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    z-index: 11;
  }
  .navbar {
    height: 80px;
    width: 100%;
    background: linear-gradient(
      180deg,
      #071949 19.79%,
      rgba(7, 25, 73, 0.71) 60.42%,
      rgba(7, 25, 73, 0) 100%
    );
    position: fixed;
    top: 0px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      display: flex;
      align-items: center;
      justify-content: right;
      .btn-blog:hover {
        text-decoration: underline;
      }
    }
    .logo-img {
      z-index: 2;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .btn-wa {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2;
    border-radius: 51px;
    background: #1db410;
    width: 48px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: "okta";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
  }
  .btn-wa:hover {
    opacity: 0.8;
  }
  .call-img {
    z-index: 2;
    position: fixed;
    bottom: 10px;
    right: 10px;
  }

  .notif-img {
    z-index: 16;
    position: fixed;
    bottom: 20px;
    left: 20px;
    .card-notif {
      width: 621px;
      height: 100%;
      padding: 20px 30px 20px 30px;
      border-radius: 8px;
      background: rgba(7, 25, 73, 0.87);
      box-shadow: 0px 4px 22px 0px rgba(67, 142, 255, 0.62);
      backdrop-filter: blur(8px);
      .text-notif {
        color: #fff;
        font-family: "Inter";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        margin-right: 40px;
      }
      .btn-close {
        border-radius: 8px;
        background: #032787;
        width: 94px;
        height: 30px;
        color: #fff;
        font-family: "Inter";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
      }
      .btn-close:hover {
        opacity: 0.8;
      }
    }
    // right: 10px;
  }
  .card-section {
    z-index: 1;
    position: relative;
  }
  .btn-action {
    z-index: 2;
    position: fixed;
    top: 30px;
    right: 25px;
    .btn-wa {
      border-radius: 51px;
      background: #1db410;
      width: 144px;
      height: 34px;
      padding-left: 14px;
      padding-right: 14px;
      color: #fff;
      font-family: "okta";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      margin-right: 10px;
      cursor: pointer;
      .icon-img {
        margin-right: 7px;
      }
    }
    .btn-wa:hover {
      opacity: 0.8;
    }
    .btn-touch {
      cursor: pointer;
      border-radius: 51px;
      background: #3393ec;
      width: 120px;
      height: 34px;
      padding-left: 14px;
      padding-right: 14px;
      color: #fff;
      font-family: "okta";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
    }
    .btn-touch:hover {
      opacity: 0.8;
    }
  }
  .btn-nav {
    cursor: pointer;
    z-index: 2;
    position: absolute;
    top: 35px;
    right: 25px;
    display: none;
  }
  .show-nav {
    position: fixed;
    top: 0px;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.71);
    backdrop-filter: blur(6px);
    z-index: 12;
    padding: 80px 20px 20px 20px;
    .icon-btn {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .btn-wa {
      border-radius: 51px;
      background: #1db410;
      width: 100%;
      height: 34px;
      padding-left: 14px;
      padding-right: 14px;
      color: #fff;
      font-family: "okta";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 20px;
      cursor: pointer;
      .icon-img {
        margin-right: 7px;
      }
    }
    .btn-wa:hover {
      opacity: 0.8;
    }
    .btn-touch {
      cursor: pointer;
      border-radius: 51px;
      background: #3393ec;
      width: 100%;
      height: 34px;
      padding-left: 14px;
      padding-right: 14px;
      color: #fff;
      font-family: "okta";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
    }
    .btn-touch:hover {
      opacity: 0.8;
    }
    .border-nav {
      width: 100%;
      margin-top: 32px;
      margin-bottom: 40px;
      border-bottom: 2px solid #c2c2c2;
    }
    .text-nav {
      width: 100%;
      padding-left: 20px;
      text-align: left;
      color: #fff;
      font-family: "okta";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      margin-bottom: 28px;
      cursor: pointer;
    }
    .text-nav:hover {
      text-decoration: underline;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .primeskills {
    .btn-blog {
      right: 60px;
    }
    .btn-wa {
      right: 60px;
    }
  }
}

@media only screen and (max-width: 920px) {
  .primeskills {
    .btn-action {
      display: none;
    }
    .btn-nav {
      display: flex;
    }
    .btn-blog {
      display: none;
    }
    .notif-img {
      left: 10px;
      right: 10px;
      .card-notif {
        width: 100%;
        padding: 10px 20px 10px 20px;
        .text-notif {
          font-size: 11px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
