<template>
  <div
    class="available bg-gray-200"
    style="border-top: 2px solid rgb(201, 195, 195)"
  >
    <v-container
      ><v-row
        ><v-col cols="12"
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
                style="border: 1px solid rgb(209, 204, 204)"
              />
              <div
                class="rounded-full absolute bottom-32 right-16 w-5 h-5 bg-green"
              ></div>
              <h1 class="font-bold mt-2">{{ doctor.name }}</h1>
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
    name: "د/أحمد متولي",
    subtitle: "أخصائي تغذية",
    image:
      "https://cdn.altibbi.com/cdn/cache/1000x500/image/2020/03/17/9f40f119864f12b73a8d24a2f94ac454.png.webp",
  },
];
</script>
