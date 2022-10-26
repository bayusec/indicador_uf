<template>
    <div class="flex flex-col h-screen">
        <TheNavbar/>
        <router-view/>
    </div>

</template>

<script setup>
import TheNavbar from "./components/TheNavbar.vue";

</script>

<style scoped>

</style>
