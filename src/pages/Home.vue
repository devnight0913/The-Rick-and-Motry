<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from "vuex";
import Card from '../components/Card.vue';
import SearchBar from '../components/SearchBar.vue';
import SelectBar from '../components/SelectBar.vue';
import PageNation from '../components/PageNation.vue';
import axios from 'axios';

const store = useStore();

async function getData(){
  const data = await axios.get("https://rickandmortyapi.com/api/character");
  store.commit("setState", data.data);
}
onBeforeMount(() => getData());
</script>

<template>
  <div class="flex flex-col pt-[4rem]">
    <div class="font-Akrobat text-[5rem] font-bold text-center">The Rick and Morty</div>
    <div class="bg-slate-950 p-[1.5rem] mt-[2rem] flex flex-col space-y-[1.5rem]">
      <div class="flex flex-row space-x-[1rem]">
        <SearchBar />
        <SelectBar />
      </div>
      <Card />
      <PageNation />
    </div>
  </div>
</template>

<style scoped>
</style>