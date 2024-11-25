<template>
    <div>

        <h1>named route middleware</h1>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
    middleware: ["auth"]
})

</script>

<style lang="scss" scoped></style>