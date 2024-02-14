<script setup lang="ts">
// تحديد prop
const props = defineProps(['doctorImage', 'doctorName', 'doctorSubtitle', 'visitingDate', 'visitingDuration', 'visitingTime', 'visitingType', 'theField', 'visitingPrice']);
</script>

<template>
  <v-container class="mt-20">
    <v-row class="bg-gray-300 rounded-lg mx-auto mainCard" style="border: 1px solid rgb(173, 171, 171)">
      <v-col cols="12">
        <h1 class="text-end text-4xl my-4 mr-2 font-bold">
          تفاصيل الدفع
        </h1>
        <h1 class="text-end mr-2 mt-8 text-xl font-bold">
          تفاصيل الجلسة
        </h1>
        <!-- بداية كارت الدكتور -->
        <div class="bg-white rounded-lg mx-auto" style="border: 1px solid rgb(173, 171, 171)">
          <v-col cols="12" class="flex flex-row-reverse justify-center gap-4">
            <img
              class="rounded-full image" style="
                border: 1px solid rgb(133, 128, 128);
              " :src="doctorImage" alt=""
            >
            <div class="name flex flex-col items-center justify-center">
              <h1 class="font-bold text-xl" style="text-decoration: underline">
                {{ props.doctorName }}
              </h1>
              <h1 class="text-gray-700 text-sm mt-1">
                {{ props.doctorSubtitle }}
              </h1>
            </div>
          </v-col> <v-col cols="12" class="mx-auto" style="border-bottom:1px solid ;width: 95%; transform: translateY(-30%);" />
          <v-col cols="12" class="flex flex-col md:flex-row-reverse justify-center items-center gap-10 md:gap-20">
            <!-- START DATE -->
            <div class="date flex-col items-center justify-center text-center">
              <h1 class="mb-2 text-sm text-gray-500">
                التاريخ
              </h1> <h1 class="mb-4">
                {{ props.visitingDate }}
              </h1> <h1 class="mb-1 text-sm text-gray-500">
                مدة الجلسة
              </h1> <h1 class="mb-2" style="direction: rtl;">
                {{ props.visitingDuration }} دقيقة
              </h1>
            </div>
            <!-- START TIME -->
            <div class="time flex-col items-center justify-center text-center">
              <h1 class="mb-2 text-sm text-gray-500">
                الوقت
              </h1> <h1 class="mb-4" style="direction: rtl;">
                {{ props.visitingTime }}
              </h1> <h1 class="mb-1 text-sm text-gray-500">
                نوع الجلسة
              </h1> <h1 class="mb-2">
                {{ props.visitingType }}
              </h1>
            </div>
            <!-- START PRICE -->
            <div class="date flex-col items-center justify-center text-center">
              <h1 class="mb-2 text-sm text-gray-500">
                المجال
              </h1> <h1 class="mb-4">
                {{ props.theField }}
              </h1> <h1 class="mb-1 text-sm text-gray-500">
                السعر
              </h1> <h1 class="mb-2" style="direction: rtl;">
                {{ props.visitingPrice }} ج
              </h1>
            </div>
          </v-col>
        </div>
        <!-- نهاية كارت الدكتور -->
      </v-col>
      <v-col cols="12">
        <div class="mx-auto" style="border-bottom:1px solid ;transform: translateY(-30%);" />
      </v-col>
      <!-- تفاصيل الدفع -->
      <v-col cols="12" class="flex items-center justify-between bg-white">
        <h1 style="direction: rtl;">
          {{ props.visitingPrice }} جنيه
        </h1><h1>:السعر</h1>
      </v-col>
      <v-col cols="12">
        <div class="mx-auto" style="border-bottom:1px solid ;transform: translateY(-30%);" />
      </v-col>
      <!-- طريقة الدفع -->
      <v-col cols="12">
        <h1 class="text-end text-xl font-bold">
          طريقة الدفع
        </h1>
      </v-col>
      <v-col cols="12">
        <div class="labels flex flex-col gap-4 bg-white">
          <label for="visa" class="flex justify-between bg-white shadow-md py-2 px-2 rounded cursor-pointer">
            <input id="visa" name="paymentMethod" value="vodafoneCash" type="radio">
            <h1>بطاقة ائتمان<Icon name="fa6-brands:cc-visa" class="text-2xl ml-1" /></h1>
          </label>
          <label for="vodafone2" class="flex justify-between bg-white shadow-md py-2 px-2 rounded cursor-pointer">
            <input id="vodafone2" name="paymentMethod" value="vodafoneCash" type="radio">
            <h1>فودافون كاش <Icon name="simple-icons:vodafone" color="red" class="text-2xl ml-1" /></h1>
          </label>
          <label for="wallet" class="flex justify-between bg-white shadow-md py-2 px-2 rounded cursor-pointer">
            <input id="wallet" name="paymentMethod" value="vodafoneCash" type="radio">
            <h1>المحافظ الإلكترونية<Icon name="material-symbols:video-stable" class="text-2xl ml-1" /></h1>
          </label>
        </div>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">بالضغط على "إحجز الجلسة" أنت توافق على  <span class="text-green-700 cursor-pointer" style="text-decoration: underline;">تعليمات الجلسة</span> و <span class="text-green-700 cursor-pointer" style="text-decoration: underline;">رسوم الإلغاء</span> </h1>
      </v-col>
      <v-col cols="12" class="flex justify-center"><h1 class="text-center bg-green-darken-3 w-48 py-3 text-lg cursor-pointer rounded-md">احجز الجلسة</h1></v-col>
    </v-row>
  </v-container>
</template>

<style>
  .mainCard {
  width: 60%;
}
.image {
  width: 150px;
  height: 150px;
}
@media (max-width: 660px) {
  .mainCard {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .image {
    width: 100px;
    height: 100px;
  }
}
</style>
