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
              class="doctor flex flex-col items-center rounded-xl bg-white px-10 py-8"
            >
              <img
                :src="doctor.image"
                alt=""
                class="w-28 h-28 rounded-full"
                style="border: 1px solid rgb(133, 128, 128)"
              />
              <div
                class="rounded-full  w-5 h-5 bg-green" style="transform: translate(43px, -30px)"
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
    name: "د/أحمد متولي",
    subtitle: "أخصائي تغذية",
    image: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1707507653~exp=1707508253~hmac=8b5f43967ce74599905c90e60741ccbefbb150224a9f7740d8aad016427b4d22",
  },
];
</script>
