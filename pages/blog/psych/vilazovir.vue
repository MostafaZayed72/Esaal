<template>
  <div class="nav sticky top-0 bg-white shadow-md z-30 pb-4">
    <QuestionsNav />
  </div>
  <div class="blog-content">
    <BlogContent />
  </div>
  <div
    class="line text-center mx-auto"
    style="border-bottom: 1px solid rgb(177, 170, 170); width: 100%"
  />
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="font-bold text-center text-2xl">
          فيلازوفير
        </h1>
      </v-col><v-col cols="12">
        <img
          class="text-center rounded-xl mx-auto"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/ArticlesImages/%D9%81%D9%8A%D9%84%D8%A7%D8%B2%D9%88%D9%81%D9%8A%D8%B1%20(1)_638398829367699435.jpg"
          alt=""
        >
      </v-col><v-col cols="12">
        <div class="time-1 flex gap-1 justify-center mt-4">
          <h1>20/1/2024</h1>
          <i class="fa-regular fa-calendar-days" />
        </div>
      </v-col><v-col cols="12" class="mt-20" style="direction: rtl">
        <h1 class="text-center text-3xl w-100">
          آثار جانبية لدواء فلازوفير
        </h1>
        <h1 class="w-100 text-center mt-6">
          الصداع
        </h1>

        <h1 class="w-100 text-center mt-6">
          الغثيان
        </h1>
        <h1 class="w-100 text-center mt-6">
          الإسهال
        </h1>
        <h1 class="w-100 text-center mt-6">
          العرق
        </h1>
        <h1 class="w-100 text-center mt-6">
          التأرق
        </h1>
        <h1 class="w-100 text-center mt-6">
          الدوار
        </h1>
        <h1 class="w-100 text-center mt-6">
          جفاف الفم
        </h1>
        <h1 class="w-100 text-center mt-6">
          زيادة الوزن
        </h1>
        <h1 class="text-center text-2xl w-100 mt-20">
          يُمكنك الآن استشارة خبرائنا المعتمدين، من خلال حجز الجلسة أونلاين
          بسرية تامة وبسعر مناسب،
        </h1>
        <h1
          style="text-decoration: underline"
          class="text-center text-2xl w-100 mt-20 cursor-pointer"
        >
          <nuxt-link to="">
            اضغط هنا
          </nuxt-link>
        </h1>
        <div
          class="line text-center mx-auto w-100 mt-20"
          style="border-bottom: 1px solid rgb(177, 170, 170); width: 100%"
        />
        <h1 class="w-100 text-center mt-10">
          مقالات مشابهة
        </h1>
      </v-col><PsychContent /><v-col />
    </v-row>
  </v-container>
</template>
