<template>
  <div
    style="background-color: rgb(63, 188, 161)"
    class="w-100 flex items-center md:gap-10 font-bold text-xl mt-3"
  >
    <v-icon size="50px" class="ml-10">mdi-menu</v-icon>
    <div class="links sign-in">
      <NuxtLink to="">تسجيل الدخول</NuxtLink> /
      <NuxtLink to="">انشاء حساب</NuxtLink>
    </div>
    <img
      class="absolute right-5 md:right-16"
      src="/assets/imgs/logo_pal.svg"
      style="max-width: 150px"
      alt=""
    />
  </div>
</template>

<style>
@media (max-width: 767px) {
  .sign-in {
    display: none;
  }
}
</style>
