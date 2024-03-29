<script setup>
import { computed, ref } from 'vue';

const label = ref(false);
const dateLabel = ref(false);

const sortOrder = ref('');
const nortOrder = ref('');

function changSort() {
  sortOrder.value = '';
}

function changeDateFilter() {
  nortOrder.value = '';
}

const allData = computed(() => {
  const sorted
    = sortOrder.value === 'asc'
      ? [...data.value].sort((a, b) => a.value - b.value)
      : [...data.value].sort((a, b) => b.value - a.value);
  const norted
    = nortOrder.value === 'asc'
      ? [...data.value].sort((a, b) => a.date - b.date)
      : [...data.value].sort((a, b) => b.date - a.date);

  return { sorted, norted };
});

const filteredData = computed(() => {
  const { sorted, norted } = allData.value;
  const selectedData = sortOrder.value != '' ? sorted : norted;

  return selectedData.filter(item => item.name.includes(searchTerm.value));
});
const data = ref([
  {
    name: 'أحمد عبدالحميد',
    path:'doctors/Dr-Ahmed-Abdelhamid',
    date: new Date(2024, 2, 25),
    value: 150,
    subtitle: 'استشاري التأهيل الطبيعي والإصابات',
    experts: 4,
    value_2: 100,
    next_day: '25 FEB',
    next_time: '10.30 م - 11.30 م',
    rate: 4.5,
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ahmeddd.PNG',
  },
  {
    name: 'أحمد صالح',
    path:'doctors/Dr-Ahmed-Saleh',
    date: new Date(2024, 2, 24),
    value: 250,
    subtitle: 'طبيب أطفال',
    experts: 9,
    value_2: 150,
    next_day: '24 FEB',
    next_time: '8.30 م - 9.30 م',
    rate: 4.8,
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ex_ahmedsalah.jpg',
  },
  {
    name: 'محمد بركات',
    path:'doctors/Dr-Mohamed-Barakat',
    date: new Date(2024, 2, 27),
    value: 300,
    subtitle: 'أخصائي جراحة العظام',
    experts: 6,
    value_2: 150,
    next_day: '27 FEB',
    next_time: '10 م - 9 م',
    rate: 4.1,
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/Mohamedbarakat.jpg',
  },
  {
    name: 'أحمد قاسم',
    path:'doctors/Dr-Ahmed-Kassem',
    date: new Date(2024, 2, 27),
    value: 500,
    subtitle: 'أخصائي أمراض القلب',
    experts: 7,
    value_2: 200,
    next_day: '27 FEB',
    next_time: '3.30 م - 4.30 م',
    rate: 4.9,
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/AhmedKassem.jpg',
  },
  {
    name: 'عمرو مصطفى',
    path:'doctors/Dr-Amr-Mostafa',
    date: new Date(2024, 2, 22),
    value: 550,
    subtitle: 'استشاري جراحة العظام',
    experts: 7,
    value_2: 210,
    next_day: '22 FEB',
    next_time: '3.30 م - 4.30 م',
    rate: 4.9,
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/Amr_Moustafa.png',
  },
  {
    name: 'ياسر جمعة',
    path:'doctors/Dr-Yasser-Gomaa',
    date: new Date(2024, 2, 26),
    value: 300,
    subtitle: 'استشاري الجراحة العامة',
    experts: 7,
    value_2: 100,
    next_day: '26 FEB',
    next_time: '3.30 م - 4.30 م',
    rate: 4.2,
    image:
      'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ex_Gomaa-Yassert.jpg',
  },
]);

const sortedData = computed(() => {
  return [...data.value].sort((a, b) => {
    if (sortOrder.value === 'asc')
      return a.value - b.value;
    else
      return b.value - a.value;
  });
});

const searchTerm = ref('');
</script>

