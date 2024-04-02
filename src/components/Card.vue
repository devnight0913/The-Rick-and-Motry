<script setup>
import { computed, toRaw } from "vue";
import { useStore } from "vuex";

const store = useStore();
const characters = computed(() => store.state.characters);
</script>
<template>
  <div class="flex flex-col">
    <div v-if="characters">
      <div class="grid gird-cols-3 2xl:grid-cols-3 lg:grid-cols-2 gap-5">
        <div v-for="(character, index) in characters" :key="index">
          <div class="flex flex-row bg-slate-800 rounded-[0.5rem] h-[15rem]">
            <img :src="character.image" alt="ASd" class="rounded-[0.5rem] w-[15rem] h-[15rem]" />
            <div class="flex flex-col justify-center space-y-[0.8rem] p-[1rem]">
              <div class="flex flex-col">
                <p class="font-Akrobat text-white text-[20px] font-bold">
                  {{ character.name }}
                </p>
                <p class="font-Akrobat text-white text-[16px]">
                  {{ character.status }} - {{ character.species }}
                </p>
              </div>
              <div class="flex flex-col">
                <p class="font-Akrobat text-[#D3E7FF80] text-[15px]">
                  Last known location:
                </p>
                <p class="font-Akrobat text-white text-[18px]">
                  {{ { ...character.location }.name }}
                </p>
              </div>
              <div class="flex flex-col">
                <p class="font-Akrobat text-[#D3E7FF80] text-[15px]">
                  First seen in:
                </p>
                <p class="font-Akrobat text-white text-[18px]">
                  {{ { ...character.origin }.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
