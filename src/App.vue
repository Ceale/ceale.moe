<script setup lang="ts">
import { RouterView } from "vue-router"
import Loading from "@c/Loading.vue"
import Switch from "@c/Switch.vue"
import { ref } from "vue"

const isTool = location.pathname.startsWith("/tool")
const show = ref(isTool ? true : false)
</script>

<template>
    <Switch />
    <Loading v-if="!isTool" @end="show = true" />
    <section v-if="show">
        <RouterView />
    </section>
</template>

<style scoped>
section {   
    height: 100vh;
    overflow: auto;
}
</style>

<style>
</style>
