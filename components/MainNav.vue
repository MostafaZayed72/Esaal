<template>
  <nav class="w-100" style="background-color: rgb(0, 51, 51)">
    <!-- START MAIN NAV -->
    <v-row class="main-row" style="height: 55px"
      ><v-col cols="12"
        ><div
          class="languages lg:ml-20 mt-2 flex items-center lg:justify-start sm:justify-center gap-2 md:gap-5"
        >
          <NuxtLink
            class="text-white font-bold text-xl"
            style="text-decoration: underline; letter-spacing: 1px"
            >AR-اللغة العربية</NuxtLink
          ><NuxtLink
            class="text-white font-bold text-xl"
            style="letter-spacing: 1px"
            >EN-English</NuxtLink
          >
        </div></v-col
      ></v-row
    >
    <!-- START WELCOME NAV -->
    <v-row style="background-color: rgb(63, 188, 161)" 
      ><v-col cols="6"
        ><div
          class="mt-7 lg:ml-20 ml-10 flex items-center md:gap-10 font-bold text-xl"
        >
          <v-icon size="50px" class="ml-10">mdi-menu</v-icon>
          <div class="links sign-in">
            <NuxtLink to="">تسجيل الدخول</NuxtLink> /
            <NuxtLink to="">انشاء حساب</NuxtLink>
          </div>
        </div> </v-col
      ><v-col cols="6"
        ><div class="img mt-5 items-center">
          <img
            class="absolute right-16"
            src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/logo_pal.svg"
            style="max-width: 183px"
            alt=""
          /></div></v-col
    ></v-row>
    <!-- START TABLE -->
    <v-row style="background-color: rgb(63, 188, 161)"
      ><v-col cols="12"
        ><div
          class="table w-2/5 bg-slate-300 mx-auto shadow-xl pb-10 rounded-md"
        >
          <h1
            class="h-16 text-white text-md md:text-2xl flex items-center justify-center mb-10"
            style="background-color: rgb(0, 51, 51); direction: rtl"
          >
            اختر المجال ثم وسيلة التواصل
          </h1>
          <div
            class="icons flex flex-col gap-10 items-center justify-around lg:flex-row"
          >
            <div
              class="bg-gray-400 icon-table text-center rounded-md cursor-pointer transition duration-300 hover:bg-emerald-900 hover:text-white"
              style="width: 150px; height: 150px"
            >
              <i class="fa-solid fa-apple-whole text-5xl mt-12"></i>
              <h1 class="font-bold text-lg mt-2">استشارات تغذية</h1>
            </div>
            <div
              class="bg-gray-400 icon-table text-center rounded-md cursor-pointer hover:bg-emerald-900 hover:text-white"
              style="width: 150px; height: 150px"
            >
              <i class="fa-solid fa-user-doctor text-5xl mt-12"></i>
              <h1 class="font-bold text-lg mt-2">استشارات نفسية</h1>
            </div>
            <div
              class="bg-gray-400 icon-table text-center rounded-md cursor-pointer hover:bg-emerald-900 hover:text-white"
              style="width: 150px; height: 150px"
            >
              <i class="fa-solid fa-stethoscope text-5xl mt-12"></i>
              <h1 class="font-bold text-lg mt-2">استشارات طبية</h1>
            </div>
          </div>
        </div>
      </v-col></v-row
    >
    <!-- START CONTACT -->
    <v-row
      style="background-color: rgb(63, 188, 161); direction: rtl"
      class="no-wrap"
      ><v-col cols="12" class="mt-8 flex justify-around items-center">
        <div class="contact">
          <div class="text mb-10">
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
        </div>
      </v-col></v-row
    >
  </nav>
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
