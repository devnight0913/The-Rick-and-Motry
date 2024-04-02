<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const status = ref("Choose Status");
const filterName = computed(() => store.state.filterName);

async function filtering(){
  let filterURL = "";
  if(!filterName.value && status.value === "Choose Status") filterURL = "https://rickandmortyapi.com/api/character";
  else if(status.value === "Choose Status") filterURL = "https://rickandmortyapi.com/api/character/?" + "name=" + filterName.value;
  else filterURL = "https://rickandmortyapi.com/api/character/?" + "name=" + filterName.value + "&status=" + status.value;
  const data = await axios.get(filterURL);
  store.commit("setState", data.data);
  store.commit("setCurrentPageInit");
}
</script>
<template>
  <div class="flex flex-row space-x-[1rem] items-center">
    <select v-model="status" id="status" class="w-auto bg-gray-50 border border-gray-300 text-gray-900 text-[20px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Choose Status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    <!-- <label for="status" class="block text-center mb-2 text-[20px] w-auto font-medium text-gray-900 dark:text-white">Select status</label> -->
    <button @click="filtering()" type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Apply</button>
  </div>
</template>
<style scoped></style>