<template>
  <div class="card-footer flex items-center justify-center">
    <div class="container flex justify-between flex-row">
      <div class="container-2 flex flex-row items-center justify-start">
        <img src="~/assets/img/logo.svg" class="logo-img" />
        <div class="strokes" />
        <div class="address">
          Jl. Vanya Lakeside G7/01<br />
          Vanya Park, Bumi Serpong Damai (BSD)<br />Kabupaten Tangerang<br /><br />
  
          info@primeskills.id <br>
          <div class="mt-4 flex flex-row gap-4">
            <div>
              Privacy Policy
            </div>
            <div>
              Cookies Policy
            </div>
            <div>
              Terms Of Use
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-4 justify-start sos-med" style="">
        <img src="~/assets/img/linkedin.svg" @click="linkedin()" class="icon-img cursor-pointer" />
        <img src="~/assets/img/youtube.svg" class="cursor-pointer icon-img" @click="youtube()" />
        <img src="~/assets/img/instagram.svg" class="cursor-pointer icon-img" @click="ig()" />
      </div>
    </div>
  </div>
</template>
<script setup>
function ig() {
  window.open('https://www.instagram.com/primeskills_id/', '_blank');
}
function youtube() {
  window.open('https://www.youtube.com/@primeskills_id', '_blank');
}
function linkedin() {
  window.open('https://www.linkedin.com/company/69628000/admin/feed/posts/', '_blank');
}
</script>
<style lang="scss" scoped>
.card-footer {
  width: 100%;
  height: 289px;
  padding-left: 10%;
  padding-right: 10%;
  background: #000;
  .container {
    position: relative;
    .sos-med {
      position:absolute;
      bottom:0px;
      right:0px;
    }
    .logo-img {
      height: 44px;
      object-fit: cover;
      margin-right: 34px;
    }
    .strokes {
      border-right: 1px solid rgba(255, 255, 255, 0.27);
      height: 160px;
    }
    .address {
      margin-left: 30px;
      color: #fff;
      font-family: "okta";
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
}

@media only screen and (max-width: 480px) {
  .card-footer {
    height:100%;
    padding-top:24px;
    padding-bottom:24px;
    .container {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      .sos-med {
        position:static;
        margin-left: auto;
        margin-right: auto;
        margin-top:20px;
        .icon-img {
          height:20px;
          width:20px;
        }
      }
      .container-2 {
        flex-direction: column;
        justify-content: center;
      }
      .logo-img {
        width: 126px;
        height: 28px;
        margin-right: 0px;
        margin-bottom:17px;
      }
      .strokes {
        display: none;
      }
      .address {
        color: #FFF;
        text-align: center;
        font-family: 'okta';
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        margin-left: 0px;;
        line-height: 14px;
      }
    }
  }
}
</style>
