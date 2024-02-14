<script setup>
const dialog = ref(false);
function show_dialog() {
  dialog.value = !dialog.value;
}
</script>

<template>
  <v-container
    class="shadow-md"
    style="border-bottom: 1px solid rgb(173, 168, 168)"
  >
    <v-row>
      <v-col cols="12" class="mt-6">
        <h1 class="text-end font-bold text-2xl">
          عام
        </h1>
      </v-col><v-col cols="12" class="flex justify-between items-center">
        <h1 class="font-bold text-2xl cursor-pointer" @click="show_dialog">
          {{ dialog ? "-" : "+" }}
        </h1>
        <h1
          class="font-bold cursor-pointer"
          style="text-decoration: underline"
          @click="show_dialog"
        >
          كيفية حجز جلسة أونلاين؟
        </h1>
      </v-col>
      <div v-show="dialog" class="dialog-1 w-100">
        <v-col cols="12">
          <h1 style="direction: rtl">
            أولاً: اختر المجال المناسب من بين المجالات: استشارات نفسية، زوجية
            وأسرية، طبية، أو استشارات تغذية.
          </h1>
        </v-col>
        <v-col cols="12">
          <h1 style="direction: rtl">
            ثانيا: قم بإنشاء حساب بالايميل أو رقم الهاتف الخاص بك، ثم اختر
            الخبير المناسب لحالتك. اضغط على أقرب ميعاد لكل خبير أو للمزيد من
            المواعيد يرجى الضغط على (مواعيد أخرى)
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl">
            ثالثا: بعد اختيار الميعاد المناسب، يرجى الضغط على (احجز الجلسة)
            لتحويلك إلى صفحة الدفع. ستظهر لك 3 طرق لدفع الجلسة ( فوري/ فودافون
            كاش/ كارت الائتمان)
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl" class="font-bold">
            في حالة وجود كود خصم يرجى كتابة الكود قبل اختيار وسيلة الدفع والتأكد
            من تفعيله بنجاح
          </h1>
        </v-col>
        <v-col cols="12">
          <h1 style="direction: rtl">
            رابعا: بعد اختيار وسيلة الدفع سيتم ارسال ايميل ورسالة تأكيدية بنجاح
            عملية الدفع تحتوي على تفاصيل الجلسة ورابط للدخول على الموقع وتسجيل
            الدخول بالايميل او رقم الهاتف وكلمة السر الخاصة بك ثم الدخول على
            "جلساتي" لبدء الجلسة
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl">
            هناك ثلاث اختيارات في الصفحة الخاصة بجلساتي
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl">
            انضم للجلسة: يتم فتح رابط الجلسة قبل الميعاد بعشر دقائق
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl">
            الغاء الجلسة: يرجى الاطلاع على سياسة الغاء الجلسات
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl">
            ارسال ايميل للخبير: يتم استخدامه في حالة ارسال مستندات للخبير بعد
            الجلسة.
          </h1>
        </v-col>
        <v-col cols="12">
          <h1 style="direction: rtl" class="mt-8">
            يتم ارسال رسالة تذكيرية على الهاتف قبل الجلسة بساعة لتذكير العميل
            بميعاد الجلسة
          </h1>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
