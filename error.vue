<template>
  <NuxtLayout>
    <div class="container">
      <h2>hi</h2>
      <div class="text-4xl">{{ error.statusCode }}</div>
      <div class="text-2xl">{{ error.statusMessage }}</div>
      <button class="font-bold button" @click="clearErr" type="button">
        Back
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps(["error"]);

const clearErr = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.text-4xl {
  text-align: center;
  margin-bottom: 20px;
}

.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
