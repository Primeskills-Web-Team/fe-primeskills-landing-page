<template>
  <div class="container-section flex items-center justify-center">
    <div class="bg-img" />
    <div class="container">
      <div class="text-title">Myth and Facts about</div>
      <div class="text-desc">Immersive Technology</div>
      <div class="flex flex-row justify-center gap-5 flex-nowrap container-list data-dekstop">
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible = true"
        >
          <img src="~/assets/img/myth/1.png" class="img-list" />
          <div class="text-list">
            Does VR Really Cause Motion Sickness (Cybersickness) and Discomfort?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible2 = true"
        >
          <img src="~/assets/img/myth/2.png" class="img-list" />
          <div class="text-list">
            <br>
            Does VR Give You an Isolating <br>Experience?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible3 = true"
        >
          <img src="~/assets/img/myth/3.png" class="img-list" />
          <div class="text-list">
            <br>
            Does AR only used for gamifying?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible4 = true"
        >
          <img src="~/assets/img/myth/4.png" class="img-list" />
          <div class="text-list">
            Is Gamified Assessment and Learning just about playing games?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div class="flex flex-row gap-5 pl-6 flex-nowrap container-list data-mobile">
        <div
          class="flex noselect flex-col sec-grup cursor-pointer"
          @click="dialogVisible5 = true"
        >
          <img src="~/assets/img/myth/1.png" class="img-sec" />
          <div class="text-sec">
            Does VR Really Cause Motion
Sickness  (Cybersickness) 
and Discomfort?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="flex noselect flex-col sec-grup cursor-pointer"
          @click="dialogVisible6 = true"
        >
          <img src="~/assets/img/myth/2.png" class="img-sec" />
          <div class="text-sec">
            Does VR Give You an 
