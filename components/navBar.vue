<script setup>
const elevation = ref(0); // الظل الابتدائي
const showNavbar = ref(true); // تحديد ما إذا كان يجب إظهار Navbar

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  elevation.value = scrollTop > 100 ? 4 : 0; // تحديد الظل بناءً على قيمة السكرول
  showNavbar.value = scrollTop > 100; // تحديد ما إذا كان يجب إظهار Navbar بناءً على قيمة السكرول
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
<template>
  <v-container
    class="bg-gray-300 navBar text-gray-700 flex justify-between w-full items-center z-10 mx-auto"
    v-if="!showNavbar"
    ><img
      src="/assets/imgs/Momento-logo.png"
      class="h-16 w-40 cursor-pointer"
      alt=""
    />
    <div class="links flex flex-row-reverse gap-10 font-bold text-xl">
      <NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/"
        >الرئيسية</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/shop"
        >تسوق</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/blog"
        >العروض</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/pages"
        >الأقسام</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/content"
        >تواصل معنا</NuxtLink
      >
    </div>
    <div class="icons flex gap-6">
      <div class="search flex g-1">
        <v-icon class="ml-2">mdi-magnify</v-icon
        ><NuxtLink class="cursor-pointer hover:text-red-500">Search</NuxtLink
        ><v-badge color="red" location="top" content="3" floating
          ><v-icon class="ml-2">mdi-cart-outline</v-icon></v-badge
        ><NuxtLink class="cursor-pointer hover:text-red-500">Shop</NuxtLink>
      </div>

      <v-icon class="cursor-pointer hover:text-red-500">mdi-menu</v-icon>
    </div></v-container
  >
  <v-container
    class="bg-white navBar text-gray-700 flex justify-between w-full items-center sticky z-10 mx-auto top-0 shadow-xl" 
    v-if="showNavbar" 
    ><img
      src="/assets/imgs/Momento-logo.png"
      class="h-16 w-40 cursor-pointer"
      alt=""
    />
    <div class="links flex flex-row-reverse gap-10 font-bold text-xl">
      <NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/"
        >الرئيسية</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/shop"
        >تسوق</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/blog"
        >العروض</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/pages"
        >الأقسام</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/content"
        >تواصل معنا</NuxtLink
      >
    </div>
    <div class="icons flex gap-6">
      <div class="search flex g-1">
        <v-icon class="ml-2">mdi-magnify</v-icon
        ><NuxtLink class="cursor-pointer hover:text-red-500">Search</NuxtLink
        ><v-badge color="red" location="top" content="3" floating
          ><v-icon class="ml-2">mdi-cart-outline</v-icon></v-badge
        ><NuxtLink class="cursor-pointer hover:text-red-500">Shop</NuxtLink>
      </div>

      <v-icon class="cursor-pointer hover:text-red-500">mdi-menu</v-icon>
    </div></v-container
  >
</template>
<style>
.header {
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 1300px) {
  .links {
    display: none;
  }
}
</style>
