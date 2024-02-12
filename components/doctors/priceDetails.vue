<template>
  <v-container class="mt-20"
    ><v-row
      class="bg-white rounded-lg mx-auto"
      style="width: 60%; border: 1px solid rgb(173, 171, 171)"
      ><v-col cols="12"
        ><h1 class="text-end text-4xl my-4 mr-2 font-bold">تفاصيل الدفع</h1>
        <h1 class="text-end mr-2 mt-8 text-xl font-bold">تفاصيل الجلسة</h1>
        <!-- بداية كارت الدكتور -->
        <div
          class="bg-white rounded-lg mx-auto"
          style="border: 1px solid rgb(173, 171, 171)"
        >
          <v-col cols="12" class="flex justify-end gap-10 items-center"
            ><img
            class="rounded-full"
            style="
                  border: 1px solid rgb(133, 128, 128);
                  width: 150px;
                  height: 150px;
                "
              :src="doctorImage"
              alt=""
          /></v-col>
        </div>
        <!-- نهاية كارت الدكتور -->
      </v-col></v-row
    ></v-container
  >
</template>
<script setup>
// تحديد prop
const props = defineProps(['doctorImage']);
</script>