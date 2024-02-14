<template>
  <nav style="background-color: rgb(0, 51, 51)">
    <v-row class="main-row w-100 h-12">
      <v-col cols="12">
        <div
          class="languages lg:ml-20 mt-2 flex items-center lg:justify-start sm:justify-center gap-2 md:gap-5"
        >
          <NuxtLink
            class="text-white font-bold text-sm cursor-pointer"
            style="text-decoration: underline; letter-spacing: 1px"
          >
            AR-اللغة العربية
          </NuxtLink><NuxtLink
            class="text-white font-bold text-sm cursor-pointer"
            style="letter-spacing: 1px"
          >
            EN-English
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </nav>
</template>

<style>
@media (max-width: 767px) {
  .languages {
    justify-content: center;
  }
}
</style>
