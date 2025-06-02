<script setup>
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"
import { RouterLink } from "vue-router"
</script>


<template>
    <Copyright style="position: fixed; bottom: 1.5vh;;" />
    <Background />
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <p>这个页面还没写好哦</p>
        <RouterLink class="underline" to="/">返回</RouterLink>
    </div>
</template>