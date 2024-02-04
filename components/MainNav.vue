<template>
  <div class="container" style="background-color: rgb(0, 51, 51)">
    <!-- START MAIN NAV -->
    <navBar />
    <!-- START WELCOME NAV -->
    <welcomeNav />
    <!-- START TABLE -->
    <homeTable />
    <!-- START CONTACT -->
    <v-row style="background-color: rgb(63, 188, 161)" class="no-wrap"
      ><v-col cols="12" class="mt-8 flex justify-around items-center">
        <div class="contact">
          <div class="text mb-10" style="direction: rtl">
            <h1 class="font-bold text-xl">
              تواصل مع أكثر من <span class="text-white">٧٣٩</span> خبير في موقع
              واحد
            </h1>
            <h1 class="font-bold text-md ml-44">
              اتصل بخبرائنا الآن من خلال الخط الساخن
              <i class="fa fa-phone" style="color: red; font-size: 20px"></i>
              <span style="text-decoration: underline"> 4578</span>
            </h1>
          </div>
        </div>
        <div class="doctor-img">
          <img
            class="rounded-xl"
            src="https://altibbi.com/theme/altibbi/images/question/promote-for-call-doctor-service-mobile.png"
            alt=""
          />
        </div> </v-col
    ></v-row>
  </div>
</template>
<style>
@media (max-width: 1330px) {
  .doctor-img {
    display: none;
  }
}
@media (max-width: 767px) {
  .languages {
    justify-content: center;
  }
  .sign-in {
    display: none;
  }
}
@media (max-width: 336px) {
  .languages {
    flex-direction: column;
  }
  .main-row {
    padding-bottom: 90px;
  }
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: rgb(0, 51, 51);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 51, 51);
}
</style>