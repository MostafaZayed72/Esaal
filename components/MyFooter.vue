<template>
  <footer style="background-color: rgb(0, 51, 51)">
    <v-container
      ><v-row
        ><v-col cols="12" class="flex justify-between items-center mt-8"
          ><div class="icons text-white flex gap-3 text-3xl">
            <NuxtLink
              target="_blank"
              to="https://www.facebook.com/esaalconsultancy/"
              ><i
                class="fa-brands fa-facebook cursor-pointer hover:text-blue-500"
              ></i
            ></NuxtLink>
            <NuxtLink
              target="_blank"
              to="https://www.instagram.com/esaalconsultancy/"
              ><i
                class="fa-brands fa-square-instagram hover:text-pink-500 cursor-pointer"
              ></i
            ></NuxtLink>
          </div>
          <div class="logo" style="direction: rtl">
            <img
              class="cursor-pointer"
              src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/logo-footer.svg"
              style="max-width: 150px"
              alt=""
            /></div
        ></v-col>
        <v-col
          cols="12"
          class="text-white text-center flex flex-wrap-reverse justify-center gap-5 text-center mb-20"
          ><nuxt-link
            target="_blank"
            to=""
            class="hover:text-yellow-500 cursor-pointer"
            >المدونة</nuxt-link
          ><nuxt-link
            target="_blank"
            to=""
            class="hover:text-yellow-500 cursor-pointer"
            >من نحن</nuxt-link
          ><nuxt-link
            target="_blank"
            to=""
            class="hover:text-yellow-500 cursor-pointer"
            >أسئلة متكررة</nuxt-link
          ><nuxt-link
            target="_blank"
            to=""
            class="hover:text-yellow-500 cursor-pointer"
            >البحث عن خبير</nuxt-link
          ><nuxt-link
            to="/"
            class="hover:text-yellow-500 cursor-pointer"
            >الصفحة الرئيسية</nuxt-link
          ></v-col
        >
        <v-col
          cols="12"
          md="4"
          class="text-white flex flex-col items-center justify-center gap-3"
          ><h1 class="text-end">حمل التطبيق</h1>
          <div class="cards flex flex-col gap-3">
            <nuxt-link
              target="_blank"
              to="https://play.google.com/store/apps/details?id=com.g22solutions.esaal&pli=1"
            >
              <div
                class="card flex items-center text-center gap-3 py-2 px-4 rounded-lg hover:bg-green-700 cursor-pointer"
                style="border: 1px white solid"
              >
                <div class="text text-center">
                  <h1 class="text-xs">Available on the</h1>
                  <h1>Google Play</h1>
                </div>
                <i class="fa-brands fa-google-play text-5xl"></i></div
            ></nuxt-link>
            <nuxt-link
              target="_blank"
              to="https://apps.apple.com/eg/app/esaal/id1508638507"
              ><div
                class="card flex items-center text-center gap-3 py-2 px-4 rounded-lg hover:bg-green-700 cursor-pointer"
                style="border: 1px white solid"
              >
                <div class="text text-center">
                  <h1 class="text-xs">Download on the</h1>
                  <h1>App Store</h1>
                </div>
                <i class="fa-brands fa-apple text-5xl"></i></div
            ></nuxt-link></div
        ></v-col>
        <v-col cols="12" md="4" class="flex flex-col"
          ><div
            class="select-language flex gap-2 justify-center items-center text-white"
          >
            <h1>:اختيار اللغة</h1>
            <i class="fa-solid fa-globe"></i>
          </div>
          <v-select
            class="mt-10 text-white"
            v-model="selectedItem"
            :items="items"
            label="Language / اللغة"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4" class="flex flex-col justify-center"
          ><div
            class="select-language flex gap-2 justify-center items-center text-white"
          >
            <h1>إعدادات العملة</h1>
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <h1 class="bg-white text-center font-bold py-2 rounded">
            EGP - Egyptian Pound
          </h1>
        </v-col>
        <div
          class="line w-100"
          style="border-bottom: 1px solid rgb(109, 97, 97)"
        ></div>
        <v-col
          cols="12"
          class="text-white mt-6 flex flex-col md:flex-row justify-between items-center text-center"
          ><div class="rights">
            <h1>
              <span>{{ currentYear }}</span> جميع الحقوق محفظوظة لإسأل
            </h1>
          </div>
          <div
            class="flex flex-col items-center mt-4 gap-4 md:flex-row md:mt-0 md:gap-10 text-center"
          >
            <nuxt-link class="hover:text-yellow-500 cursor-pointer" target="_blank" to="" style="text-decoration: underline"
              >الأحكام والشروط</nuxt-link
            >
            <nuxt-link class="hover:text-yellow-500 cursor-pointer" target="_blank" to="" style="text-decoration: underline"
              >سياسة الإسترجاع</nuxt-link
            >
            <nuxt-link class="hover:text-yellow-500 cursor-pointer" target="_blank" to="" style="text-decoration: underline"
              >سياسة الخصوصية</nuxt-link
            >
          </div>
        </v-col>
      </v-row></v-container
    >
  </footer>
</template>

<script setup>
const selectedItem = ref(null);
const items = ["Arabic / اللغة العربية", "English / اللغة الإنجليزية"];
const currentYear = new Date().getFullYear();
</script>
