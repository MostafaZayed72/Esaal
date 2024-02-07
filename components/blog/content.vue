<template>
  <v-container class="mt-10"
    ><v-row
      ><v-col cols="12"
        ><h1
          class="text-center font-bold text-3xl"
          style="border-bottom: 1px solid"
        >
          : مدونتنا
        </h1></v-col
      ><v-col
        cols="12"
        class="flex flex-col md:flex-row items-center md:justify-between md:gap-20"
        ><div
          style="width: 200px"
          class="bg-gray-400 icon-table text-center rounded-md py-6 mb-10 cursor-pointer transition duration-300 hover:bg-emerald-900 hover:text-white"
          @click="toNutrition"
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
</template>

<script setup>
const router = useRouter();

const toNutrition = () => {
  router.push("/blog/nutrition");
};
</script>
