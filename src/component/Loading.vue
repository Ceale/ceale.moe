<script setup>
import { ref, provide, defineAsyncComponent } from "vue"

const show = ref(true)
function close() {
    show.value = false
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        load_finish = true
        Hide()
    }
})

provide<ShowSwitchAnimation>("ShowSwitchAnimation", {})

// const 加载动画
const loadingAnimationList = [
    defineAsyncComponent(() => import("@c/Loading/Genshin.vue")),
    defineAsyncComponent(() => import("@c/Loading/Mojang.vue"))
]
const loadingAnimation = loadingAnimationList[Math.floor(Math.random() * loadingAnimationList.length)]
// const select = Math.ceil(Math.random()*2)
</script>


<template>
    <!-- <section v-if="show">
        <Genshin v-if="select===1" @close="close" />
        <Mojang v-else-if="select===2" @close="close" />
    </section> -->
    Com
</template>

<style scoped>
section {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
}
</style>