<script setup>
import { ref, provide, defineAsyncComponent } from "vue"

const loadingAnimationList = [
    defineAsyncComponent(() => import("@c/Loading/Genshin.vue")),
    defineAsyncComponent(() => import("@c/Loading/Mojang.vue"))
]
const loadingAnimation = loadingAnimationList[Math.floor(Math.random() * loadingAnimationList.length)]

const show = ref(true)
// const show = ref(false)
const loaded = ref(false)
provide("loaded", loaded)

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        loaded.value = true
    }
})

const close = () => {
    setTimeout(() => {
        show.value = false
    }, 150)
}
</script>


<template>
    <component v-if="show" :is="loadingAnimation" @close="show = false" />
    <div v-if="show" class="skip" @mouseup="close()">跳过</div>
</template>

<style scoped>
section {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.skip {
    position: fixed;
    right: -165px;
    bottom: -165px;
    z-index: 1000;
    width: 250px;
    height: 250px;
    border-radius: 70% 30% 0 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 0 30px 20px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    padding-right: 60px;
    padding-bottom: 60px;
    transition: all 300ms ease;
    color: white;
}

.skip:hover {
    transform: translate(-55px, -60px);
}

.skip::before{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 70% 30% 0 30%;
    background-color:rgb(92, 92, 92);
    z-index: -1;
    transform: scale(0.95);
    opacity: 0;
    transform-origin: 100% 100%;
    transition: all 150ms ease;
}

.skip:hover::before {
    opacity: 1;
}

.skip:active::before {
    transform: scale(1.01);
}
</style>