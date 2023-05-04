



<template>
  <article class="w-full flex">
    <Calendar v-model="time" timeOnly showIcon class="flex-auto">
      <template #footer>
        <hr />
        <div class="flex justify-content-around border-t-1">
          <span class="text-primary" @click="today">Сегодня</span>
          <span class="text-primary" @click="reset">Сбросить</span>
        </div>
      </template>
    </Calendar>
  </article>
</template>


<script setup lang="ts">
import Calendar from "primevue/calendar";
import { ref } from "vue";

const time = ref<string>("");
const reset = () => (time.value = "");
const today = () =>
  (time.value = `${new Date().getHours()}:${new Date().getMinutes()}`);
</script>