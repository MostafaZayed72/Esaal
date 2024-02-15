<script setup lang="ts">
const doctorImage = ref(
  'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
);
const doctorName = ref('د/ محمد بيومي');
const doctorSubtitle = ref('استشاري تغذية');
const visitingDate =ref("23/2/2024")
const visitingDuration=ref("30")
const visitingTime=ref('8.30 م - 9.30 م')
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
