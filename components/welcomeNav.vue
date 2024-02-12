<template>
  <div
    v-if="!menu"
    style="background-color: rgb(63, 188, 161)"
    class="w-100 flex items-center md:gap-10 font-bold text-xl mt-3 pt-10 relative"
  >
    <v-icon @click="showMenu" size="50px" class="ml-10 cursor-pointer hover:text-white"
      >mdi-menu</v-icon
    >
    <div class="links sign-in z-30">
      <NuxtLink class="cursor-pointer hover:text-white" to=""
        >تسجيل الدخول</NuxtLink
      >
      /
      <NuxtLink class="cursor-pointer hover:text-white" to=""
        >انشاء حساب</NuxtLink
      >
    </div>
    <img
      class="absolute right-5 md:right-16 cursor-pointer z-30"
      src="/assets/imgs/logo_pal.svg"
      style="max-width: 150px"
      alt=""
    />
  </div>
  <!-- START MENU -->
  <v-container
    v-if="menu"
    class="menu bg-gray-300"
    style="transform: translateY(-10px)"
    ><v-row
      ><v-col cols="12" class="flex justify-between items-center"
        ><div class="2 flex items-center gap-16">
          <div
            class="close flex flex-col ml-4 cursor-pointer w-2 text-center items-center"
            @click="menu = !menu"
          >
            <h1>X</h1>
            <h1 class="text-sm">close</h1>
          </div>
          <div class="links sign-in z-30">
            <NuxtLink class="cursor-pointer" to="">تسجيل الدخول</NuxtLink> /
            <NuxtLink class="cursor-pointer" to="">انشاء حساب</NuxtLink>
          </div>
        </div>
        <img
          class="cursor-pointer"
          src="/assets/imgs/logo_pal.svg"
          style="max-width: 150px"
          alt=""
      /></v-col>
      <v-col cols="12" class="flex flex-col"
        ><h1 class="text-center mt-4 mb-2">القائمة</h1>
        <div
          class="line w-80%"
          style="border-bottom: 1px solid rgb(177, 170, 170)"
        ></div
      ></v-col>
      <v-col cols="12" class="flex items-center justify-center gap-28">
        <div class="home flex gap-2" @click="dialog = true">
          <nuxt-link class="hover:text-green-700 cursor-pointer" to=""
            >حجز استشارة</nuxt-link
          ><i class="fa-solid fa-user-doctor"></i>
        </div>
        <div class="home flex gap-2">
          <nuxt-link
            class="hover:text-green-700 cursor-pointer"
            to=""
            @click="menu = !menu"
            >الصفحة الرئيسية</nuxt-link
          ><i class="fa-solid fa-house"></i>
        </div>
      </v-col>
      <v-col cols="12" class="flex items-center justify-center gap-28">
        <div class="home flex gap-2">
          <nuxt-link class="hover:text-green-700 cursor-pointer" to="/blog"
            >المدونة</nuxt-link
          ><i class="fa-solid fa-file-circle-check"></i>
        </div>
        <div class="home flex gap-2">
          <nuxt-link class="hover:text-green-700 cursor-pointer" to="/questions"
            >الأسئلة المتكررة</nuxt-link
          ><i class="fa-solid fa-comments"></i>
        </div> </v-col
      ><v-col cols="12"
        ><div
          class="line w-80%"
          style="border-bottom: 1px solid rgb(177, 170, 170)"
        ></div
      ></v-col>
      <v-col cols="12" class="flex flex-col items-center justify-center"
        ><div class="select-language flex gap-2 justify-end items-center">
          <h1>:اختيار اللغة</h1>
          <i class="fa-solid fa-globe"></i>
        </div>
        <v-select
          class="mt-10 w-80"
          v-model="selectedItem"
          :items="items"
          label="Language / اللغة"
        ></v-select> </v-col></v-row
  ></v-container>
  <!-- START DIALOG -->
  <div class="text-center">
    <v-dialog v-model="dialog" width="500px">
      <v-card>
        <div
          class="reservation flex gap-2 p-4 justify-center"
          style="border-bottom: 1px solid rgb(134, 129, 129)"
        >
          <h1>حجز استشارة</h1>
          <i class="fa-solid fa-toilet-paper"></i>
        </div>
        <h1 class="text-gray-lighten-4 text-center p-4">اختر مجالاً*</h1>

        <nuxt-link
          to="/nutrition"
          class="reservation flex gap-2 p-4 justify-center cursor-pointer hover:text-green-700"
          ><h1>التغذية واللياقة</h1>
          <i class="fa-solid fa-apple-whole"></i
        ></nuxt-link>

        <nuxt-link to="/psych"
          class="reservation flex gap-2 p-4 justify-center cursor-pointer hover:text-green-700"
        >
          <h1>الصحة النفسية والاستشارات الزوجية</h1>
          <i class="fa-solid fa-user-doctor"></i>
        </nuxt-link>
        <nuxt-link to="/medical"
          class="reservation flex gap-2 p-4 justify-center cursor-pointer hover:text-green-700"
        >
          <h1>استشارات طبية</h1>
          <i class="fa-solid fa-stethoscope"></i>
        </nuxt-link>
        <v-card-actions>
          <v-btn color="green-darken-2" block @click="dialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const menu = ref(false);
const dialog = ref(false);
const showMenu = () => {
  menu.value = !menu.value;
};
const selectedItem = ref(null);
const items = ["Arabic / اللغة العربية", "English / اللغة الإنجليزية"];
</script>

<style>
@media (max-width: 767px) {
  .sign-in {
    display: none;
  }
}
</style>
