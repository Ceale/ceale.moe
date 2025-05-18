<script setup lang="ts">
import { slogan } from "@/assets/slogan"
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"

const sloganHandle = (content: string) => {
    console.log(content.replace("#br", ""), content.replace("#br", "").length)
    return content.replace("#br", "").length > 15 ?
    content.replace("#br", "<br/>") :
        content.replace("#br", '<span class="br"></span>')
}
</script>

<template>
    <Background />
    <div class="container">
        <RouterLink to="/" style="display: inline-block; font-size: 1.5em; margin-bottom: 2em;">←</RouterLink>
        <h1
        class="slogan"
        v-html="sloganHandle(slogan[Math.floor(Math.random() * slogan.length)])"
        />

        很高兴认识你，我是筱莱Ceale。
    </div>
    <Copyright />
</template>

<style scoped>
.container {
    max-width: 95vmin;
    padding: 0 3em;
    margin: 15vh auto;
}

.slogan {
    font-size: 2.5em;
    letter-spacing: 0.2em;
    line-height: 1.5;
    margin-bottom: 1em;
}

@media (max-aspect-ratio: 1/1) {
    .slogan :deep(.br) {
        display: block;
    }
}

</style>
