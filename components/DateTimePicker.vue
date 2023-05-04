



<template>
  <article class="w-full flex-column">
    <Label for="DateTimePicker" class="text-primary pb-1">DateTimePicker</Label>
    <Calendar id="DateTimePicker"  v-model="time" timeOnly showIcon class="w-full">
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


<style>

</style>