<template>
    <div>

        <h1>api page</h1>

        {{ data }}

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
})

const { data } = useFetch('/api/ninja?name=mosbah')

</script>

<style lang="scss" scoped></style>