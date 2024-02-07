<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper text-center rounded-xl"
  >
    <swiper-slide
      ><img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/SliderImages/311127728_1179410979330371_704532041288855464_n.jpg"
        alt="" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/SliderImages/311118999_1179411052663697_5154749047190443067_n.jpg"
        alt="" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/SliderImages/311052277_1179410989330370_2154348161242048820_n.jpg"
        alt="" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/SliderImages/295821614_1127191414552328_8907610229556513929_n.jpg"
        alt="" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/SliderImages/296489259_1131096860828450_637852646955215949_n.jpg"
        alt="" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/SliderImages/Entaleqi-ann.jpg"
        alt="" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/SliderImages/Check-me%20(LinkedIn).jpg"
        alt=""
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style>
@media (min-width: 920px) {
  .mySwiper {
    width: 900px;
  }
}
</style>
