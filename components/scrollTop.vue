<template>
  <v-btn @click="scrollToTop" class="scroll-to-top-btn bg-green-darken-4" icon>
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 11;
}
</style>
