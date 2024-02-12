<template>
  <div class="parent">
    <div class="nav"><QuestionsNav /></div>
    <div><DoctorsPriceDetails :doctor-image="doctorImage" /></div>
  </div>
</template>

<script setup>
const doctorImage = ref(
  "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1707507653~exp=1707508253~hmac=8b5f43967ce74599905c90e60741ccbefbb150224a9f7740d8aad016427b4d22"
);
</script>

<style>
.parent {
  background-image: url("/assets/imgs/background.jpg");
  background-size: cover;
}
</style>
