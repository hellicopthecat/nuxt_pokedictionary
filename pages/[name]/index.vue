<script setup lang="ts">
import {useStore} from "../..//stores/index";
const route = useRoute();
const pokemonData = ref(null);
const store = useStore();
const {isLoading, isError, error} = useQuery({
  queryKey: ["pokemon"],
  queryFn: async () => {
    const response = await $fetch(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    store.addUrl(response.sprites.front_default);
    return response;
  },
});

watch(
  () => route.params.name,
  async () => {
    // 데이터가 변경될 때마다 업데이트
    const response = await $fetch(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    pokemonData.value = response;
  },
  {immediate: true}
);
</script>
<template>
  <div v-if="isLoading"><h2>Loading Data...</h2></div>
  <div v-else-if="isError">
    <h2>Oops... Sorry..{{ error.message }}</h2>
  </div>
  <div>
    <h2>No.{{ pokemonData?.id }} {{ pokemonData?.name }}</h2>
    <div>
      <img :src="pokemonData?.sprites.front_default" :alt="pokemonData?.name" />
      <img
        v-if="pokemonData?.sprites.front_female !== null"
        :src="pokemonData?.sprites.front_female"
        :alt="pokemonData?.name"
      />
    </div>
  </div>
</template>

<style scoped></style>
