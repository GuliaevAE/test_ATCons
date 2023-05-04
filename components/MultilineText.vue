<template>
  <article class="w-full">
    <DataTable :value="DataTableValue"  class=" max-h-screen overflow-y-auto">
      <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header">
        <template #body="slotProps">
          <div v-if="slotProps.data[col.field]">
            <div v-for="(line, k) in slotProps.data[col.field].split('\n')" :key="k">{{line}}</div>
          </div>
        </template>
      </Column>
    </DataTable>
  </article>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
import { ref, onMounted } from "vue";
import { apiResult } from "../dataForHelp";

const DataTableValue = ref<any>([]);
const columns = [
  { field: "code", header: "Code" },
  { field: "name", header: "Name" },
  { field: "category", header: "Category" }
];

const response = () => apiResult.replaceAll("[", "\n[");
console.log(DataTableValue.value);
DataTableValue.value.push({ name: response() });
</script>
