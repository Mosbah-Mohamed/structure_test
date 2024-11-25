<template>
  <div>

    <!-- thats read default layout -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- if i want to make another layout as main i can use custom name -->

    <!-- <NuxtLayout name="custom">
      <NuxtPage />
    </NuxtLayout> -->

    <!-- third way i can wrap page with layout in page folders see about page -->

    <!-- <NuxtLayout name=""></NuxtLayout> -->

    <!-- or use in page -->

    <!-- definePageMeta({
    layout: 'default'
    })

    to make page without layout

    definePageMeta({
     layout: false
     }) -->


  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
