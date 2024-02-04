<template>
  <div class="numbers">
    <secondaryNav />
    <h1 class="text-center mt-20 text-7xl font-bold">الأرقام</h1>
    <div class="icons mt-36 flex gap-64 md:gap-0 justify-around mx-auto">
      <div
        class="flex flex-col items-center justify-center mt-3"
        style="height: 100px"
      >
        <img
          class="mb-4"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/Countries.svg"
          style="width: 200px; height: 200px"
          alt=""
        />
        <h1 class="font-bold text-3xl">+٢٥</h1>
        <h1 class="font-bold text-lg">شبكة محمول مسجلة</h1>
      </div>

      <div
        class="flex flex-col items-center justify-center"
        style="height: 100px"
      >
        <img
          class="mb-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/experts-home.svg"
          alt=""
          style="width: 200px; height: 200px"
        />
        <h1 class="font-bold text-3xl">+٨٥٠.٠٠٠</h1>
        <h1 class="font-bold text-lg">مستخدم للموقع</h1>
      </div>

      <div
        class="flex flex-col items-center justify-center"
        style="height: 100px"
      >
        <img
          class="mb-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/Satisfied.svg"
          style="width: 200px; height: 200px"
          alt=""
        />
        <h1 class="font-bold text-3xl">۸۰۰۰</h1>
        <h1 class="font-bold text-lg">جلسة فيديو تم اجرائها</h1>
      </div>

      <div
        class="flex flex-col items-center justify-center"
        style="height: 100px"
      >
        <img
          class="mb-10"
          src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/Questions.svg"
          style="width: 200px; height: 200px"
          alt=""
        />
        <h1 class="font-bold text-3xl">+١،٠٠٠،٠٠٠</h1>
        <h1 class="font-bold text-lg">أسئلة أجاب عليها خبراء</h1>
      </div>
    </div>
  </div>
</template>

<style>
@media (max-width: 767px) {
  .icons {
    flex-wrap: wrap;
  }
}
</style>
