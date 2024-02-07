<template>
  <div class="nav sticky top-0 bg-white shadow-md z-30 pb-4">
    <QuestionsNav />
  </div>
  <v-container class="mt-10"
    ><v-row
      ><v-col cols="12"
        ><h1 class="text-end font-bold text-3xl mr-10">: مدونتنا</h1></v-col
      ><v-col
        cols="12"
        class="flex flex-col md:flex-row items-center md:justify-end gap-4 md:gap-20"
        ><div
          style="width: 200px"
          class="bg-gray-400 icon-table text-center rounded-md py-6 mb-10 cursor-pointer transition duration-300 hover:bg-emerald-900 hover:text-white"
        >
          <i class="fa-solid fa-apple-whole text-5xl"></i>
          <h1 class="font-bold text-lg">استشارات تغذية</h1>
        </div>
        <div
          style="width: 200px"
          class="bg-gray-400 icon-table text-center rounded-md py-6 mb-10 cursor-pointer hover:bg-emerald-900 hover:text-white"
        >
          <i class="fa-solid fa-user-doctor text-5xl"></i>
          <h1 class="font-bold text-lg">استشارات نفسية</h1>
        </div>
        <div
          style="width: 200px"
          class="bg-gray-400 icon-table md:mr-10 text-center rounded-md py-6 mb-10 cursor-pointer hover:bg-emerald-900 hover:text-white"
        >
          <i class="fa-solid fa-stethoscope text-5xl"></i>
          <h1 class="font-bold text-lg">استشارات طبية</h1>
        </div></v-col
      ></v-row
    ></v-container
  >
  <div
    class="line text-center mx-auto"
    style="border-bottom: 1px solid rgb(177, 170, 170); width: 100%"
  ></div>
  <div class="swiper mt-10"><blogSwiper /></div>
</template>
