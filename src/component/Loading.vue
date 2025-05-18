<script setup>
import { ref, provide, defineAsyncComponent } from "vue"
const emit = defineEmits(["end"])

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

const leave = ref(false)
const duration = ref(200)

const leaveF = (d) => {
    emit("end")
    leave.value = true
    if (typeof d === "number") duration.value = d
    setTimeout(() => {
        show.value = false
    }, duration.value + 100)
}

// leaveF()
</script>


<template>
    <main v-if="show" :class="{ leave: leave }" :style="{ transitionDuration: duration + 'ms' }">
        <component :is="loadingAnimation" @close="leaveF"/>
        <div class="skip" @mouseup="leaveF">跳过</div>
    </main>
</template>

<style scoped>
main {
    position: fixed;
    opacity: 1;
    transition-property: opacity;
    transition-timing-function: ease;
    z-index: 1000;
}

main.leave {
    opacity: 0;
}

section {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.skip {
    position: fixed;
    right: -21vmin;
    bottom: -21vmin;
    z-index: 1000;
    width: 32vmin;
    height: 32vmin;
    border-radius: 70% 30% 0 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    box-shadow: 0 0 2.5vmin 0 rgba(0, 0, 0, 0.1), 0 0 3.8vmin 2.5vmin rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    padding-right: 7.6vmin;
    padding-bottom: 6vmin;
    font-size: 1.7vmin;
    transition: transform 300ms ease;
    color: white;
    animation: into 300ms ease;
}

@keyframes into {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

.skip:hover {
    transform: translate(-7.5vmin, -9vmin);
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
    transform: scale(1.05);
}

.leave-animation {
    transition: opacity 300ms ease-in;
    opacity: 0;
}

.leave-button {
    transition: all 300ms ease-in;
    transform: scale(0);
    opacity: 0;
}
</style>