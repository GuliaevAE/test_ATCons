<template>
  <article class="w-full">
    <form @submit.prevent="fetchLinkTitle">
      <span class="p-input-icon-right w-full relative">
        <i
          @click="clearLink"
          class="pi pi-pencil z-2"
          :class="{'text-primary': !textLink , 'text-white': textLink}"
        />
        <InputText
          @focusout="fetchLinkTitle"
          v-model="inputValue"
          placeholder="https://"
          class="w-full"
        />
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

const inputValue = ref<string>("");
const textLink = ref<string>("");


const clearLink = () => (textLink.value = "");


//////////Пояснение
// Проксирование сделано через nuxt.config.js,
// поэтому количество рабочих ссылок, в данном случае, ограничено.
// Варианты использования: 
// '/api1/' - https://docs.gitlab.com/ee/topics/gitlab_flow.html
// '/api2/' - https://jsonplaceholder.typicode.com
// '/api3/' - https://www.youtube.com

const fetchLinkTitle = async () => {
  try {
    let response = await axios.get(inputValue.value);
    let parser = new DOMParser();
    let doc = parser.parseFromString(response.data, "text/html");
    let title = doc.getElementsByTagName("title")[0].text;
    textLink.value = title;
  } catch (error) {
    console.log(error);
  }
};
</script>
