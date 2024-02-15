<script setup lang="ts">
const doctorImage = ref(
  'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1707587082~exp=1707587682~hmac=2a559f9ccf3e28272baefb518d525e4cc6863e6f718ecf699a582f21e85686b7',
);
const doctorName = ref('د/ مصطفى زيدان');
const doctorSubtitle = ref('استشاري تغذية');
const visitingDate =ref("24/2/2024")
const visitingDuration=ref("30")
const visitingTime=ref('10 م - 9 م')
const visitingType = ref("كشف");
const theField=ref("التغذية واللياقة");
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
