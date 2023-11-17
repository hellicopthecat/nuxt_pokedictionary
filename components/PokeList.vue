<script setup lang="ts">
import type {IPokemon, ISpeicesResponse} from "@/types";
import {colorMaker} from "@/server/utils";
const korean = false;
let PAGE = 560;
let POSTED = 600;
const PAGE_INCREASE = 10;
const KO = "ko";
const allPokemon: any = [];
const {isLoading, isError, data, error} = useQuery({
  queryKey: ["poke"],
  queryFn: async () => {
    for (PAGE; PAGE < POSTED; PAGE++) {
      const pokemon: IPokemon = await $fetch(
        `https://pokeapi.co/api/v2/pokemon/${PAGE}`
      );
      const speices: ISpeicesResponse = await $fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${PAGE}`
      );
      const koreanName = speices.names.filter(
        (name) => name.language.name === KO
      );
      const monsterColor = speices.color.name;

      // const koreanFlavor = speices.flavor_text_entries.filter(
      //   (flaver) => flaver.language.name === KO
      // );

      allPokemon.push({...pokemon, koreanName, monsterColor});
    }
    return allPokemon;
  },
});
console.log(data);
</script>

<template>
  <div class="p-10">
    <ul class="grid grid-cols-4 gap-3">
      <li
        v-for="pokemon in data"
        :key="pokemon.id"
        class="flex flex-col items-center w-full h-[450px] rounded-xl shadow-md p-5"
        :style="{
          backgroundColor: colorMaker(pokemon.monsterColor),
        }"
      >
        <div
          class="relative flex justify-around items-center w-full h-full bg-zinc-50/20 rounded-md border-4 border-slate-900/10"
        >
          <div
            :class="`absolute flex justify-center items-center bg-blue-100/40 rounded-full border border-slate-900/30 shadow-xl p-5 z-10  ${
              pokemon.sprites.front_female !== null
                ? 'hover:opacity-0 hover:shadow-none hover:transition-opacity'
                : null
            }`"
          >
            <img
              class="w-44 h-44"
              :src="pokemon.sprites.front_default"
              :alt="pokemon.id"
            />
          </div>
          <div
            v-if="pokemon.sprites.front_female !== null"
            class="absolute flex justify-center items-center bg-pink-100/40 rounded-full border border-slate-900/30 shadow-xl p-5 opacity-0 hover:opacity-100 hover:transition-opacity z-10"
          >
            <img class="w-44 h-44" :src="pokemon.sprites.front_female" />
          </div>
        </div>

        <div class="flex justify-around items-center w-full h-[180px]">
          <h2 class="text-3xl font-bold text-slate-700">
            NO. {{ pokemon.id }}
          </h2>
          <h2 class="text-3xl font-bold text-slate-700" v-if="!korean">
            {{ pokemon.name }}
          </h2>
          <h2 class="text-3xl font-bold text-slate-700" v-if="!korean">
            {{ pokemon.koreanName[0].name }}
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
