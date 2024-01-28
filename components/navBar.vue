<template>
  <v-container class="bg-red-300 text-gray-700 flex justify-between w-full items-center sticky z-10 mx-auto top-0"
    ><img
      src="/assets/imgs/Momento-logo.png"
      class="h-16 w-40 cursor-pointer"
      alt=""
    />
    <div class="links flex gap-10 font-bold text-xl">
      <NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/"
        >Home</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/shop"
        >Shop</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/blog"
        >Blog</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/pages"
        >Pages</NuxtLink
      ><NuxtLink
        class="cursor-pointer hover:text-white hover:text-lg"
        style="transition: 0.5s"
        to="/content"
        >Contact</NuxtLink
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
