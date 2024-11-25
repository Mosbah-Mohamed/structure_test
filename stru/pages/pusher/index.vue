<template>
  <div>
    <!-- <p>{{ message }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// const { $pusher } = useNuxtApp()

onMounted(() => {
  // const channel = $pusher.subscribe('my-channel')
  // channel.bind('my-event', (data: any) => {
  //   message.value = data.message
  // })

  window.Echo.channel(`lesson-online`).listen(".lesson-online", (e: any) => {
    console.log("event data", e);
  });
});
</script>
