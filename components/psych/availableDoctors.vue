<template>
  <div
    class="available bg-gray-200"
    style="border-top: 2px solid rgb(201, 195, 195)"
  >
    <v-container
      ><v-row
        ><v-col cols="12" class="flex justify-end items-center gap-10"
          ><div
            class="doctors flex justify-end"
            v-for="doctor in doctors"
            :key="doctor.image"
          >
            <div
              class="doctor relative flex flex-col items-center rounded-xl bg-white px-10 py-8"
            >
              <img
                :src="doctor.image"
                alt=""
                class="w-28 h-28 rounded-full"
                style="border: 1px solid rgb(133, 128, 128)"
              />
              <div
                class="rounded-full absolute bottom-32 right-16 w-5 h-5 bg-green"
              ></div>
              <h1 class="font-bold mt-2 text-xl">{{ doctor.name }}</h1>
              <h1 class="text-gray-700 text-sm mt-1">{{ doctor.subtitle }}</h1>
              <nuxt-link
                to=""
                class="cursor-pointer text-white px-10 py-1 text-center align-center rounded-md"
                style="
                  transform: translateY(70%);
                  background-color: rgb(0, 51, 51);
                "
                >ابدأ الجلسة</nuxt-link
              >
            </div>
          </div></v-col
        ></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
const doctors = [
  {
    name: "د/سامر المزين",
    subtitle: "أخصائي نفسي",
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/samer31.jpg",
  },
  {
    name: "د/إبراهيم عبدالغفار",
    subtitle: "أخصائي نفسي إكلينيكي",
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ibrahhimabdelghafar.jpg",
  },
  {
    name: "د/مصطفى عبدالحميد",
    subtitle: "أخصائي نفسي إكلينيكي",
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/mostafaabdelhamed.jpg",
  },
];
</script>
