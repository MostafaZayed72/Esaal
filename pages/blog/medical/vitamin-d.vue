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
          ما العلاقة بين أعراض نقص فيتامين د والإكتئاب؟
        </h1>
      </v-col><v-col cols="12">
        <img
          class="text-center rounded-xl mx-auto"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/ArticlesImages/vitamin-d-1.jpg"
          alt=""
        >
      </v-col><v-col cols="12">
        <div class="time-1 flex gap-1 justify-center mt-4">
          <h1>20/1/2024</h1>
          <i class="fa-regular fa-calendar-days" />
        </div>
      </v-col><v-col cols="12" class="mt-20" style="direction: rtl">
        <h1 class="text-center text-3xl w-100">
          أعراض نقص فيتامين
        </h1>
        <h1 class="w-100 text-center mt-6">
          الصداع المستمر
        </h1>

        <h1 class="w-100 text-center mt-6">
          كثرة النوم
        </h1>
        <h1 class="w-100 text-center mt-6">
          الشعور الدائم بالإرهاق
        </h1>
        <h1 class="w-100 text-center mt-6">
          آلام أسفل الظهر
        </h1>
        <h1 class="w-100 text-center mt-6">
          فقدان التركيز
        </h1>
        <h1 class="w-100 text-center mt-6">
          ضعف العضلات والمفاصل
        </h1>
        <h1 class="w-100 text-center mt-6">
          فقدان الرغبة في العيش
        </h1>
        <h1 class="w-100 text-center mt-6">
          فقدان الشهية
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
      </v-col><MedicalContent /><v-col />
    </v-row>
  </v-container>
</template>
