<template>
  <v-container class="take_up bg-gray-300 md:rounded-xl"
    ><v-row
      ><v-col cols="12"
        ><h1 class="text-end text-3xl font-bold">الأسئلة الشائعة</h1></v-col
      ><v-col cols="12"><p class="text-end">المحتوى</p></v-col>
      <v-col
        cols="12"
        class="flex flex-row-reverse gap-8 md:gap-60 items-center"
        ><nuxt-link
          class="cursor-pointer flex justify-end items-center gap-1"
          to=""
          ><p class="font-bold" style="text-decoration: underline"  @click="scrollToSection('#section1')" >عام</p>
          <i class="fa-solid fa-arrow-down"></i
        ></nuxt-link>
        <nuxt-link
          class="cursor-pointer flex justify-end items-center gap-1"
          to=""
          ><p class="font-bold" style="text-decoration: underline">الدفع</p>
          <i class="fa-solid fa-arrow-down"></i
        ></nuxt-link>
        <nuxt-link
          class="cursor-pointer flex justify-end items-center gap-1"
          to=""
          ><p class="font-bold" style="text-decoration: underline">إلغاء</p>
          <i class="fa-solid fa-arrow-down"></i
        ></nuxt-link>
        <nuxt-link
          class="cursor-pointer flex justify-end items-center gap-1"
          to=""
          ><p class="font-bold" style="text-decoration: underline">
            مشاكل أخرى
          </p>
          <i class="fa-solid fa-arrow-down"></i></nuxt-link></v-col
      ><QuestionsMainDialog_2 /><QuestionsPurchase /><QuestionsCancel /><QuestionsProblemDialog_1 /><QuestionsProblemDialog_2 /></v-row
  ></v-container>
</template>

<script setup>
const scrollToSection = (hash) => {
  if (hash) {
    window.scrollTo({
      top: document.querySelector(hash).offsetTop,
      behavior: 'smooth',
    });
  }
};
</script>

<style>
@media (min-width: 900px) {
  .take_up {
    transform: translateY(-200px);
  }
}
@media (max-width: 899px) {
  .take_up {
    transform: translateY(-100px);
  }
}
</style>
