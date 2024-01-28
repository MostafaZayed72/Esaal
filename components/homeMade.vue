<template>
  <div style="height: 1000px">
    <v-container class="mt-5 mx-auto flex justify-between bg-white w-full h-screen">
      <v-row>
        <v-col class="lg:ml-16 mt-10">
          <v-slide :value="currentPage" @input="updateCurrentPage">
            <v-row v-if="currentPage === 1">
              <!-- محتوى الصفحة الأولى -->
              <v-col class="flex">
                <div class="text">
                  <h1 class="paragraphs font-bold text-3xl text-gray-700 mb-8">
                    <span>Homemade</span><br />Hand carved cofee
                  </h1>
                  <p class="text-gray-600 mb-14">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet a accusamus labore voluptatem. Architecto modi magni
                    officiis, est eum illo asperiores.
                  </p>
                </div>
                <img
                  class="img-deleted move-up-down rounded-sm"
                  src="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/418725688_352609570820513_3525625729379089709_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGznYxiMWBzuwR6NhMti-VphVAVdG9A4MmFUBV0b0DgySqOewj-7lauGA55l-n5oM5bStv_qsMiuZ0v9zttpJHk&_nc_ohc=648iek2yaRUAX9mIkqn&_nc_ht=scontent.fcai19-8.fna&oh=00_AfDTbNXmE7vs_ihGlxQcwjYECUvSFyE4vr3vSkBphL-Nxw&oe=65B991EB"
                  alt=""
                  style="height: 450px"
                />
              </v-col>
            </v-row>
            <button
              class="px-12 py-3"
              style="border: 2px solid"
              v-row
              v-if="currentPage === 1"
            >
              Discover Now
            </button>
            <v-row v-if="currentPage === 2">
              <!-- محتوى الصفحة الثانية -->
              <v-col class="flex">
                <div class="text">
                  <h1 class="paragraphs font-bold text-3xl text-gray-700 mb-8">
                    <span>Think Different &</span><br />Do it otherwise
                  </h1>
                  <p class="text-gray-600 mb-14">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet a accusamus labore voluptatem. Architecto modi magni
                    officiis, est eum illo asperiores.
                  </p>
                </div>
                <img
                  class="img-deleted move-up-down rounded-sm"
                  src="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/418730906_352608534153950_3709185716833530836_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGU3Ox5fVny3n3gQGg90mpuRNVPn6nhZcJE1U-fqeFlwqzsMNGu1T2xpbwmu3wB2E-j3917H-AuHB5lU9e1s4Bg&_nc_ohc=kU5BX2S5XzwAX-UJbVF&_nc_ht=scontent.fcai19-8.fna&oh=00_AfBZildFZTQu3HEIsITsjHIY6XLS4HcNko4soY0Ive_8AQ&oe=65B878EE"
                  alt=""
                  style="height: 450px"
                />
              </v-col>
            </v-row>
            <button
              class="px-12 py-3"
              style="border: 2px solid"
              v-row
              v-if="currentPage === 2"
            >
              Discover Now
            </button>
            <v-row v-if="currentPage === 3">
              <!-- محتوى الصفحة الثالثة -->
              <v-col class="flex">
                <div class="text">
                  <h1 class="paragraphs font-bold text-3xl text-gray-700 mb-8">
                    <span>High Beam</span><br />by Tom Chung
                  </h1>
                  <p class="text-gray-600 mb-14">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet a accusamus labore voluptatem. Architecto modi magni
                    officiis, est eum illo asperiores.
                  </p>
                </div>
                <img
                  class="img-deleted move-up-down rounded-sm"
                  src="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/418726335_352609020820568_6984772037418771609_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFrPGbtttIGgvyMPx1vga-bB7mV02xeSYUHuZXTbF5JhSTTT6s15zexGe3-fHqKJFQRMhn0iSXtjMmdP4E0uSEJ&_nc_ohc=nhmM2ArUk60AX8PXufR&_nc_ht=scontent.fcai19-8.fna&oh=00_AfCQRTxzPHHZ1YH9497KKwnjKWScT7_HwLoCqhstV8JZaQ&oe=65B853CF"
                  alt=""
                  style="height: 450px"
                />
              </v-col>
            </v-row>
            <button
              class="px-12 py-3"
              style="border: 2px solid"
              v-row
              v-if="currentPage === 3"
            >
              Discover Now
            </button>
            <v-pagination
              v-model="currentPage"
              :length="totalPages"
              color="primary"
              hide-delimiters
              rounded="circle"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </v-slide>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentPage = ref(1);
const totalPages = 3;

function updateCurrentPage(value) {
  currentPage.value = value;
}
</script>
<style>
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.move-up-down {
  animation: moveUpDown 3s infinite;
}
@media (max-width: 1300px) {
  .img-deleted {
    display: none;
  }
  .paragraphs {
    margin-left: 0px;
  }
}
</style>