Isolating Experience?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="flex noselect flex-col sec-grup cursor-pointer"
          @click="dialogVisible7 = true"
        >
          <img src="~/assets/img/myth/3.png" class="img-sec" />
          <div class="text-sec">Does VR Give You an 
            Isolating Experience?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="flex noselect flex-col sec-grup cursor-pointer"
          @click="dialogVisible8 = true"
        >
          <img src="~/assets/img/myth/4.png" class="img-sec" />
          <div class="text-sec">Is Gamified Assessment and 
            Learning just about 
            playing games?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div class="card-submit flex items-center justify-center flex-col">
        <div class="title-card">Want to learn more?</div>
        <div class="flex items-center justify-center flex-row">
          <div class="flex flex-row items-center">
            <div
              class="btn-wa noselect flex noselect items-center justify-center"
              @click="toWa()"
            >
              <img src="~/assets/img/whatsapp.svg" class="icon-img" />
              Chat with us
            </div>
            <div class="border-vertical" />
          </div>

          <div class="flex items-start justify-center flex-col">
            <div class="title-input">
              or, drop us your email
            </div>
            <div class="flex items-center form-input justify-center flex-row">
              <input v-model="email" class="input-data" />
              <div
                class="btn-submit flex items-center justify-center cursor-pointer"
                @click="save()"
              >
                <span v-if="isLoading">Loading...</span> <span v-else>Submit</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border-horizontal" />
        <div
          class="btn-wa2 noselect flex noselect items-center justify-center"
          @click="toWa()"
        >
          <img src="~/assets/img/whatsapp.svg" class="icon-img" />
          <div class="title-btn">

            Chat with us
          </div>
        </div>
      </div>
    </div>
    
    <el-dialog
      v-model="dialogVisible"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/myth/1.png" class="img-dialog" />
          <div class="title-content">
            Does VR Really Cause Motion Sickness (Cybersickness) and Discomfort?
          </div>
          <div class="desc-content">
            In fact, Motion sickness can be experienced by certain individuals
            when using VR, particularly in cases where the VR experience is not
            well-optimized. However, thanks to advancements in VR technology
            like improved tracking and higher refresh rates, the occurrence of
            motion sickness is being reduced.<br />
            Primeskills, leveraging our expertise, have discovered effective
            solutions to address this issue. We are committed to enhancing the
            quality of VR content and creating more comfortable experiences by
            implementing smooth motion techniques. As a result, users will
            experience a decrease in discomfort and motion sickness when using
            VR.<br />
            Our collaboration with CIMB Niaga has allowed us to gather feedback
            from multiple generations who have tried our VR content modules, and
            they have reported feeling safe and comfortable throughout their VR
            experiences.
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible2"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/myth/2.png" class="img-dialog" />
          <div class="title-content">
            Does VR Give You an Isolating Experience?
          </div>
          <div class="desc-content">
            In fact, although VR can create an immersive and individualized
            experience, it can also be a social activity. Multiplayer VR
            experiences allow users to interact and collaborate with others in
            virtual environments, fostering social connections and shared
            experiences. Just like we did with PT. Bank Danamon Indonesia!<br />
            Through our collaboration with PT. Bank Danamon Indonesia, we have
            witnessed firsthand the transformative effects of immersive VR
            training experiences. By embracing these innovations, organizations
            can elevate their training programs and empower employees to acquire
            new skills, improve performance, and enhance overall productivity.
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible3"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/myth/3.png" class="img-dialog" />
          <div class="title-content">Does AR only used for gamifying?</div>
          <div class="desc-content">
            In fact, AR already gained a lot of popularity in gaming, and its
            applications extend far beyond the users that had been experienced.
            With AR, it is utilized in numerous fields, including education,
            architecture, retail, marketing, and even industrial training.<br />
            Primeskills discovers the use of AR technology for an issue that can
            be established with a new experience, especially in education. We
            collaborate with Terbuka University to make a new experience of a
            learning system that can bring their communication major students in
            advancing their style of new learning experiences.
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible4"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/myth/4.png" class="img-dialog" />
          <div class="title-content">
            Is Gamified Assessment and Learning just about playing games?
          </div>
          <div class="desc-content">
            In fact, Gamified Assessment and Learning involve the use of game
            elements and mechanics to enhance motivation in educational
            contexts. Games can be part of gamified learning because the focus
            is on leveraging games that are based on elements, such as points,
            challenges, and leaderboards, to create an interactive and new
            immersive learning experience.<br />
            This goes for our project at Fiscal Career Week and ISEEC UI,  a
            virtual job fair that assists companies and undergraduate students
            in enhancing their opportunities at making careers and new
            investments. Primeskills delivers a solution for university students
            and graduates to access job vacancies within their area of studies,
            and for companies to access a highly skilled and relevant talent
            pool for their job vacancies within  their company. 
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
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
            <div class="intro">Does VR Really Cause Motion Sickness 
              (Cybersickness) and Discomfort?</div>
            <div class="at">
              In fact, Motion sickness can be experienced by certain individuals when using VR, particularly in cases where the VR experience is not well-optimized. However, thanks to advancements in VR technology like improved tracking and higher refresh rates, the occurrence of motion sickness is being reduced.
 <br><br>
Primeskills, leveraging our expertise, have discovered effective solutions to address this issue. We are committed to enhancing the quality of VR content and creating more comfortable experiences by implementing smooth motion techniques. As a result, users will experience a decrease in discomfort and motion sickness when using VR.
 <br><br>
Our collaboration with CIMB Niaga has allowed us to gather feedback from multiple generations who have tried our VR content modules, and they have reported feeling safe and comfortable throughout their VR experiences.
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
            <div class="intro">
              Does VR Give You an 
Isolating Experience?
            </div>
            <div class="at">
              In fact, although VR can create an immersive and individualized experience, it can also be a social activity. Multiplayer VR experiences allow users to interact and collaborate with others in virtual environments, fostering social connections and shared experiences. Just like we did with PT. Bank Danamon Indonesia!
