<template>
  <v-container
    class="shadow-md"
    style="border-bottom: 1px solid rgb(173, 168, 168)"
    ><v-row
      ><v-col cols="12" class="mt-6"
        ><h1 class="text-end font-bold text-2xl">مشاكل أخرى</h1></v-col
      ><v-col cols="12" class="flex justify-between items-center"
        ><h1 class="font-bold text-2xl cursor-pointer" @click="show_dialog">
          {{ dialog ? "-" : "+" }}
        </h1>
        <h1
          class="font-bold cursor-pointer"
          style="text-decoration: underline"
          @click="show_dialog"
        >
          ماذا أفعل إذا واجهت مشكلة قبل أو بعد الجلسة؟
        </h1></v-col
      >
      <div class="dialog-1 w-100" v-show="dialog">
        <v-col cols="12"
          ><h1 style="direction: rtl">
            يرجى الدخول على الموقع للتحدث مع أحد أفراد فريق الدعم الفني المتاح
            لخدمتك على مدار الساعة سواء قبل الجلسة لمساعدتك في دخول الجلسة أو
            اثناء الجلسة أو بعد انتهاء الجلسة.
          </h1></v-col
        >
      </div></v-row
    ></v-container
  >
</template>

<script setup>
const dialog = ref(false);
const show_dialog = () => {
  dialog.value = !dialog.value;
};
</script>
