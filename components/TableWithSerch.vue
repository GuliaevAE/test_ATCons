<template>
  <article class="w-full">
    <DataTable
      :value="filteredProducts"
      paginator
      paginatorTemplate=" FirstPageLink PrevPageLink PageLinks   NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      selectionMode="multiple"
    
      
      class="max-h-screen"
    >
      <template #header>
        <div class="flex align-items-center justify-content-between gap-2">
          <div class="p-inputgroup w-full">
            <div class="card flex justify-content-center relative">
              <Button @click="toggleOverlayPanel" icon="pi pi-sliders-v" severity="success" class="bg-green-500 relative" />
              <OverlayPanel ref="refOverlayPanel" class="absolute top-100 left-0">
                <MultiSelect
                  v-model="serchingColumns"
                  :options="allColumns"
                  optionValue="name"
                  optionLabel="name"
                  placeholder="Поля таблицы"
                  class="w-full"
                />
              </OverlayPanel>
            </div>
            <form @submit.prevent="serchFormSubmit" class="w-full flex">
              <span class="p-input-icon-right w-full">
                <i v-if="searchQuery" @click="clearSearchQuery" class="pi pi-times" />
                <InputText placeholder="Vote" class="w-full" />
              </span>
              <Button type="submit" class="px-3">Serch</Button>
            </form>
          </div>
          <MultiSelect
            v-model="visibleColumns"
            :options="allColumns"
            optionValue="name"
            optionLabel="name"
            placeholder="Поля таблицы"
            class="w-3"
          />
        </div>
      </template>
      <Column  v-if="visibleColumns.includes('Code')" sortable field="code" header="Code"></Column>
      <Column  v-if="visibleColumns.includes('Name')" sortable field="name" header="Name"></Column>
      <Column  v-if="visibleColumns.includes('Image')" sortable header="Image">
        <template #body="slotProps">
          <img
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="w-6rem shadow-2 border-round"
          />
        </template>
      </Column>
      <Column v-if="visibleColumns.includes('Price')" sortable field="price" header="Price">
        <template #body="slotProps">{{ slotProps.data.price }}</template>
      </Column>
      <Column
        v-if="visibleColumns.includes('Category')"
        sortable
        field="category"
        header="Category"
      ></Column>
      <Column v-if="visibleColumns.includes('Reviews')" sortable field="rating" header="Rating">
        <template #body="slotProps">
          <Rating v-model="slotProps.data.rating" readonly :cancel="false" />
        </template>
      </Column>
      <Column v-if="visibleColumns.includes('Status')" field="status" sortable header="Status">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.inventoryStatus"
            :severity="getSeverity(slotProps.data.inventoryStatus)"
          />
        </template>
      </Column>
    </DataTable>
  </article>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import Rating from "primevue/rating";
import MultiSelect from "primevue/multiselect";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import OverlayPanel from "primevue/overlaypanel";
import { ref, onMounted, computed } from "vue";

interface Iproduct_item {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

interface Icolumns_item {
  name: string;
  id: number;
}

const allColumns: Icolumns_item[] = [
  { name: "Code", id: 1 },
  { name: "Name", id: 2 },
  { name: "Image", id: 3 },
  { name: "Price", id: 4 },
  { name: "Category", id: 5 },
  { name: "Reviews", id: 6 },
  { name: "Status", id: 7 }
];

const visibleColumns = ref<string[]>([
  "Code",
  "Name",
  "Image",
  "Price",
  "Category",
  "Reviews",
  "Status"
]);

const products = ref<Iproduct_item[]>([]);
const getSeverity = (inventoryStatus: string) => {
  switch (inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";
  }
};

////OverlayPanel
const refOverlayPanel = ref();
const toggleOverlayPanel = (event: Event) => {
  refOverlayPanel.value.toggle(event);
};

////Serch
const searchQuery = ref("");
const clearSearchQuery = () => (searchQuery.value = "");
const serchingColumns = ref<string[]>(["Name"]);
const filteredProducts = computed(() => {
  const iterateOverSelectedColumns = (object: Iproduct_item) => {
    for (let col of serchingColumns.value) {
      let cell: string;
      if (col === "Status") {
        cell = "inventoryStatus";
      } else if (col === "Reviews") {
        cell = "rating";
      } else {
        cell = col.toString().toLocaleLowerCase();
      }

      if (
        object[cell as keyof typeof object]
          .toString()
          .toLocaleLowerCase()
          .indexOf(searchQuery.value.toLocaleLowerCase()) !== -1
      )
        return true;
    }
    return false;
  };

  return searchQuery.value
    ? products.value.filter(object => iterateOverSelectedColumns(object))
    : products.value;
});
const serchFormSubmit = e => {
  searchQuery.value = e.target[0].value;
};

onMounted(() => {
  products.value.push({
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5
  });
  products.value.push({
    id: "1001",
    code: "f230fh0g3",
    name: "Black Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 72,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "LOWSTOCK",
    rating: 4
  });
});
</script>

<style>
</style>