<script setup>
import SearchIcon from "../assets/icons/SearchIcon.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const filterName = computed(() => store.state.filterName);

const inputSearch = (e) => {
  store.commit("setFilterName", e.target.value);
}
</script>
<template>
  <div class="search-bar w-[280px] h-[55px] rounded-[4px] 4xl:w-[720px] 4xl:h-[92px] flex items-center rounded-lg">
    <div class="mt-[1.2rem] 4xl:mt-[2.4rem]">
      <SearchIcon :width="50" :height="50" :fillColor="'#505469'" />
    </div>
    <input
      type="text"
      class="border-0 bg-transparent w-[80%] outline-none font-Akrobat text-[22px] 4xl:text-[44px] text-gray-900 dark:text-white placeholder-[#505469]"
      placeholder="Name"
      :value="filterName"
      @input = "inputSearch($event)"
    />
  </div>
</template>
<style scoped>
.search-bar {
  border: 1px solid;
  border-image-source: linear-gradient(
    180deg,
    rgba(86, 95, 138, 0.4) 0%,
    rgba(50, 57, 91, 0.4) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(172, 185, 255, 0.04) 0%,
    rgba(172, 185, 255, 0.1) 100%
  );
}
</style>