<br><br>
Through our collaboration with PT. Bank Danamon Indonesia, we have witnessed firsthand the transformative effects of immersive VR training experiences. By embracing these innovations, organizations can elevate their training programs and empower employees to acquire new skills, improve performance, and enhance overall productivity.
            </div>
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
            <div class="intro">Does AR only used for gamifying?</div>
            <div class="at">
              In fact, AR already gained a lot of popularity in gaming, and its applications extend far beyond the users that had been experienced. With AR, it is utilized in numerous fields, including education, architecture, retail, marketing, and even industrial training. 
<br><br>
Primeskills discovers the use of AR technology for an issue that can be established with a new experience, especially in education. We collaborate with Terbuka University to make a new experience of a learning system that can bring their communication major students in advancing their style of new learning experiences.
            </div>
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
            <div class="intro">Is Gamified Assessment and Learning 
              just about playing games?</div>
            <div class="at">
              In fact, Gamified Assessment and Learning involve the use of game elements and mechanics to enhance motivation in educational contexts. Games can be part of gamified learning because the focus is on leveraging games that are based on elements, such as points, challenges, and leaderboards, to create an interactive and new immersive learning experience.
<br><br>
	This goes for our project at Fiscal Career Week and ISEEC UI,  a virtual job fair that assists companies and undergraduate students in enhancing their opportunities at making careers and new investments. Primeskills delivers a solution for university students and graduates to access job vacancies within their area of studies, and for companies to access a highly skilled and relevant talent pool for their job vacancies within  their company. 
            </div>
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
const isLoading = ref(false);
const email = ref("");

const handleClose = (done: () => void) => {
  done();
};