<template>
  <div class="bg-gray-200">
    <v-container>
      <div
        class="sort flex flex-col md:flex-row justify-end gap-6 md:gap-40 rounded"
      >
        <div class="pb-2">
          <input
            v-model="searchTerm"
            placeholder="ابحث بإسم الدكتور"
            class="text-center rounded w-full py-1"
            style="border: 1px solid rgb(153, 148, 148)"
          >
          <ul />
        </div>
        <div class="date flex flex-col">
          <div
            class="mb-2 sort rounded-md flex justify-center items-center py-1 px-4 gap-2 cursor-pointer"
            style="border: 1px solid"
            @click="dateLabel = !dateLabel"
          >
            <i class="fa-solid fa-arrow-down-short-wide" />
            <h1>ترتيب حسب أقرب موعد</h1>
          </div>
          <div class="labels flex justify-end">
            <div
              v-show="dateLabel"
              style="border: 1px solid"
              class="labels py-1 px-4 rounded-md flex flex-col justify-center items-end"
              @click="changSort()"
            >
              <label class="cursor-pointer">
                <input v-model="nortOrder" type="radio" value="asc">
                حسب الموعد الأقرب
              </label>
              <label class="cursor-pointer">
                <input v-model="nortOrder" type="radio" value="desc"> حسب
                الموعد الأبعد</label>
            </div>
          </div>
        </div>
        <div class="price flex flex-col">
          <div
            class="mb-2 sort rounded-md flex justify-center items-center py-1 px-4 gap-2 cursor-pointer"
            style="border: 1px solid"
            @click="label = !label"
          >
            <i class="fa-solid fa-arrow-down-short-wide" />
            <h1>ترتيب حسب السعر</h1>
          </div>
          <div class="labels flex justify-end">
            <div
              v-show="label"
              style="border: 1px solid"
              class="labels py-1 px-4 rounded-md flex flex-col justify-center items-end"
              @click="changeDateFilter()"
            >
              <label class="cursor-pointer">
                <input v-model="sortOrder" type="radio" value="asc">
                من الأقل للأعلى
              </label>
              <label class="cursor-pointer">
                <input v-model="sortOrder" type="radio" value="desc"> من
                الأعلى للأقل</label>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-10 w-100">
        <v-row>
          <v-col
            v-for="item in filteredData"
            :key="item.image"
            cols="12"
            class="mt-10 flex gap-20 py-10 rounded-md flex flex-col md:flex-row-reverse items-center justify-start gap-0 md:gap-2 w-100 bg-white"
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
              >
              <div class="text flex flex-col items-center justify-center mr-4">
                <nuxt-link
                :to="item.path"
                  class="cursor-pointer w-32 font-bold text-xl"
                  style="text-decoration: underline"
                >
                  د/ {{ item.name }}
                </nuxt-link>
                <h1 class="text-gray-700 w-32 text-sm mt-1">
                  {{ item.subtitle }}
                </h1>
                <div class="star text-center">
                  {{ item.rate }}<i class="fa-solid fa-star ml-1 mt-2" />
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
                <h1 style="direction: rtl">
                  {{ item.value }} جنيه/كشف
                </h1>
                <h1 style="direction: rtl">
                  {{ item.value_2 }} جنيه/استشارة
                </h1>
              </div>
              <div class="next-time flex gap-4">
                <div
                  class="reservation w-32 flex flex-col gap-4 md:mr-32 mt-14 text-center justify-center"
                >
                  <nuxt-link
                    class="px-2 py-1 bg-green-400 rounded-md md:px-10 cursor-pointer"
                    :to="item.path"
                  >
                    احجز موعد
                  </nuxt-link>
                  
                </div>
                <div class="text-center flex flex-col justify-center">
                  <h1 class="mb-2 mt-6 md:mt-1">
                    أقرب موعد
                  </h1>
                  <div
                    class="colored-text w-100 rounded-md"
                    style="border: 1px solid rgb(201, 195, 195)"
                  >
                    <div
                      class="date flex justify-around items-center px-2 py-1 bg-yellow gap-10"
                    >
                      <h1 style="direction: rtl">
                        {{ item.next_day }}
                      </h1>
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
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
