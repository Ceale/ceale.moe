<script setup lang="ts">
import { link } from "@/assets/link"
import { slogan as sloganList } from "@/assets/slogan"
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"
import Link from "@/component/Link.vue"
import RollTag from "@/component/RollTag.vue"
import { onBeforeMount, ref } from "vue"
(globalThis as any).会随机抽一个标签哦 = (globalThis as any).会随机抽一个标签哦 ?? (() => null)

let slogan: string
onBeforeMount(() => {
    slogan = sloganHandle(sloganList[Math.floor(Math.random() * sloganList.length)])
})

const sloganHandle = (content: string) => {
    return content.replace("#br", "").length > 15 ?
        content.replace("#br", "<br/>") :
        content.replace("#br", '<span class="br"></span>')
}
const roll = ref(false)
</script>

<template>
    <Background/>
    <div class="container">
        <RouterLink to="/" style="display: inline-block; font-size: 1.5em; margin-bottom: 2em;">←</RouterLink>
        <h1 class="title">友链</h1>
        <p class="subtitle">为什么不呢？让互联网成为互联网吧！</p>
        <div>
            <div v-for="item in link" class="item">
                <img :src="item.icon">
                <div class="info">
                    <p>{{ item.name }}</p>
                    <p>{{ item.desc }}</p>
                    <Link class="underline" :href="item.link" >访问</Link>
                </div>
            </div>
        </div>

    </div>
    <Copyright style="margin-bottom: 2vh;"/>
</template>

<style scoped>
.container {
    max-width: 100vmin;
    padding: 0 3em;
    margin: 7vh auto 15vh;
}

.title {
    font-size: 2.5em;
    letter-spacing: 0.1em;
    line-height: 1.5;
}

.subtitle {
    margin-bottom: 2.5em;
}

.item {
    display: inline-flex;
    align-items: center;
    gap: 3vh;
}

.item img {
    width: 8vh;
    height: 8vh;
}

.item .info {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>