function toWa() {
  window.open(
    "https://api.whatsapp.com/send/?phone=62817719100&text&type=phone_number&app_absent=0",
    "_blank"
  );
}
async function save() {
  if (email.value === "") {
    ElMessage({
      message: "Email is not valid",
      type: "warning",
    });
  } else {
    isLoading.value = true;
    var form = {
      email: email.value,
    };
    try {
      const { data, error } = await useFetch(
        "https://www.primeskills.id/new-web-demo/public/api/email/subscribe",
        {
          method: "POST",
          body: form,
        }
      );

      ElMessage({
        message: 'Thank you for subscribing',
        type: 'success',
      })
      isLoading.value = false;
      console.log("data from server", data.value);
    } catch (error) {
      isLoading.value = false;
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-mobile {
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
  background: #1799e2;
  border-radius: 20px;
  padding-bottom: 40px;
  .content-data {
    z-index: 2;
    .img-dialog {
      width: 100%;
      height: 260px;
      margin-bottom: 20px;
      object-fit: cover;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .title-content {
      padding-left: 20px;
      padding-right: 20px;
      color: white;
      text-align: start;
      font-family: "okta";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .desc-content {
      padding-left: 20px;
      padding-right: 20px;
      color: white;
      font-family: "okta";
      font-size: 14px;
      text-align: justify;
      font-style: normal;
      font-weight: 400;
    }
    .footer-btn {
      cursor: pointer;
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 25px;
      background: #0a528c;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;

      .arrow-down {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 11px solid white;
      }
    }
  }
}
.container-section {
  height: 100vh;
  width: 100%;
  .bg-img {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url("../assets/img/bg-5.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
  .container {
    z-index: 2;
    padding-left: 10%;
    padding-right: 10%;
    .text-title {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 5px;
    }
    .text-desc {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 41px;
      font-style: normal;
      font-weight: 500;
    }
    
    .card-list {
      margin-top: 40px;
      position: relative;
      width: 198px;
      height: 100%;
      border-radius: 10px;
      background: linear-gradient(180deg, #549adb 0%, #1d5b95 100%);
      .img-list {
        width: 198px;
        height: 182px;
      }
      .text-list {
        color: #fff;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        padding: 12px 8px 13px 8px;
        margin-bottom: 20px;
      }
      .btn-show {
        position: absolute;
        bottom: 0;
      }
    }
    .data-mobile {
      display: none;
    }
    .data-dekstop {
      display: flex;
    }
    
    .card-submit {
      margin-top: 120px;
      width: 767px;
      height: 234px;
      margin-left: auto;
      margin-right:auto;
      border-radius: 13px;
      border: 1px solid #4f4e7b;
      background: rgba(7, 25, 73, 0.71);
      box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.56);
      backdrop-filter: blur(16px);
      .title-input {
        margin-bottom:10px;
        color: #FFF;
        font-family: 'okta';
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
      }
      .border-vertical {
        border-right: 2px solid white;
        height: 99px;
        margin-right:24px;
      }
      .border-horizontal {
        display:none;
      }
      .btn-wa2 {
        display: none;
      }
      .btn-wa {
        margin-right:27px;
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
        cursor: pointer;
        .icon-img {
          margin-right: 7px;
        }
      }
      .btn-wa:hover {
        opacity: 0.8;
      }
      .title-card {
        color: #fff;
        font-family: "okta";
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 45px;
      }
      input {
        width: 270px;
        height: 29px;
        border-radius: 8px;
        background: #fff;
        padding-left:10px;
        padding-right: 10px;
      }
      .btn-submit {
        width: 94px;
        height: 30px;
        border-radius: 6px;
        background: #071949;
        color: #fff;
        text-align: center;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.585px;
        margin-left: 22px;
      }
    }
    .sec-grup {
      margin-top: 40px;
      position: relative;
      cursor: pointer;
      min-width: 198px;
      border-radius: 10px;
      background: linear-gradient(180deg, #549adb 0%, #1d5b95 100%);
      .img-sec {
        width:100%;
        height: 182px;
      }
      .text-sec {
        color: #fff;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        padding: 12px 8px 13px 8px;
        margin-bottom: 20px;
      }
      .btn-show {
        position: absolute;
        bottom: 0;
      }
    }
    .sec-grup:hover {
      filter: brightness(110%);
      .text-sec {
        font-weight: bold;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .container-section {
    min-height: 1200px;
    .container {
      padding-left: 0px;
      padding-right: 0px;
      .why-us {
        padding-left: 20px;
        padding-right: 20px;
      }
      .cater {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 35px;
        line-height: 40px;
        .banking {
          font-size: 35px;
          line-height: 40px;
        }
      }
      .stands {
        padding-left: 20px;
        padding-right: 20px;
        width: 280px;
      }
      .data-dekstop {
        display: none;
      }
      .data-mobile {
        display: flex;
      }
      .container-list {
      margin-top: 40px;
        overflow-x: scroll;
        overflow-y: hidden;
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
        .sec-grup {
          min-height: 230px;
        }
      }
      .container-list::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
      
      .card-submit {
        width: 80%;
        height: 280px;
        .btn-wa {
          display: none;
        }
        .border-vertical {
          display: none;
        }
        .title-input {
          display:none;
        }
        .title-card {
          font-size: 18px;
          text-align: center;
          width: 180px;
          margin-bottom:30px;
        }
        .form-input {
          flex-direction: column;
          .input-data {
            width: 200px;
            margin-bottom:10px;
          }
          .btn-submit {
            margin-top: 10px;
            margin-left:0px;
          }
        }
        .border-horizontal {
          display: flex;
          border-bottom:1px solid white;
          margin-top:20px;
          margin-bottom: 0px;
          width:70%;
        }
        .btn-wa2 {
          display: flex;
          margin-top:20px;
          border-radius: 51px;
          background: #1db410;
          width: 144px;
          height: 32px;
          padding-left: 14px;
          padding-right: 14px;
          cursor: pointer;
          .title-btn {

            color: #fff;
            font-family: "okta";
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            padding-bottom:2px;
          }
          .icon-img {
            margin-right: 7px;
            height:14px;
          }
        }
        .btn-wa:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
