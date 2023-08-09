<template>
  <div class="primeskills">
    <div class="flex items-center justify-center">
      <img src="~/assets/img/logo.png" @click="toHero()" class="cursor-pointer logo-img"/>
    </div>
    <img src="~/assets/img/call3.svg" @click="toAbout()" class="cursor-pointer call-img"/>
    <div
      class="btn-nav flex item-center justify-center noselect"
      style="position: fixed;"
      @click="nav = true"
    >
      <img src="~/assets/img/nav.svg" class="icon-img" />
    </div>
    <div
      v-show="nav"
      class="show-nav flex items-center jusitfy-center flex-col"
    >
      <img
        src="~/assets/img/close.svg"
        class="icon-btn noselect cursor-pointer"
        @click="nav = false"
      />
      <!-- <div
        class="btn-wa noselect flex noselect items-center justify-center"
        @click="toWa()"
      >
        <img src="~/assets/img/whatsapp.svg" class="icon-img" />
        Chat with us
      </div>
      <div
        class="btn-touch flex noselect items-center justify-center"
        @click="toAbout()"
      >
        Get In Touch
      </div>
      <div class="border-nav" /> -->
      <div class="text-nav noselect" @click="toWhy()">Why Us</div>
      <div class="text-nav noselect" @click="toProduct()">Our Products & Services</div>
      <div class="text-nav noselect" @click="toPortfolio()">Our Portfolios</div>
      <div class="text-nav noselect" @click="toMyth()">
        Myth and Facts about Immersive Technology
      </div>
    </div>
    <SectionHero id="hero" class="card-section" />
    <SectionWhyUs id="why" class="card-section" />
    <SectionProduct id="product" class="card-section" />
    <SectionPortfolio id="portfolio" class="card-section" />
    <SectionAbout id="about" class="card-section" />
    <SectionFooter id="footer" class="card-section" />
  </div>
</template>

<script setup>
const router = useRouter();

const nav = ref(false);
function toWa() {
  window.open(
    "https://api.whatsapp.com/send/?phone=62817719100&text&type=phone_number&app_absent=0",
    "_blank"
  );
}
function toHero () {
  window.scrollTo(0,0)
}
function toWhy () {
  router.push({ path: '/', hash: '#why' })
  this.nav = false
}
function toAbout () {
  router.push({ path: '/', hash: '#about' })
  this.nav = false
}
function toProduct () {
  router.push({ path: '/', hash: '#product' })
  this.nav = false
}
function toPortfolio () {
  router.push({ path: '/', hash: '#portfolio' })
  this.nav = false
}
function toMyth () {
  router.push({ path: '/', hash: '#about' })
  this.nav = false
}
</script>

<style lang="scss" scoped>
.primeskills {
  .logo-img {
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    top: 17px;
  }
  .call-img {
    z-index: 2;
    position: fixed;
    bottom: 10px;
    right: 10px;
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
    top: 30px;
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
    z-index: 4;
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

@media only screen and (max-width: 920px) {
  .primeskills {
    .btn-action {
      display: none;
    }
    .btn-nav {
      display: flex;
    }
  }
}
</style>
