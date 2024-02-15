<script setup lang="ts">
const doctorImage = ref(
  'https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/pic/images/experts/ex_Gomaa-Yassert.jpg',
);
const doctorName = ref('د/ ياسر جمعة');
const doctorSubtitle = ref('استشاري الجراحة العامة');
const visitingDate =ref("26/2/2024")
const visitingDuration=ref("30")
const visitingTime=ref('3.30 م - 4.30 م')
const visitingType = ref("كشف");
const theField=ref("الجراحة العامة");
const visitingPrice=("300");
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
