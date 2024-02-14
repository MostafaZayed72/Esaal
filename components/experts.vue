<template>
  <v-container>
    <v-row>
      <v-col class="w-100 flex flex-col justify-center items-center">
        <h1 class="mt-10 text-3xl font-bold mb-6">
          : خبرائنا في
        </h1>
        <div
          class="parent flex flex-col md:flex-row-reverse justify-center items-center gap-2"
        >
          <nuxt-link
            to="/nutrition"
            class="flex items-start justify-center gap-2 bg-yellow-300 py-2 px-2 rounded-md cursor-pointer hover:bg-yellow-400"
          >
            <h1>التغذية واللياقة</h1>
            <img
              src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/diet-nutrition.svg"
              alt=""
            >
          </nuxt-link><nuxt-link
            to="/psych"
            class="flex items-start justify-center gap-2 bg-red-500 py-2 px-2 rounded-md cursor-pointer hover:bg-red-600"
          >
            <h1>الصحة النفسية والإستشارات الزوجية</h1>
            <img
              src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/psychological-therapy.svg"
              alt=""
            >
          </nuxt-link><nuxt-link
            to="/medical"
            class="flex items-start justify-center gap-2 bg-blue-500 py-2 px-2 rounded-md cursor-pointer hover:bg-blue-600"
          >
            <h1>استشارات طبية</h1>
            <img
              src="https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/medical-consultation.svg"
              alt=""
            >
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
