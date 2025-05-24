<script setup lang="ts">
import { ref, inject } from "vue"
import { sleep } from "@/util/sleep"
import type { ShowSwitchAnimation } from "@/type/ShowSwitchAnimation"
import Background from "./Background.vue"

let first = 2
// let first = 1

const start = (next: any) => {
    if (first > 0) {
        first--
        next()
        return
    }
    // 开始动画
    animation_start(() => {
        // 动画入场完毕的回调函数
        // 路由切换
        next()
        // 等待加载完成
        let timer = setInterval(() => {
            if (document.readyState == "complete") {
                clearInterval(timer)
                // 停止动画
                hideAnimation()
            }
        }, 100)
    })
}
start(() => {})
inject<ShowSwitchAnimation>("ShowSwitchAnimation")!.run = start

const show = ref(false)
const className = ref<string[]>([])
let should_end = false
const in_delay = 80

async function animation_start(finish: any) {
    should_end = false
    className.value = []

    show.value = true
    getLoadingText()

    await sleep(850 + in_delay * 2)
    finish()
    animation_run()
}

function animation_run() {
    let timer = setInterval(() => {
        if (should_end == true) {
            clearInterval(timer)
            // 停止动画
            endAnimation()
        }
    }, 100)
}

function hideAnimation() {
    should_end = true
}

async function endAnimation() {
    className.value.push("hide")
    await sleep(850 + in_delay * 2)
    show.value = false

}


const loadingTextList = [
    "正在加载了喵",
    "全力加载中",
    "正在连接到服务器",
    "加载地形中",
    "加入世界中",
    "通讯加密中"
]

let loadingText: string

const getLoadingText = () => {
    loadingText = loadingTextList[Math.floor(Math.random() * loadingTextList.length)]
}
</script>


<template>
    <section v-if="show" :class="className">
        <div class="plane"></div>
        <div class="plane"></div>
        <div class="container">
            <div class="img"></div>
            <p>{{ loadingText }}</p>
        </div>
    </section>
</template>


<style scoped>
section {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 1000;
}

section.hide {
    animation: 1000ms ease-in-out forwards hide;
}

@keyframes hide {
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container p {
    font-size: 0.8em;
    letter-spacing: 0.15em;
    pointer-events: none;
    user-select: none;
    text-align: center;
    animation: 2500ms cubic-bezier(0.09, 0.71, 0.44, 1) zoom_out forwards;
}

@keyframes zoom_out {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.3);
    }
}

.container .img {
    position: absolute;
    bottom: 20vh;
    right: 3vmin;
    width: 40vmin;
    height: 10vmin;
    background-image: url(@a/image/logo.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0 0 1.5px rgba(0, 0, 0, 0.3));
    animation: 3500ms cubic-bezier(0.09, 0.71, 0.44, 1) move_right forwards;
}

@keyframes move_right {
    from {
        transform: translateX(-20vmin);
    }

    to {
        transform: translateX(-5vmin);
    }
}

.plane,
.container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    clip-path: polygon(0 0, -100vh 100vh, -100vh 100vh, 0 0);
    -webkit-clip-path: polygon(0 0, -100vh 100vh, -100vh 100vh, 0 0);
    animation: 850ms ease-in-out forwards in;
}

.hide .plane,
.hide .container {
    clip-path: polygon(0 0, -100vh 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
    -webkit-clip-path: polygon(0 0, -100vh 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
    animation: 850ms ease-in-out forwards out;
}

.plane:nth-child(1),
.container:nth-child(1) {
    background:rgb(84, 219, 213);
    animation-delay: 0ms;
}

.hide .plane:nth-child(1),
.hide .container:nth-child(1) {
    animation-delay: 240ms;
}

.plane:nth-child(2),
.container:nth-child(2) {
    background:rgb(194, 237, 107);
    animation-delay: 120ms;
}

.hide .plane:nth-child(2),
.hide .container:nth-child(2) {
    animation-delay: 120ms;
}

.plane:nth-child(3),
.container:nth-child(3) {
    background-image: linear-gradient(0deg, #ecfaf7 50%, #fafafa 50%);
    background-size: 10% 100%;
    background-repeat: repeat;
    animation-delay: 240ms;
}

.hide .plane:nth-child(3),
.hide .container:nth-child(3) {
    animation-delay: 0ms;
}

@keyframes in {
    from {
        clip-path: polygon(-10vw 0, -10vw 0, -10vw 100vh, -10vw 100vh);
    }

    to {
        clip-path: polygon(-10vw 0, 150vw 0, 100vw 100vh, -10vw 100vh);
    }
}

@keyframes out {
    from {
        clip-path: polygon(0 0, 100vw 0, 100vw 100vh, 0 100vh);
    }
    to {
        clip-path: polygon( 100vw 0, 100vw 0, 0vw 100vh, 0vw 100vh);
    }
}
</style>