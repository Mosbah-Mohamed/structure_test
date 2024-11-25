<!-- pages/index.vue -->
<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/coun";

const counterStore = useCounterStore();

const counter = computed(() => counterStore.count);

const doubleCount = computed(() => counterStore.doubleCount);

const increment = () => counterStore.increment();
const decrement = () => counterStore.decrement();
</script>
