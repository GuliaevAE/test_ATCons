<template>
  <section
    class="m-3 p-3 relative border-round bg-white flex flex-column justify-content-center align-items-center gap-3"
  >
    <InputLink />
    <DateTimePicker />
    <MultiSelector />
  </section>
</template>

<script setup lang="ts">
import Vue from "vue";
import TabMenu from "primevue/tabmenu";
import { ref } from "vue";
</script>


