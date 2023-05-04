



<template>
  <article class="w-full flex">
    <span>
      <MultiSelect
        v-model="selectedCities"
        display="chip"
        :options="cities"
        optionLabel="name"
        placeholder="Select Cities"
        class="w-full md:w-20rem"
      >
        <template #option="slotProps">
          <div class="flex justify-content-between w-full">
            <div>{{ slotProps.option.name }}</div>
            <i
              v-if="slotProps.option.id===1 && selectedCities.length"
              @click.prevent="clearSelected"
              class="pi pi-delete-left"
              style="font-size: 2rem"
            ></i>
          </div>
        </template>
      </MultiSelect>
    </span>
  </article>
</template>



<script setup lang="ts">
import MultiSelect from "primevue/multiselect";
import { ref } from "vue";

interface Icity {
  name: string;
  id: number;
}

const cities = ref<Icity[]>([
  { name: "one", id: 1 },
  { name: "two", id: 2 },
  { name: "three", id: 3 }
]);

const selectedCities = ref<Icity[]>([]);


///////Поснение
// До конца не смог разобраться в primeVue, в частности, с отдельными темплейтами
// По какой-то непонятной причине они у меня работают не все
// Поэтому, был выбран немного костыльный, но рабочий вариант с setTimeout с нулевым временем
const clearSelected = () => setTimeout(() => (selectedCities.value = []));
</script>