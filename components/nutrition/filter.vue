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

      <div class="card mb-10">
        <v-row
          ><v-col
            cols="12"
            class="mt-10 flex flex-col gap-20 py-10 rounded-md flex flex-row-reverse items-center justify-start gap-2 w-100 bg-white"
            v-for="item in sortedData"
            :key="item.image"
          >
            <img
              :src="item.image"
              alt=""
              class="w-28 h-28 rounded-full"
              style="border: 1px solid rgb(133, 128, 128)"
            />
            <div class="w-32 text text-center">
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
            <div class="w-32 price text-center mr-10">
              <h1 class="mb-2" style="text-decoration: underline">الأسعار</h1>
              <h1 style="direction: rtl">{{ item.value }} جنيه/كشف</h1>
              <h1 style="direction: rtl">{{ item.value_2 }} جنيه/استشارة</h1>
            </div>
            <div class="next-time flex gap-4 mr-10">
              <div class="text-center">
                <h1 class="mb-2">أقرب موعد</h1>
                <div
                  class="colored-text w-100 rounded-md"
                  style="border: 1px solid rgb(201, 195, 195)"
                >
                  <div
                    class="date flex justify-around items-center px-2 py-1 bg-yellow  gap-10"
                  >
                    <h1 style="direction: rtl;">{{ item.next_day }}</h1>
                    <h1>:التاريخ</h1>
                  </div>
                  <h1 class="mt-4" style="direction: rtl">
                    {{ item.next_time }}
                  </h1>
                </div>
              </div>
              <div class="line h-32 bg-gray-300" style="width: 2px"></div>
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
    name: "أحمد متولي",
    value: 150,
    subtitle: "أخصائي تغذية",
    experts: 4,
    value_2: 100,
    next_day: "19 FEB",
    next_time: "10.30 م - 11.30 م",
    rate: 4.5,
    image:
      " https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1707507653~exp=1707508253~hmac=8b5f43967ce74599905c90e60741ccbefbb150224a9f7740d8aad016427b4d22",
  },
  {
    name: "محمد بيومي",
    value: 250,
    subtitle: "استشاري تغذية",
    experts: 9,
    value_2: 150,
    next_day: "25 FEB",
    next_time: "8.30 م - 9.30 م",
    rate: 4.8,
    image:
      "https://img.freepik.com/free-photo/portrait-attractive-male-doctor_329181-622.jpg?size=626&ext=jpg&ga=GA1.1.1483280730.1707239230&semt=sph",
  },{
    name: "أحمد متولي",
    value: 5,
    subtitle: "أخصائي تغذية",
    experts: 4,
    value_2: 2,
    next_day: "10 FEB",
    next_time: "10.30 م - 11.30 م",
    rate: 4.5,
    image:
      " https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1707507653~exp=1707508253~hmac=8b5f43967ce74599905c90e60741ccbefbb150224a9f7740d8aad016427b4d22",
  },{
    name: "أحمد متولي",
    value: 5,
    subtitle: "أخصائي تغذية",
    experts: 4,
    value_2: 2,
    next_day: "10 FEB",
    next_time: "10.30 م - 11.30 م",
    rate: 4.5,
    image:
      " https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1707507653~exp=1707508253~hmac=8b5f43967ce74599905c90e60741ccbefbb150224a9f7740d8aad016427b4d22",
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
</script>
