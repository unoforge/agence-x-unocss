<template>
    <button @click="toggleTheme()" aria-label="switch theme" border="~ gray-1 dark:gray-8" outline-none flex relative
        text-gray-7 dark-text-gray-3 rd-full p-2 lg:p-3 bg-transparent>
        <span i-carbon-moon text-xl bg="gray-7 dark:gray-3" hidden dark-flex></span>
        <span i-carbon-sun text-xl bg="gray-7 dark:gray-3" flex dark-hidden></span>
    </button>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const toggleTheme = () => {
    if (colorMode.preference === "dark") {
        colorMode.preference = "light"
    } else {
        colorMode.preference = "dark"
    }
}
</script>