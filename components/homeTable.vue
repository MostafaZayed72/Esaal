<template>
  <div>
    <div class="table w-3/5 bg-slate-300 mx-auto mt-4 shadow-xl rounded-md">
      <h1
        class="h-10 text-white text-md md:text-2xl flex items-center justify-center mb-10"
        style="background-color: rgb(0, 51, 51); direction: rtl"
      >
        اختر المجال ثم وسيلة التواصل
      </h1>
      <div
        class="icons flex flex-col gap-10 items-center justify-around lg:flex-row"
      >
        <div
          class="bg-gray-400 icon-table text-center rounded-md cursor-pointer transition duration-300 hover:bg-emerald-900 hover:text-white"
          style="width: 150px; height: 150px; transform: translateY(-25px)"
        >
          <i class="fa-solid fa-apple-whole text-5xl mt-12"></i>
          <h1 class="font-bold text-lg mt-2">استشارات تغذية</h1>
        </div>
        <div
          class="bg-gray-400 icon-table text-center rounded-md cursor-pointer hover:bg-emerald-900 hover:text-white"
          style="width: 150px; height: 150px; transform: translateY(-25px)"
        >
          <i class="fa-solid fa-user-doctor text-5xl mt-12"></i>
          <h1 class="font-bold text-lg mt-2">استشارات نفسية</h1>
        </div>
        <div
          @click="show_medical"
          class="bg-gray-400 icon-table text-center rounded-md cursor-pointer hover:bg-emerald-900 hover:text-white"
          style="width: 150px; height: 150px; transform: translateY(-25px)"
        >
          <i class="fa-solid fa-stethoscope text-5xl mt-12"></i>
          <h1 class="font-bold text-lg mt-2">استشارات طبية</h1>
        </div>
      </div>

      <div
        class="medical_menu bg-slate-300 mx-auto mt-4 shadow-xl rounded-md"
        v-show="medical_menu"
      >
        <div
          class="line text-center mx-auto"
          style="border-bottom: 1px solid rgb(177, 170, 170); width: 80%"
        ></div>
        <div class="select flex flex-col items-end justify-center gap-2">
          <h1 class="text-end mr-20 mt-2">اختر التخصص و وسيلة التواصل</h1>
          <v-select
            class="w-80 mr-20 flex"
            :items="mylist"
            item-title="name"
            item-value="id"
            v-model="selectedItem"
          >
            <template #item="{ item, props }">
              <v-list-item v-bind="props">
                <template #title>
                  <div class="flex items-center justify-end gap-2">
                    <h1>{{ item.raw.name }}</h1>
                    <img :src="item.raw.image" />
                  </div>
                </template>
              </v-list-item>
            </template>
          </v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const medical_menu = ref(false);
const show_medical = () => {
  medical_menu.value = !medical_menu.value;
};
const selectedItem = ref("التخصصات الطبية");
const mylist = [
  {
    id: 0,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/pediatrics.svg",
    name: "طب أطفال",
  },
  {
    id: 1,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(93).svg",
    name: "أنف وأذن وحنجرة",
  },
  {
    id:2 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Interal.svg",
    name: "باطنة",
  },
  {
    id:3 ,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Genecology.svg ",
    name: "نساء وتوليد",
  },
  {
    id:4 ,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/physic.svg ",
    name: "علاج طبيعي",
  },
  {
    id:5 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Family(1).svg",
    name: "طب الأسرة",
  },
  {
    id:6 ,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Orology.svg ",
    name: "مسالك بولية",
  },{
    id:7,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Ophtamology.svg ",
    name: "عيون",
  },
  {
    id:8 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Hepatology.svg",
    name: "الكبد والجهازالهضمي",
  },{
    id: 9,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/kidney-organ.svg",
    name: "كلى",
  },
  {
    id: 10,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/PlasticSurgery.svg",
    name: "جراحة تجميل",
  },{
    id: 11,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/ObesityandLaparoscopicSurgery.svg",
    name: "جراحة سمنة",
  },
  {
    id:12 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(90).svg",
    name: "جلدية وتناسلية",
  },{
    id: 13,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Surgery.svg ",
    name: "جراحة",
  },
  {
    id: 14,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Orthopedics-1.svg",
    name: "عظام",
  },{
    id: 15,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/General.svg",
    name: "ممارس عام",
  },
  {
    id: 16,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Old.svg ",
    name: "طب الشيخوخة",
  },{
    id:17 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(89).svg",
    name: "قلب",
  },
  {
    id:18 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/svgexport-6(92).svg",
    name: "أسنان",
  },{
    id:19 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Neurology-1.svg",
    name: "مخ وأعصاب",
  },
  {
    id:20 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Oncology(Tumor).svg",
    name: "أورام",
  },{
    id:21 ,
    image:
      "https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/lab.svg ",
    name: "تحاليل وأشعة",
  },
  {
    id:22 ,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/ChestandRespiratory.svg",
    name: "صدر وجهاز تنفسي",
  },
  {
    id:23 ,
    image:
      " ",
    name: " ",
  },
  {
    id: 24,
    image:
      " https://cdn.statically.io/gh/AhmedMSoliman160/20230301v01/main/assets/images/icons/Hematology1.svg",
    name: "أمراض الدم",
  },
];
</script>
