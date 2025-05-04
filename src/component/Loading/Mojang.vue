<script setup lang="ts">
import { inject, ref, watch, type Ref } from "vue"
import { sleep } from "@/util/sleep"

const emit = defineEmits(["close"])

const loaded = inject<Ref<boolean>>("loaded")
watch(loaded!, () => hide())

let animation_finish = false
const timer = setInterval(() => {
    width.value += (94 - width.value) / 4
    if ( width.value > 90 ) {
        clearInterval(timer)
        animation_finish = true
        hide()
    }
}, 150)

const hide = async () => {
    if (!animation_finish || !loaded!.value) return
    await sleep(400)
    width.value = 100
    opacity.value = 0
    await sleep(800)
    emit("close")
}

const width = ref(0)
const opacity = ref(1)

import MOJANG from "@a/image/loading/mojang/MOJANG.svg?no-inline"
import CEALE from "@a/image/loading/mojang/CEALE.svg?no-inline"
const themeList = [
    [ MOJANG, "rgb(241, 60, 69)" ],
    [ CEALE, "linear-gradient(rgba(96, 175, 0, 0.5), rgba(0, 120, 64, 0.5)), #fff" ]
]
console.log()
const theme = themeList[Math.floor(Math.random() * themeList.length)]
const bg = theme[1]
const url = `url("${theme[0]}")`
</script>


<template>
<section :style="{ opacity: opacity, background: bg }">
    <div class="logo" :style="{ 'background-image': url }"></div>
    <div class="background">
        <div class="fill" :style="{ width: width+'%' }"></div>
    </div>
</section>
</template>


<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 800ms ease;
}

.logo {
    position: relative;
    width: 80vmin;
    height: 20vmin;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.background {
    position: absolute;
    bottom: 10vh;
    width: min(75%, calc(100vw - 100px));
    height: max(3vmin, 15px);
    padding: 2px;
    box-sizing: border-box;
    border: #ffffff solid 2px;
}

.fill {
    height: 100%;
    background-color: #ffffff;
    transition: width ease-out 400ms;
}
</style>