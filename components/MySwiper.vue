<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const modules = [EffectCoverflow, Pagination];
</script>

<template>
  <Swiper
    effect="coverflow" :grab-cursor="true" :centered-slides="true" slides-per-view="auto" :coverflow-effect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper text-center h-36 md:h-24"
  >
    <SwiperSlide>
      <h1>
        دكتورة مريحة نفسياً وصعب إني ارتاح لحد بسهولة، اول مرة ومش اخر مرة
        ومكملة على طول لحد ما اتعالج. ربنا يباركلها يا رب
      </h1>
    </SwiperSlide>
    <SwiperSlide>
      <h1>
        استفدت جدا وسمعت كلام الدكتورة ونفذته وفرق معايا أوي. هي دكتورة مريحة
        جدا ومستمعة جيدة جدا وكريمة في معلوماتها
      </h1>
    </SwiperSlide>
    <SwiperSlide>
      <h1>
        الدكتورة كانت بتسمع جدًا وتسألني اسئلة بتفرق فعلًا في التشخيص وقعدت
        معايا وقت أكتر من وقت الجلسة المفروض وكانت لطيفة وبتحاول تشيل الضغط وبجد
        تجربة كويسة فوق المتوقع وهكررها أكيد
      </h1>
    </SwiperSlide>
    <SwiperSlide>
      <h1>
        دكتورة محترمة جدا بجد واستوعبت مشكلتى واستقبلت منها ومن كلامها طاقة
        ايجابية كبيرة.. بشكرها جدا ❤️😍
      </h1>
    </SwiperSlide>
    <SwiperSlide>
      <h1>
        الدكتور شخصية محترمة جدا، والجلسة كانت مريحة، مستمع جيد، وكمان اداني
        تطبيقات أقدر اعملها خلال الاسبوع الجاي، أحب اشكره جدا.. وان شاء الله مش
        اخر جلسة مع حضرتك
      </h1>
    </SwiperSlide>
    <SwiperSlide>
      <h1>
        حقيقي مرتاحة جدا وبشكر الدكتورة جدا جدا... زودت حماسي اكتر للعلاج
        وحسستني أن في امل اتغير وده اداني طاقة إيجابية عالية
      </h1>
    </SwiperSlide>
    <SwiperSlide>
      <h1>
        مرتاحة جدا والدكتور فعلا مستمع جيد لأبعد حد وانا اتبسطت جدا أنى اتكلمت
        لأول مرة ف حياتي وخرجت اللي جوايا
      </h1>
    </SwiperSlide>
    <SwiperSlide>
      <h1>
        الجلسة بتكون كافية إنك تتكلم مع الدكتور براحتك، وتقول كل اللي عندك،
        بعدها الدكتور بيوضح بعض النقاط لك، وفيه متابعة بتستمر مع المستخدم جزاكم
        الله خيرا
      </h1>
    </SwiperSlide>
  </Swiper>
</template>
