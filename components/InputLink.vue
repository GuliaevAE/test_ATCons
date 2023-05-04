<template>
  <article class="w-full">
    <form @submit.prevent="fetchLinkTitle">
      <span class="p-input-icon-right w-full relative">
        <i @click="clearLink" class="pi pi-search z-2" />
        <InputText @focusout="fetchLinkTitle" v-model="inputValue" placeholder="Search" class="w-full" />
        <div
          v-if="textLink"
          class="absolute bg-primary top-0 left-0 h-full w-full flex justify-content-start align-items-center pl-2 text-overflow-ellipsis"
        >
          <a :href="inputValue" class="text-white">{{textLink}}</a>
        </div>
      </span>
    </form>
  </article>
</template>

<script setup lang="ts">
import axios from "axios";
import InputText from "primevue/inputtext";
import { ref } from "vue";
import HttpsProxyAgent from 'https-proxy-agent'

const inputValue = ref<string>("");
const textLink = ref<string>("");


const axiosConfig = {

  proxy: false,
} 

const fetchLinkTitle = () => {
  axios.get(inputValue.value, axiosConfig).then(res => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(res.data, "text/html");
    let title = doc.getElementsByTagName("title")[0].text;
    textLink.value = title;
  });
};
const clearLink = () => (textLink.value = "");
</script>
