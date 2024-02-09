<template>
  <v-container
    ><v-row
      ><v-col class="w-100 flex flex-col justify-center items-center">
        <h1 class="mt-10 text-3xl font-bold flex justify-end">: خبرائنا في</h1>
        <v-select
          class="w-100 mt-6"
          :items="items"
          item-title="name"
          item-value="id"
          v-model="selectedMedicalItem"
          label="اختر مجالاً" 
        >
          <template #item="{ item, props }">
            <v-list-item v-bind="props">
              <template #title>
                <div class="flex items-end justify-center gap-2">
                  <h1>{{ item.raw.name }}</h1>
                  <img :src="item.raw.image" />
                </div>
              </template>
            </v-list-item>
          </template>
        </v-select> </v-col></v-row
  ></v-container>
</template>

<script setup>
const selectedMedicalItem = ref(null);
const items = [
  {
    id: 0,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/diet-nutrition.svg",
    name: "التغذية واللياقة",
  },
  {
    id: 1,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/psychological-therapy.svg",
    name: "الصجة النفسية والإستشارات الزوجية",
  },
  {
    id: 1,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/medical-consultation.svg",
    name: "استشارات طبية",
  },
];
</script>
