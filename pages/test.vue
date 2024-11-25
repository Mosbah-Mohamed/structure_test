<template lang="pug">
    .pug-example
     
      .card.bg-white.rounded-lg.shadow-md.p-6
        .card-header
          h2.text-xl.font-semibold.mb-2 Welcome to Pug
          p.text-gray-600 This component is written using Pug template syntax
        
</template>

<script setup lang="ts">
const title = ref("Pug Example Component");
const items = ref([
  { id: 1, text: "Write cleaner templates" },
  { id: 2, text: "Reduce HTML boilerplate" },
  { id: 3, text: "Improve code readability" },
]);

const handleClick = () => {
  alert("Button clicked!");
};
</script>

<style scoped>
.pug-example {
  @apply p-6 max-w-2xl mx-auto;
}
</style>
