<template>
  <div>
    <div class="table w-3/5 bg-slate-300 mx-auto mt-4 shadow-xl rounded-md">
      <h1
        class="h-10 text-white text-md md:text-2xl flex items-center justify-center mb-10"
        style="background-color: rgb(0, 51, 51); direction: rtl"
      >
        اختر المجال ثم وسيلة التواصل
      </h1>
      <div
        class="icons flex flex-col gap-10 items-center justify-around lg:flex-row"
      >
        <div
          class="bg-gray-400 icon-table text-center rounded-md cursor-pointer transition duration-300 hover:bg-emerald-900 hover:text-white"
          style="width: 150px; height: 150px; transform: translateY(-25px)"
        >
          <i class="fa-solid fa-apple-whole text-5xl mt-12"></i>
          <h1 class="font-bold text-lg mt-2">استشارات تغذية</h1>
        </div>
        <div
          class="bg-gray-400 icon-table text-center rounded-md cursor-pointer hover:bg-emerald-900 hover:text-white"
          style="width: 150px; height: 150px; transform: translateY(-25px)"
        >
          <i class="fa-solid fa-user-doctor text-5xl mt-12"></i>
          <h1 class="font-bold text-lg mt-2">استشارات نفسية</h1>
        </div>
        <div
          @click="show_medical"
          class="bg-gray-400 icon-table text-center rounded-md cursor-pointer hover:bg-emerald-900 hover:text-white"
          style="width: 150px; height: 150px; transform: translateY(-25px)"
        >
          <i class="fa-solid fa-stethoscope text-5xl mt-12"></i>
          <h1 class="font-bold text-lg mt-2">استشارات طبية</h1>
        </div>
      </div>

      <div
        class="medical_menu bg-slate-300 mx-auto mt-4 shadow-xl rounded-md"
        v-show="medical_menu"
      >
        <div
          class="line text-center mx-auto"
          style="border-bottom: 1px solid rgb(177, 170, 170); width: 80%"
        ></div>
        <div class="select flex flex-col items-end justify-center gap-2">
          <h1 class="text-end mr-20 mt-2">اختر التخصص و وسيلة التواصل</h1>
<v-select class="w-80 mr-20" v-model="selectedItem"
          :items="items"
          ></v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const medical_menu = ref(false);
const show_medical = () => {
  medical_menu.value = !medical_menu.value;
};
const selectedItem = ref("جراحة");
const items = ["Arabic / اللغة العربية" , "English / اللغة الإنجليزية"];
</script>
