<template>
  <v-container
    ><v-row
      ><v-col
        cols="12"
        class="flex flex-col items-center justify-center md:flex-row gap-10"
        ><div
          class="w-100 card-1 w-1/3 shadow-xl py-8 rounded-xl flex-col justify-center items-center"
        >
          <img
            class="img-1 h-56 rounded-t-xl w-100"
            src="https://cdn.statically.io/gh/AhmedMSoliman160/blog_20230320v01/main/ArticlesImages/%D9%84%D8%A7%D9%8A%D9%81%20%D9%83%D9%88%D8%AA%D8%B4%20%D8%A7%D9%88%D9%86%20%D9%84%D8%A7%D9%8A%D9%86%20(1)_638413466692436778.jpg"
            alt=""
          />
          <div class="content-1 bg-white z-30">
            <h1
              class="font-bold bg-red-darken-2 py-2 px-4 rounded"
              style="width: fit-content; transform: translateY(-80%)"
            >
              استشارات تغذية
            </h1>
            <h1 class="font-bold text-xl text-center">لايف كوتش أونلاين</h1>
            <div
              class="text-1 text-center flex-col justify-center items-center"
              style="direction: rtl"
            >
              <p class="mb-4">
                أسعار جلسات لايف كوتش اون لاين يتسم اللايف كوتشينغ بالتركيز على
                الحاضر والمستقبل، دون الغفلة...
              </p>
              <nuxt-link
                to=""
                class="text-blue-lighten-1 cursor-pointer"
                style="text-decoration: underline"
                >اقرأ المزيد...</nuxt-link
              >
            </div>
            <div class="time-1 flex gap-1 justify-center mt-4">
              <h1>20/1/2024</h1>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>
        </div>
        <div
          class="w-100 card-1 w-1/3 shadow-xl py-8 rounded-xl flex-col justify-center items-center"
        >
          <img
            class="img-1 h-56 rounded-t-xl w-100"
            src="https://cmd.wichita.edu/wp-content/uploads/2015/03/business_coaching.jpg"
            alt=""
          />
          <div class="content-1 bg-white z-30">
            <h1
              class="font-bold bg-red-darken-2 py-2 px-4 rounded"
              style="width: fit-content; transform: translateY(-80%)"
            >
              استشارات تغذية
            </h1>
            <h1 class="font-bold text-xl text-center">لايف كوتش في مصر</h1>
            <div
              class="text-1 text-center flex-col justify-center items-center"
              style="direction: rtl"
            >
              <p class="mb-4">
                لايف كوتش في مصر أسهل طريقة للحصول على لايف كوتشينج مجاني اللايف
                كوتشينج هو مجال ...
              </p>

              <nuxt-link
                to=""
                class="text-blue-lighten-1 cursor-pointer"
                style="text-decoration: underline"
                >اقرأ المزيد...</nuxt-link
              >
            </div>
            <div class="time-1 flex gap-1 justify-center mt-4">
              <h1>20/1/2024</h1>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>
        </div>
        <div
          class="w-100 card-1 w-1/3 shadow-xl py-8 rounded-xl flex-col justify-center items-center"
        >
          <img
            class="img-1 h-56 rounded-t-xl w-100"
            src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,w_624,h_351,c_scale,q_70/v1453716111/1453716110.jpg"
            alt=""
          />
          <div class="content-1 bg-white z-30">
            <h1
              class="font-bold bg-red-darken-2 py-2 px-4 rounded"
              style="width: fit-content; transform: translateY(-80%)"
            >
              استشارات تغذية
            </h1>
            <h1 class="font-bold text-xl text-center">
              أسعار جلسات لايف كوتشينج في السعودية
            </h1>
            <div
              class="text-1 text-center flex-col justify-center items-center"
              style="direction: rtl"
            >
              <p class="mb-4">
                أسعار جلسات لايف كوتشينج في السعودية أصبح اللايف كوتشينج من
                المجالات التي تحظى باهتمام ...
              </p>
              <nuxt-link
                to=""
                class="text-blue-lighten-1 cursor-pointer"
                style="text-decoration: underline"
                >اقرأ المزيد...</nuxt-link
              >
            </div>
            <div class="time-1 flex gap-1 justify-center mt-4">
              <h1>20/1/2024</h1>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div></div></v-col></v-row
  ></v-container>
</template>

<style>
.time-1 {
  transform: translateY(-90%);
  transition: transform 1s;
}
.text-1 {
  opacity: 0;
  transition: opacity 1s;
}
.content-1 {
  transition: transform 1s;
}
.img-1 {
  opacity: 1;
  transition: opacity 1s;
}
.card-1:hover .text-1 {
  display: block;
  opacity: 1;
}
.card-1:hover .time-1 {
  transform: translateY(0%);
}
.card-1:hover .content-1 {
  transform: translateY(-60%);
}
.card-1:hover .img-1 {
  opacity: 0.5;
}
</style>
