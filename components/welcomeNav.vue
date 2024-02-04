<template>
  <div
    style="background-color: rgb(63, 188, 161)"
    class="w-100 flex items-center md:gap-10 font-bold text-xl mt-3 pt-10"
  >
    <v-icon size="50px" class="ml-10 cursor-pointer">mdi-menu</v-icon>
    <div class="links sign-in">
      <NuxtLink class="cursor-pointer" to="">تسجيل الدخول</NuxtLink> /
      <NuxtLink class="cursor-pointer" to="">انشاء حساب</NuxtLink>
    </div>
    <img
      class="absolute right-5 md:right-16 cursor-pointer"
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
