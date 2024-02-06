<template>
    <v-container
      class="shadow-md"
      style="border-bottom: 1px solid rgb(173, 168, 168)"
      ><v-row
        ><v-col cols="12" class="mt-6"
          ><h1 class="text-end font-bold text-2xl">إلغاء</h1></v-col
        ><v-col cols="12" class="flex justify-between items-center"
          ><h1 class="font-bold text-2xl cursor-pointer" @click="show_dialog">
            {{ dialog ? "-" : "+" }}
          </h1>
          <h1
            class="font-bold cursor-pointer"
            style="text-decoration: underline"
            @click="show_dialog"
          >
            كيفية إلغاء الجلسة؟
          </h1></v-col
        >
        <div class="dialog-1 w-100" v-show="dialog">
          <v-col cols="12"
            ><h1 style="direction: rtl">
              إذا كنت بحاجة إلى إلغاء الحجز، فيرجى القيام بذلك قبل 24 ساعة من
              ميعاد الجلسة لتجنب أي خصم من المبلغ المدفوع. إذا قمت بإلغائها في
              خلال أقل من 24 ساعة من ميعاد الجلسة، فسيتم خصم 50٪ من المبلغ
              المدفوع. إذا قمت بإلغائها قبل 3 ساعات من الجلسة او في حالة عدم
              الحضور، فلن يتم رد أي نسبة من المبلغ المدفوع.
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
  