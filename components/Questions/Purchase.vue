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
          الدفع
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
          كيفية دفع الجلسة؟
        </h1>
      </v-col>
      <div v-show="dialog" class="dialog-1 w-100">
        <v-col cols="12">
          <h1 style="direction: rtl">
            وسائل الدفع المتاحة هي ( فوري/ فودافون كاش/ بطاقات الائتمان)
          </h1>
        </v-col>
        <v-col cols="12">
          <h1 style="direction: rtl" class="font-bold">
            - الدفع عن طريق فوري
          </h1>
        </v-col>
        <v-col cols="12">
          <h1 style="direction: rtl">
            بعد اختيارك للخبيرالمناسب و تسجيل الدخول، سيتم تحويلك مباشرة الى
            صفحة الدفع، اضغط على فوري لكتابة الايميل و رقم الهاتف و سيصلك رسالة
            على رقم الهاتف الذى تم التسجيل به يحتوي على كود خاص بك و رقم خدمة
            اسأل, اتجه لأقرب مكان يوجد به ماكينة فوري لدفع المبلغ المستحق. يرجى
            دفع المبلغ المستحق قبل انتهاء مدة الطلب
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl" class="font-bold">
            - الدفع عن طريق فودافون كاش
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl">
            الدفع عن طريق فودافون كاش يتطلب ان يكون لديك محفظة تحتوى على المبلغ
            المناسب للجلسة التى تم اختيارها , بعد التأكد من رصيد المحفظة يرجى
            الضغط على فودافون كاش لكتابة رقم الهاتف الخاص بك. يتم ارسالة رسالة
            بها الكود الخاص بك , ثم الرجوع الى صفحة الدفع مرة اخرى لادخال رمز
            الكود و رقم المحفظة الخاصة بك، ثم الضغط على متابعة عملية الدفع ليصلك
            رسالة نصية و ايميل تأكيدي بنجاح عملية الدفع و التفاصيل الخاصة
            الجلسة.
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl" class="font-bold">
            - الدفع عن طريق بطاقة الإتمان
          </h1>
        </v-col><v-col cols="12">
          <h1 style="direction: rtl">
            الدفع عن طريق بطاقة الائتمان يتطلب التأكد من صلاحية الكارت وتوفر
            مبلغ كافي لتغطية ثمن الجلسة المطلوب دفعها، بعد اختيارك للجلسة وتسجيل
            الدخول سيتم تحويلك لصفحة الدفع. اضغط على (بطاقة الائتمان) لإدخال
            تفاصيل الكارت ثم يتم ارسال رسالة على رقم الهاتف الخاص بك بها رقم
            OTP. قم بإدخال الرقم في صفحة الدفع وستصلك رسالة وايميل تأكيدي بنجاح
            عملية الدفع وتفاصيل الجلسة
          </h1>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
