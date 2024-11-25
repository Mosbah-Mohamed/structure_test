<template>
    <div>

        <h1>hello from param title {{ this.$route.params.title }}</h1>
        <h1>hello from param title second way {{ route.params.title }}</h1>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'second'
})

import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style lang="scss" scoped></style>