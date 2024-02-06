<template>
  <div
    style="background-color: rgb(173, 177, 176)"
    class="w-100 z-10 h-20 md:h-20 sticky top-0 flex items-center justify-between font-bold text-xl"
  >
    <v-icon size="50px" class="ml-10">mdi-menu</v-icon>
    <div class="links ml-10 flex items-center gap-4">
      <div
        class="ask cursor-pointer py-1 flex justify-center items-center gap-2"
        style="width: 200px; background-color: rgb(0, 51, 51)"
      >
        <h1 class="text-white">اسأل خبير</h1>
        <i class="fa-regular fa-comment text-slate-300"></i>
      </div>
      <h1 class="text-lg">أو</h1>
      <div
        class="reservation cursor-pointer py-1 flex justify-center items-center gap-2"
        style="width: 200px; background-color: rgb(0, 51, 51)"
      >
        <h1 class="text-white">حجز استشارة</h1>
        <i class="fa-regular fa-calendar text-slate-300"></i>
      </div>
    </div>
    <img
      class="mr-10 cursor-pointer"
      src="/assets/imgs/logo_pal.svg"
      style="max-width: 150px"
      alt=""
      @click="redirectToHome"
    />
  </div>

  <div
    class="bottom-links z-10 w-4/5 md:w-3/5 mx-auto flex items-center justify-center gap-4 h-10 rounded-sm sticky top-20 md:top-32"
    style="background-color: rgb(173, 177, 176)"
  >
    <div
      class="ask cursor-pointer py-1 flex justify-center items-center gap-2"
      style="width: 200px; background-color: rgb(0, 51, 51)"
    >
      <h1 class="text-white">اسأل خبير</h1>
      <i class="fa-regular fa-comment text-slate-300"></i>
    </div>
    <h1 class="text-lg">أو</h1>
    <div
      class="reservation cursor-pointer py-1 flex justify-center items-center gap-2"
      style="width: 200px; background-color: rgb(0, 51, 51)"
    >
      <h1 class="text-white">حجز استشارة</h1>
      <i class="fa-regular fa-calendar text-slate-300"></i>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const redirectToHome = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style>
@media (max-width: 992px) {
  .links {
    display: none;
  }
}
@media (min-width: 992px) {
  .bottom-links {
    display: none;
  }
}
</style>
