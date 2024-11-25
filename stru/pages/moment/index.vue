<template>
  <div>
    <p>Current Date and Time: {{ currentDate }}</p>
    <p>Specific Date (Christmas 2024): {{ someDate }}</p>
    <p>
      Specific Date (Christmas 2024):
      {{ moment().format("dddd") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import moment from "moment";

// Create a reactive date
const currentDate = ref(moment().format("MMMM Do YYYY, h:mm:ss a"));

// You can also manipulate or parse dates
const someDate = moment("2024-12-25").format("MMMM Do YYYY");
</script>
