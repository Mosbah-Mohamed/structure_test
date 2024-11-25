<template>
  <div>
    <!-- add seo tags -->

    <!-- <Head>
      <Title>single product | {{ id }}</Title>
      <Meta name="description" :content="'single product' + id" />
    </Head> -->

    <!-- add seo tags -->

    <!-- id because nested page is [id] i can change it to any name -->
    <h1 class="text-blue-700">hello from id is {{ id }}</h1>

    <h5>full path is :{{ fullPath }}</h5>

    <p>{{ product.id }}</p>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

// to make page without layout

// definePageMeta({
//     layout: false
// })

// useSeoMeta({
//     title: () => name.value,
//     // ogTitle: '',
//     // description: '',
//     // ogDescription: ''

// })

const name = ref("mosbah");

const { fullPath } = useRoute();

// id is the same page name [id]
const { id } = useRoute().params;

const url = "https://fakestoreapi.com/products/" + id;

const { data: product, error } = await useFetch(url, { key: id });

// second way to fetch api

// const { data: product } = await useAsyncData("prod", () =>
//   $fetch("https://fakestoreapi.com/products/" + id)
// );

if (!product.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "product not found",
    fatal: true,
  });
}

console.log(useRoute());
</script>

<style lang="scss" scoped></style>
