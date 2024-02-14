<script setup>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>

<template>
  <v-btn class="scroll-to-top-btn bg-green-darken-4" icon @click="scrollToTop">
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 11;
}
</style>
