<script setup>
const doctors = [
  {
    name: 'د/أحمد عبدالحميد',
    subtitle: 'استشاري التأهيل الطبيعي والإصابات',
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ahmeddd.PNG',
  },
  {
    name: 'د/أحمد صالح',
    subtitle: 'طبيب أطفال',
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ex_ahmedsalah.jpg',
  },
  {
    name: 'د/محمد بركات',
    subtitle: 'أخصائي جراحة العظام',
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/Mohamedbarakat.jpg',
  },
];
</script>

<template>
  <div
    class="available bg-gray-200"
    style="border-top: 2px solid rgb(201, 195, 195)"
  >
    <v-container>
      <v-row>
        <v-col cols="12" class="flex flex-col md:flex-row justify-end items-center gap-10">
          <div
            v-for="doctor in doctors"
            :key="doctor.image"
            class="doctors flex justify-end"
          >
            <div
              class="doctor flex flex-col items-center rounded-xl bg-white px-10 py-8"
            >
              <img
                :src="doctor.image"
                alt=""
                class="w-28 h-28 rounded-full "
                style="border: 1px solid rgb(133, 128, 128)"
              >
              <div
                class="rounded-full  w-5 h-5 bg-green" style="transform: translate(43px, -30px)"
              />
              <h1 class="font-bold mt-2 text-xl">
                {{ doctor.name }}
              </h1>
              <h1 class="text-gray-700 text-sm mt-1">
                {{ doctor.subtitle }}
              </h1>
              <nuxt-link
                to=""
                class="cursor-pointer text-white px-10 py-1 text-center align-center rounded-md"
                style="
                  transform: translateY(70%);
                  background-color: rgb(0, 51, 51);
                "
              >
                ابدأ الجلسة
              </nuxt-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
