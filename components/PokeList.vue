<script setup lang="ts">
import {useStore} from "@/stores/index";
const store = useStore();
console.log(store.$state);
interface IPokemonList {
  results: [{name: string; ulr: string}];
}
const PAGE = 0;
const POSTED = 100;
const PAGE_INCREASE = 10;
const {data} = await useAsyncData("fetch", async () => {
  const response: IPokemonList = await $fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${POSTED}&offset=${
      PAGE * PAGE_INCREASE
    }`
  );
  const result = response.results;
  return result;
});
</script>

<template>
  <div class="grid grid-cols-4">
    <div
      class="flex justify-center"
      v-for="(pokemon, index) in data"
      :key="pokemon.name"
    >
      <NuxtLink :to="`/${pokemon.name}`">
        <h2>NO.{{ index + 1 }} {{ pokemon.name }}</h2>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
