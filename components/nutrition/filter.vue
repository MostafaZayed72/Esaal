<script setup>
const searchTerm = ref('');

function changSort() {
  sortOrder.value = '';
}

function changNort() {
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

const label = ref(false);
const dateLabel = ref(false);

const sortOrder = ref('');
const nortOrder = ref('');
const data = ref([
  {
    name: 'أحمد متولي',
    date: new Date(2024, 2, 21),
    path: '/doctors/dr-ahmed-metwally',
    value: 150,
    subtitle: 'أخصائي تغذية',
    experts: 4,
    value_2: 100,
    next_day: '21 FEB',
    next_time: '10.30 م - 11.30 م',
    rate: 4.5,
    image:
      ' https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1707507653~exp=1707508253~hmac=8b5f43967ce74599905c90e60741ccbefbb150224a9f7740d8aad016427b4d22',
  },
  {
    name: 'معتز عبدالسميع',
    path: '/doctors/Dr-Moataz-Abdelsamie',
    date: new Date(2024, 2, 22),
    value: 200,
    subtitle: 'أخصائي تغذية',
    experts: 4,
    value_2: 100,
    next_day: '22 FEB',
    next_time: '10.30 م - 11.30 م',
    rate: 4.5,
    image:
      ' https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/hamdy-abbas.jpg',
  },
  {
    name: 'محمد بيومي',
    path:'/doctors/Dr-Mohamed-Bayoumi',
    date: new Date(2024, 2, 23),
    value: 250,
    subtitle: 'استشاري تغذية',
    experts: 9,
    value_2: 150,
    next_day: '23 FEB',
    next_time: '8.30 م - 9.30 م',
    rate: 4.8,
    image:
      'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
  },
  {
    name: 'مصطفى زيدان',
    path:'/doctors/Dr-Mostafa-Zedan',
    date: new Date(2024, 2, 24),
    value: 300,
    subtitle: 'أخصائي تغذية',
    experts: 6,
    value_2: 150,
    next_day: '24 FEB',
    next_time: '10 م - 9 م',
    rate: 4.1,
    image:
      ' https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1707587082~exp=1707587682~hmac=2a559f9ccf3e28272baefb518d525e4cc6863e6f718ecf699a582f21e85686b7',
  },
  {
    name: 'ضياء هلال',
    date: new Date(2024, 3, 11),
    path:'/doctors/Dr-Diaa-Helal',
    value: 230,
    subtitle: 'استشاري تغذية',
    experts: 7,
    value_2: 200,
    next_day: '11 MARS',
    next_time: '3.30 م - 4.30 م',
    rate: 4.9,
    image:
      'https://scontent.fcai19-8.fna.fbcdn.net/v/t1.15752-9/417601018_1443853876487667_7120476536903815791_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF7NrNX0twqgHFrPpMQ-B08R3wx1dDcXVNHfDHV0NxdU_1po9MbclbhTO6tAIu8eyEoHzrmpUZasAAKH0oEPm3s&_nc_ohc=iw5J7GiszvsAX-eoDq_&_nc_ht=scontent.fcai19-8.fna&oh=03_AdRrO4nj0dhn33g6nGK53UQ_Gj-HtRJkZTOP6OhHJoLDrA&oe=65F4A946',
  },
]);

const nortedData = computed(() => {
  return [...data.value].sort((a, b) => {
    if (nortOrder.value === 'asc')
      return a.date - b.date;
    else
      return b.date - a.date;
  });
});

const sortedData = computed(() => {
  return [...data.value].sort((a, b) => {
    if (sortOrder.value === 'asc')
      return a.value - b.value;
    else
      return b.value - a.value;
  });
});
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
              @click="changNort()"
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
                  class="w-32 cursor-pointer font-bold text-xl"
                  style="text-decoration: underline"
                >
                  د/ {{ item.name }}
                </nuxt-link>
                <h1 class="text-gray-700 text-sm mt-1">
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
