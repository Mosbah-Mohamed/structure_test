<template>
    <div>

        <h1>hello from optional route page {{ $route.params.name }}</h1>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'second'
})
</script>

<style lang="scss" scoped></style>