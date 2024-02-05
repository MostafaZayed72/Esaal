<template>
  <div class="our-fields bg-orange-300 py-32">
    <h1 class="font-bold text-center text-5xl mb-32">مجالاتنا</h1>
    <div
      class="row-1 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/psychological-therapy.svg"
          alt=""
        />
        <h1 class="font-bold">الصحة النفسية والإستشارات الزوجية</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/diet-nutrition.svg"
          alt=""
        />
        <h1 class="font-bold">التغذية واللياقة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/parenting-counseling.svg"
          alt=""
        />
        <h1 class="font-bold">استشارات تربوية</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/home.svg"
          alt=""
        />
        <h1 class="font-bold">استشارات زوجية وعلاقات</h1>
      </div>
    </div>

    <div
      class="row-2 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(96).svg"
          alt=""
        />
        <h1 class="font-bold">مشاكل المراهقة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/medical-consultation.svg"
          alt=""
        />
        <h1 class="font-bold">استشارات طبية</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/pediatrics.svg"
          alt=""
        />
        <h1 class="font-bold">طب أطفال</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/career.svg"
          alt=""
        />
        <h1 class="font-bold">استشارات تنمية ذاتية</h1>
      </div>
    </div>

    <div
      class="row-3 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Oldcare.svg"
          alt=""
        />
        <h1 class="font-bold">مشاكل الشيخوخة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/wondering.svg"
          alt=""
        />
        <h1 class="font-bold">الإضطرابات( الإكتئاب/ القلق/ الرهاب)</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(85).svg"
          alt=""
        />
        <h1 class="font-bold">المشاكل الجنسية</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/addiction-1.svg"
          alt=""
        />
        <h1 class="font-bold">الإدمان</h1>
      </div>
    </div>

    <div v-show="showMore"
      class="row-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(90).svg"
          alt=""
        />
        <h1 class="font-bold">جلدية وتناسلية</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Interal.svg"
          alt=""
        />
        <h1 class="font-bold">باطنة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(93).svg"
          alt=""
        />
        <h1 class="font-bold">أنف وأذن وحنجرة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(97).svg"
          alt=""
        />
        <h1 class="font-bold">مشاكل الأطفال</h1>
      </div>
    </div>

    <div v-show="showMore"
      class="row-5 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Orthopedics-1.svg"
          alt=""
        />
        <h1 class="font-bold">عظام</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/physic.svg"
          alt=""
        />
        <h1 class="font-bold">علاج طبيعي</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Surgery.svg"
          alt=""
        />
        <h1 class="font-bold">جراحة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Genecology.svg"
          alt=""
        />
        <h1 class="font-bold">نساء وتوليد</h1>
      </div>
    </div>

    <div v-show="showMore"
      class="row-6 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Old.svg"
          alt=""
        />
        <h1 class="font-bold">طب الشيخوخة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Family(1).svg"
          alt=""
        />
        <h1 class="font-bold">طب الأسرة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/General.svg"
          alt=""
        />
        <h1 class="font-bold">ممارس عام</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(91).svg"
          alt=""
        />
        <h1 class="font-bold">سكر وغدد صماء</h1>
      </div>
    </div>

    <div v-show="showMore"
      class="row-7 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(92).svg"
          alt=""
        />
        <h1 class="font-bold">طب أسنان</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Ophtamology.svg"
          alt=""
        />
        <h1 class="font-bold">عيون</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(89).svg"
          alt=""
        />
        <h1 class="font-bold">قلب</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Orology.svg"
          alt=""
        />
        <h1 class="font-bold">مسالك بولية</h1>
      </div>
    </div>

    <div v-show="showMore"
      class="row-8 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Oncology(Tumor).svg"
          alt=""
        />
        <h1 class="font-bold">أورام</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/kidney-organ.svg"
          alt=""
        />
        <h1 class="font-bold">كلى</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Neurology-1.svg"
          alt=""
        />
        <h1 class="font-bold">مخ وأعصاب</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Hepatology.svg"
          alt=""
        />
        <h1 class="font-bold">الكبد والجهاز الهضمي</h1>
      </div>
    </div>

    <div v-show="showMore"
      class="row-9 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/ChestandRespiratory.svg"
          alt=""
        />
        <h1 class="font-bold">صدر وجهاز تنفسي</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/ObesityandLaparoscopicSurgery.svg"
          alt=""
        />
        <h1 class="font-bold">جراحة سمنة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/lab.svg"
          alt=""
        />
        <h1 class="font-bold">تحاليل وأشعة</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/PlasticSurgery.svg"
          alt=""
        />
        <h1 class="font-bold">جراحة تجميل</h1>
      </div>
    </div>

    <div v-show="showMore"
      class="row-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:mb-20"
    >
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      ></div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Hematology1.svg"
          alt=""
        />
        <h1 class="font-bold">أمراض الدم</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/ocd-1.svg"
          alt=""
        />
        <h1 class="font-bold">اضطراب الوسواس القهري</h1>
      </div>
      <div
        class="icons text-center w-25 flex flex-col gap-3 justify-center items-center"
      >
        <img
          class="w-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/bbd.svg"
          alt=""
        />
        <h1 class="font-bold">اضطرابات الشخصية الحدية</h1>
      </div>
    </div>


    <div class="button text-center mt-10 md:mt-0">
      <button
        class="bg-gray-300 w-32 h-12 shadow-xl font-bold"
        @click="toggleShowMore"
      >
        {{ showMore ? "إظهار أقل" : "إظهار المزيد" }}
      </button>
    </div>



    <div
      class="bottom mt-64 flex flex-col md:flex-row justify-center items-center gap-10"
    >
      <h1 class="font-bold text-center text-xl text-green-700">
        إجابات متخصصة لجميع الأسئلة في كافة المجالات المتعلقة بالصحة
      </h1>
      <img
        src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/Layer%202.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showMore = ref(false);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>
