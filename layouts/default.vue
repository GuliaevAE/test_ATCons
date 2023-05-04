<template>
  <main class="h-screen relative gap-2 bg-primary">
    <nav class="w-full align-self-start pb-6">
      <TabMenu :model="items" />
    </nav>
    <Nuxt class="max-w-max mx-auto"/>
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