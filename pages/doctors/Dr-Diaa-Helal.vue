<script setup lang="ts">
const doctorImage = ref(
  'https://scontent.fcai19-8.fna.fbcdn.net/v/t1.15752-9/417601018_1443853876487667_7120476536903815791_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF7NrNX0twqgHFrPpMQ-B08R3wx1dDcXVNHfDHV0NxdU_1po9MbclbhTO6tAIu8eyEoHzrmpUZasAAKH0oEPm3s&_nc_ohc=iw5J7GiszvsAX-eoDq_&_nc_ht=scontent.fcai19-8.fna&oh=03_AdRrO4nj0dhn33g6nGK53UQ_Gj-HtRJkZTOP6OhHJoLDrA&oe=65F4A946',
);
const doctorName = ref('د/ ضياء هلال');
const doctorSubtitle = ref('استشاري تغذية');
const visitingDate =ref("11/3/2024")
const visitingDuration=ref("30")
const visitingTime=ref("3.30م - 4.30م")
const visitingType = ref("كشف");
const theField=ref("التغذية واللياقة");
const visitingPrice=("230");
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
