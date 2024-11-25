<template>
  <div>
    <button class="w-100 h-100 border-1 bg-gray-400" @click="addProduct">
      addProduct
    </button>
    <div v-if="newPending">Loading...</div>
    <div v-if="newError">Error: {{ newError }}</div>
    <div v-if="newProduct">Product added: {{ newProduct }}</div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const newProduct = ref<Product | null>(null);
const newPending = ref<boolean>(false);
const newError = ref<string | null>(null);

const formData = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
};

const addProduct = async () => {
  const url = "https://fakestoreapi.com/products";

  const { data, error, pending } = await useFetch<Product>(url, {
    method: "post",
    body: formData,
  });

  // second way using $fetch

  // const { data, error, pending } = await useAsyncData(() =>
  //   $fetch(url, {
  //     method: "post",
  //     body: formData,
  //   })
  // );

  newProduct.value = data.value as Product | null;
  newPending.value = pending.value as boolean;
  newError.value = error.value as string | null;
};
</script>

<style lang="scss" scoped></style>
