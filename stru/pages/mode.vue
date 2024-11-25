<template>
    <div id="app" :class="{ 'dark-mode': isDarkMode }">
        <button @click="toggleMode">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</button>

        <!-- Your other components and content here -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isDarkMode: false,
        };
    },
    methods: {
        toggleMode() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark-mode', this.isDarkMode);

            if (process.client) {
                localStorage.setItem('darkMode', this.isDarkMode);
            }
        },
    },
    created() {
        if (process.client) {
            const storedMode = localStorage.getItem('darkMode');
            if (storedMode !== null) {
                this.isDarkMode = storedMode === 'true';
                document.body.classList.toggle('dark-mode', this.isDarkMode);
            }
        }
    },
};
</script>
  
<style scoped>
.dark-mode {
    background-color: black;
    color: white;
}
</style>
  