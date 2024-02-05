<template>
  <footer style="background-color: rgb(0, 51, 51)">
    <v-container
      ><v-row
        ><v-col cols="12" class="flex justify-between items-center mt-8"
          ><div class="icons text-white flex gap-3 text-3xl">
            <NuxtLink
              target="_blank"
              to="https://www.facebook.com/esaalconsultancy/"
              ><i class="fa-brands fa-facebook cursor-pointer hover:text-blue-500"></i
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
        <v-col cols="12" class="text-white flex justify-end gap-5"
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
            target="_blank"
            to=""
            class="hover:text-yellow-500 cursor-pointer"
            >الصفحة الرئيسية</nuxt-link
          ></v-col
        ></v-row
      ></v-container
    >
  </footer>
</template>
