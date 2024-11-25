<template>
    <div>

        <!-- id because nested page is [id] i can change it to any name -->
        <h1 class="text-blue-700">hello from post number is {{ number }}</h1>

    </div>
</template>

<script setup>

definePageMeta({
    layout: "custom",
    validate: async (route) => {
        return /^\d+$/.test(route.params.number)
    }
})

const { fullPath } = useRoute();

// id is the same page name [id]
const { number } = useRoute().params;

</script>

<style lang="scss" scoped></style>