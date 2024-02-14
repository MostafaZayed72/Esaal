<script setup>
const dialog = ref(false);
function show_dialog() {
  dialog.value = !dialog.value;
}
</script>

<template>
  <v-container
    class="shadow-md"
    style="border-bottom: 1px solid rgb(173, 168, 168)"
  >
    <v-row>
      <v-col cols="12" class="flex justify-between items-center">
        <h1 class="font-bold text-2xl cursor-pointer" @click="show_dialog">
          {{ dialog ? "-" : "+" }}
        </h1>
        <h1
          class="font-bold cursor-pointer"
          style="text-decoration: underline"
          @click="show_dialog"
        >
          كم عدد الجلسات اللتي يتم حجزها مع الطبيب أو المعالج؟
        </h1>
      </v-col>
      <div v-show="dialog" class="dialog-1 w-100">
        <v-col cols="12">
          <h1 style="direction: rtl">
            عدد الجلسات تختلف من شخص لأخر و لكن الحد الأقصى يكون 6 جلسات و يتم
            تحديدها بين المستخدم و المعالج الخاص بالحالة.
          </h1>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
