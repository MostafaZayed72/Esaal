<template>
  <div
    style="background-color: rgb(173, 177, 176)"
    class="w-100 z-10 h-20 md:h-20 sticky top-0 flex items-center justify-between font-bold text-xl"
  >
    <v-icon size="50px" class="ml-10 cursor-pointer" @click="showMenu"
      >mdi-menu</v-icon
    >
    <div class="links ml-10 flex items-center gap-4">
      <div
        class="ask cursor-pointer py-1 flex justify-center items-center gap-2"
        style="width: 200px; background-color: rgb(0, 51, 51)"
      >
        <h1 class="text-white">اسأل خبير</h1>
        <i class="fa-regular fa-comment text-slate-300"></i>
      </div>
      <h1 class="text-lg">أو</h1>
      <div
        class="reservation cursor-pointer py-1 flex justify-center items-center gap-2"
        style="width: 200px; background-color: rgb(0, 51, 51)"
      >
        <h1 class="text-white">حجز استشارة</h1>
        <i class="fa-regular fa-calendar text-slate-300"></i>
      </div>
    </div>
    <img
      class="mr-10 cursor-pointer"
      src="/assets/imgs/logo_pal.svg"
      style="max-width: 150px"
      alt=""
      @click="redirectToHome"
    />
  </div>
  <v-container
    v-if="menu"
    class="menu bg-gray-300 z-50 drop-menu mx-auto"
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
            @click="redirectToHome"
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
        ></v-select
        ><!-- START DIALOG -->
        <div class="text-center">
          <v-dialog v-model="dialog" width="500px">
            <v-card>
              <div
                @click="dialog = true"
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
      </v-col></v-row
    ></v-container
  >
  <div
    class="bottom-links z-10 w-4/5 md:w-3/5 mx-auto flex items-center justify-center gap-4 h-10 rounded-sm sticky top-20"
    style="background-color: rgb(173, 177, 176)"
  >
    <div
      class="ask cursor-pointer py-1 flex justify-center items-center gap-2"
      style="width: 200px; background-color: rgb(0, 51, 51)"
    >
      <h1 class="text-white">اسأل خبير</h1>
      <i class="fa-regular fa-comment text-slate-300"></i>
    </div>
    <h1 class="text-lg">أو</h1>
    <div
      @click="dialog = true"
      class="reservation cursor-pointer py-1 flex justify-center items-center gap-2"
      style="width: 200px; background-color: rgb(0, 51, 51)"
    >
      <h1 class="text-white">حجز استشارة</h1>
      <i class="fa-regular fa-calendar text-slate-300"></i>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const dialog = ref(false);
const menu = ref(false);
const redirectToHome = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  menu.value = false;
};

const showMenu = () => {
  menu.value = !menu.value;
};
</script>

<style>
@media (max-width: 992px) {
  .links {
    display: none;
  }
}
@media (min-width: 992px) {
  .bottom-links {
    display: none;
  }
}
.drop-menu {
  position: fixed;
  bottom: 17%;
  z-index: 11;
}
</style>
