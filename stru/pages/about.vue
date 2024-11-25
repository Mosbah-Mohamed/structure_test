<template>
  <!-- i can wrap page with <NuxtLayout name="default"></NuxtLayout> -->

  <!-- <NuxtLayout name="default"> -->

    <!-- <img 
    src="/path/to/image.jpg" 
    alt="A beautiful view of the sunset over the mountains" 
    title="Sunset over the mountains" 
    loading="lazy" 
  /> -->

  

  <div>
    <h1 class="blue-text">about.vue</h1>

    <h2>{{ $t("appName") }}</h2>

    <!-- provider="imgix"  for server images -->
    <NuxtImg
      format="webp"
      width="200"
      height="200"
      src="/contact.png"
      fit="cover"
    />
    <!-- from api -->
    <!-- <NuxtImg :src="info?.image" loading="lazy" class="img-fluid w-100" /> -->
  </div>

  <!-- </NuxtLayout> -->
</template>

<script setup>
definePageMeta({
  layout: "default",

  // for disable them
  // pageTransition:false,
  // layoutTransition: false,

  pageTransition: {
    name: "page",
    mode: "out-in",
  },
  layoutTransition: {
    name: "slide-in",
  },

  // define dynamic pagetransition depend on condition

  middleware: function (to, from) {
    to.meta.pageTransition.name = to.params.id ? "slide-left" : "slide-right";
  },
});

// to make page without layout

// definePageMeta({
//     layout: false
// })
</script>

<style lang="scss" scoped></style>
