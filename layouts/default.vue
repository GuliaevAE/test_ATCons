<template>
  <main class="h-screen flex flex-column bg-primary">
    <nav class="w-full ">
      <TabMenu :model="items" />
    </nav>
    <div class="flex-1 w-full h-auto flex justify-content-center align-items-center">
      <Nuxt class="max-w-full max-h-full " />
    </div>
  </main>
</template>

<script setup lang="ts">
import TabMenu from "primevue/tabmenu";
import { ref } from "vue";
const items = ref([
  {
    label: "The first three tasks",
    icon: "pi pi-fw pi-calendar",
    to: "/"
  },
  {
    label: "Fourth task",
    icon: "pi pi-fw pi-calendar",
    to: "/fourth_task"
  },
  {
    label: "Fifth task",
    icon: "pi pi-fw pi-calendar",
    to: "/fifth_task"
  }
]);
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>