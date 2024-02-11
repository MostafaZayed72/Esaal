<template>
    <div class="bg-gray-200">
      <v-container>
        <div class="sort flex justify-end">
          <div
            @click="label = !label"
            class="mb-2 sort rounded-md flex justify-center items-center py-1 px-4 gap-2 cursor-pointer"
            style="border: 1px solid"
          >
            <i class="fa-solid fa-arrow-down-short-wide"></i>
            <h1>ترتيب حسب</h1>
          </div>
        </div>
        <div class="labels flex justify-end">
          <div
            style="border: 1px solid"
            class="labels py-1 px-4 rounded-md flex flex-col justify-center items-end"
            v-show="label"
          >
            <label class="cursor-pointer" @click="label = false">
              <input type="radio" v-model="sortOrder" value="asc" />
              الأسعار: من الأقل للأعلى
            </label>
            <label class="cursor-pointer" @click="label = false">
              <input type="radio" v-model="sortOrder" value="desc" /> الأسعار: من
              الأعلى للأقل</label
            >
          </div>
        </div>
  
        <div class="card mb-10 w-100">
          <v-row
            ><v-col
              cols="12"
              class="mt-10 flex gap-20 py-10 rounded-md flex flex-col md:flex-row-reverse items-center justify-start gap-0 md:gap-2 w-100 bg-white"
              v-for="item in sortedData"
              :key="item.image"
            >
              <div class="text text-center flex flex-row-reverse">
                <img
                  :src="item.image"
                  alt=""
                  class="rounded-full"
                  style="
                    border: 1px solid rgb(133, 128, 128);
                    width: 150px;
                    height: 150px;
                  "
                />
                <div class="text flex flex-col items-center justify-center mr-4">
                  <nuxt-link
                    to=""
                    class="cursor-pointer font-bold text-xl"
                    style="text-decoration: underline"
                  >
                    د/ {{ item.name }}</nuxt-link
                  >
                  <h1 class="text-gray-700 text-sm mt-1">{{ item.subtitle }}</h1>
                  <div class="star text-center">
                    {{ item.rate }}<i class="fa-solid fa-star ml-1 mt-2"></i>
                    <div class="experts flex justify-center gap-1">
                      <h1>سنوات خبرة</h1>
                      <h1>{{ item.experts }}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex md:flex-row-reverse flex-col items-center justify-center md:mr-16"
              >
                <div class="price text-center">
                  <h1 class="mb-2 mt-4" style="text-decoration: underline">
                    الأسعار
                  </h1>
                  <h1 style="direction: rtl">{{ item.value }} جنيه/كشف</h1>
                  <h1 style="direction: rtl">{{ item.value_2 }} جنيه/استشارة</h1>
                </div>
                <div class="next-time flex gap-4">
                  <div
                    class="reservation w-32 flex flex-col gap-4 md:mr-32 mt-14 text-center"
                  >
                    <nuxt-link
                      class="px-2 py-1 bg-green-400 rounded-md md:px-10 cursor-pointer"
                      to=""
                      >احجز موعد</nuxt-link
                    >
                    <nuxt-link
                      class="r px-2 py-1 rounded-md md:px-10 cursor-pointer"
                      to=""
                      style="border: 1px solid"
                      >مواعيد أخرى</nuxt-link
                    >
                  </div>
                  <div class="text-center">
                    <h1 class="mb-2 mt-6 md:mt-1">أقرب موعد</h1>
                    <div
                      class="colored-text w-100 rounded-md"
                      style="border: 1px solid rgb(201, 195, 195)"
                    >
                      <div
                        class="date flex justify-around items-center px-2 py-1 bg-yellow gap-10"
                      >
                        <h1 style="direction: rtl">{{ item.next_day }}</h1>
                        <h1>:التاريخ</h1>
                      </div>
                      <h1 class="mt-4" style="direction: rtl">
                        {{ item.next_time }}
                      </h1>
                    </div>
                  </div>
                  <div
                    class="line h-40 md:bg-gray-300 bg-white-100 md:mr-32"
                    style="width: 2px"
                  ></div>
                </div>
              </div> </v-col
          ></v-row>
        </div>
      </v-container>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  const label = ref(false);
  
  const sortOrder = ref("asc");
  const data = ref([
    {
      name: "سامر المزين",
      date: "2023-02-18",
      value: 150,
      subtitle: "أخصائي نفسي",
      experts: 4,
      value_2: 100,
      next_day: "18 FEB",
      next_time: "10.30 م - 11.30 م",
      rate: 4.5,
      image:
        "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/samer31.jpg",
    },
    {
      name: "إبراهيم عبدالغفار",
      date: "2023-02-24",
      value: 250,
      subtitle: "استشاري نفسي",
      experts: 9,
      value_2: 150,
      next_day: "24 FEB",
      next_time: "8.30 م - 9.30 م",
      rate: 4.8,
      image:
        "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ibrahhimabdelghafar.jpg",
    },
    {
      name: "مصطفى عبدالحميد",
      date: "2023-02-29",
      value: 300,
      subtitle: "أخصائي نفسي إكلينيكي",
      experts: 6,
      value_2: 150,
      next_day: "29 FEB",
      next_time: "10 م - 9 م",
      rate: 4.1,
      image:
        "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/mostafaabdelhamed.jpg",
    },
    {
      name: "إبراهيم محروس",
      date: "2023-02-17",
      value: 500,
      subtitle: "أخصائي نفسي",
      experts: 7,
      value_2: 200,
      next_day: "17 FEB",
      next_time: "3.30 م - 4.30 م",
      rate: 4.9,
      image:
        "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ibrahim_mahros-removebg-preview.jpg",
    },
    {
      name: "أحمد فتحي",
      date: "2023-02-22",
      value: 550,
      subtitle: "أخصائي نفسي",
      experts: 7,
      value_2: 210,
      next_day: "22 FEB",
      next_time: "3.30 م - 4.30 م",
      rate: 4.9,
      image:
        "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/Dr.Ahmed-fathy-ismail10-1-2024.jpg",
    },
    {
      name: "محمود نعيم",
      date: "2023-02-27",
      value: 300,
      subtitle: "أخصائي نفسي",
      experts: 7,
      value_2: 100,
      next_day: "27 FEB",
      next_time: "3.30 م - 4.30 م",
      rate: 4.2,
      image:
        "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/naim26112023.jpg",
    },
    
  ]);
  
  const sortedData = computed(() => {
    return [...data.value].sort((a, b) => {
      
      if (sortOrder.value === "asc") {
        return a.value - b.value;
      } else {
        return b.value - a.value;
      }
    });
  });
  
  const sortedDate = computed(() => {
    return [...data.value].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      if (sortOrder.value === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  });
  </script>
  