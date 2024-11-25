<template>
    <div>

        <h1>inline route middleware</h1>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'second',
    middleware: (context) => {
        console.log("inline middleware")
        console.log("context middleware", context)
    }
})

</script>

<style lang="scss" scoped></style>