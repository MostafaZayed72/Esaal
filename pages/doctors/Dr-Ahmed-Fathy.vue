<script setup lang="ts">
const doctorImage = ref(
  'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/Dr.Ahmed-fathy-ismail10-1-2024.jpg',
);
const doctorName = ref('د/ أحمد فتحي');
const doctorSubtitle = ref('أخصائي نفسي');
const visitingDate =ref("22/2/2024")
const visitingDuration=ref("30")
const visitingTime=ref('3.30 م - 4.30 م')
const visitingType = ref("كشف");
const theField=ref("الصحة النفسية والإستشارات الزويجة");
const visitingPrice=("550");
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
