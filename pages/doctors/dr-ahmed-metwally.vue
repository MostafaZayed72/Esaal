<script setup lang="ts">
const doctorImage = ref(
  'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1707507653~exp=1707508253~hmac=8b5f43967ce74599905c90e60741ccbefbb150224a9f7740d8aad016427b4d22',
);
const doctorName = ref('د/ أحمد متولي');
const doctorSubtitle = ref('أخصائي التغذية العلاجية');
const visitingDate =ref("21/2/2024")
const visitingDuration=ref("30")
const visitingTime=ref("10.30م - 11.30م")
const visitingType = ref("كشف");
const theField=ref("التغذية واللياقة");
const visitingPrice=("150");
</script>

<template>
  <div class="parent">
    <div class="nav">
      <QuestionsNav />
    </div>
    <div>
      <DoctorsPurchaseDetails
        :doctor-image="doctorImage"
        :doctor-name="doctorName"
        :doctor-subtitle="doctorSubtitle"
        :visiting-date="visitingDate"
        :visiting-duration="visitingDuration"
        :visiting-time="visitingTime"
        :visiting-type="visitingType"
        :the-field="theField"
        :visiting-price="visitingPrice"
      />
    </div>
  </div>
</template>

<style>
.parent {
  background-image: url('/assets/imgs/background.jpg');
  background-size: cover;
}
</style>
