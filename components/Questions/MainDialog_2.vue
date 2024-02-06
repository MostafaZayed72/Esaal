<template>
  <v-container
    ><v-row
      ><v-col cols="12" class="flex justify-between items-center"
        ><h1 class="font-bold text-2xl cursor-pointer" @click="show_dialog">
          {{ dialog ? "-" : "+" }}
        </h1>
        <h1
          class="font-bold cursor-pointer"
          style="text-decoration: underline"
          @click="show_dialog"
        >
          كيفية اختيار الخبير المناسب؟
        </h1></v-col
      >
      <div class="dialog-2 w-100" v-show="dialog">
        <v-col cols="12"
          ><h1 style="direction: rtl">
            اختيار الخبير او المعالج المناسب يتم على حسب كل حالة.
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            بالنسبة للمجال الطبي، يتم اختيار الطبيب على حسب التخصص اما المجال
            النفسي يتم الاختيار بين الطبيب النفسي والأخصائي أو المعالج النفسي
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl" class="font-bold">
            الطبيب النفسي:
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            - الطب النفسي هو فرع من فروع كلية الطب.
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            - يعمل الطبيب النفسي على المستوى النفسي و البيولوجي في ذات الوقت
            لفهم طبيعة جسم الانسان و تاريخه.
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            - يستطيع الطبيب النفسي وصف أدوية نفسية و معرفة أعراضها و الأدوية
            التي تتعارض مع حالة الشخص.
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl" class="font-bold mt-20">
            الأخصائي او المعالج النفسي:
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">- شخص يدرس علم نفس</h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            - يساعد الاشخاص على فهم و تفسير تغيراتهم السلوكية وذلك بعدما يحصل
            على تدريب مكثف في هذا المجال.
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            - متخصصون في حل المشكلات مثل اضطرابات النوم والتوتر في العلاقات
            العاطفية والمشاكل السلوكية وغيرها.
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            - لا يمكن للأخصائي النفسي وصف علاج دوائي، لكنه يعرف جيدًا كيف يتعامل
            بشكل علمي واحترافي مع المشاكل النفسية
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl" class="mt-16">المجال الغذائي:</h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            ما الفرق بين الاستشارة و المتابعة و ما سبب اختلاف السعر بينهما؟
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            الاستشارة هي الجلسة الاولى التي يحدد الدكتور من خلالها النظام
            الغذائي المطلوب اتباعه و التحاليل المطلوبة إن وجدت لتحديد النظام
            الغذائي الأمثل، بعدها يتم ارسال النظام الغذائي للمستخدم عن طريق
            الايميل، ويتم الاتفاق على ميعاد للمتابعة بعد مدة محددة لتحليل
            النتائج وتجديد النظام الغذائي للفترة التالية حسب حاجة الحالة
            واستجابتها.
          </h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl" class="mt-16">المجال الطبي:</h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">هل الإستشارة بديلة للكشف؟</h1></v-col
        >
        <v-col cols="12"
          ><h1 style="direction: rtl">
            الاستشارات الطبية الإلكترونية لا تعتبر بديلاً عن الاستشارة الطبية
            المهنية في العيادة لكنها تساعد على تشخيص مبدئي للحالة وتوجيهها
            للخطوة التالية من حيث التخصص المناسب والتحاليل والأشعات المطلوبة.
          </h1></v-col
        >
      </div></v-row
    ></v-container
  >
</template>

<script setup>
const dialog = ref(false);
const show_dialog = () => {
  dialog.value = !dialog.value;
};
</script>
