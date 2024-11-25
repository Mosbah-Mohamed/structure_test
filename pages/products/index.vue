<template>
  <div>
    <div v-if="error">oops ! {{ error }}</div>
    <div v-if="pending">Loading..... {{ pending }}</div>
    <div v-if="products" v-for="(product, index) in products">
      <p>{{ product?.id }}</p>
      <p>{{ product?.title }}</p>
      <p>{{ product?.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

// Define the type for product
interface Product {
  id: number;
  title: string;
  price: number;
  // Add other fields as necessary
}

const url = "https://fakestoreapi.com/products";

const { data: products, error, pending } = await useFetch<Product[]>(url);

console.log(useRoute());
</script>

<style lang="scss" scoped></style>
