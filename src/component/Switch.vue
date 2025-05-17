<script setup lang="ts">
import { ref, inject } from "vue"
import { sleep } from "@/util/sleep"
import type { ShowSwitchAnimation } from "@/type/ShowSwitchAnimation"

let first = true

const Start = (next: any) => {
    if (first == true) {
        first = false
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
                animation_stop()
            }
        }, 100)
    })
}
inject<ShowSwitchAnimation>("ShowSwitchAnimation")!.run = Start

const show = ref(false)
const className = ref<string[]>([])
let should_end = false
const in_delay = 80

async function animation_start(finish: any) {
    should_end = false
    className.value = []

    show.value = true
    loading_text = get_loading_text()

    await sleep(850 + in_delay * 2)
    finish()
    animation_run()
}

function animation_run() {
    let timer = setInterval(() => {
        if (should_end == true) {
            clearInterval(timer)
            // 停止动画
            animation_end()
        }
    }, 100)
}

function animation_stop() {
    should_end = true
}

async function animation_end() {
    className.value.push("hide")
    await sleep(850 + in_delay * 2)
    show.value = false

}


const loading_text_list = [
    "正在加载了喵",
    "全力加载中",
    "正在连接到服务器",
    "加载地形中",
    "加入世界中",
    "通讯加密中"
]

function get_loading_text() {
    return loading_text_list[Math.floor(Math.random() * loading_text_list.length)]
}

let loading_text: string

</script>


<template>
    <section v-if="show" :class="className">
        <div class="plane"></div>
        <div class="plane"></div>
        <div class="container">
            <div class="content">
                <div class="img"></div>
                <p>{{ loading_text }}</p>
            </div>
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

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .content {
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

.container .content .img {
    width: 75vmin;
    height: 20vmin;
    background-image: url(@a/image/logo.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0 0 1.5px rgba(0, 0, 0, 0.3));
}

.container .content p {
    text-align: center;
    font-weight: lighter;
    letter-spacing: 0.5em;
    font-size: min(2.1vw, 1.6vh);
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
    background: #51c3bd;
    animation-delay: 0ms;
}

.hide .plane:nth-child(1),
.hide .container:nth-child(1) {
    animation-delay: 160ms;
}

.plane:nth-child(2),
.container:nth-child(2) {
    background: #93cf72;
    animation-delay: 80ms;
}

.hide .plane:nth-child(2),
.hide .container:nth-child(2) {
    animation-delay: 80ms;
}

.plane:nth-child(3),
.container:nth-child(3) {
    background-color: #c0b4b0;
    background-image: url(@a/image/dot.svg);
    background-size: 25px;
    animation-delay: 160ms;
}

.hide .plane:nth-child(3),
.hide .container:nth-child(3) {
    animation-delay: 0ms;
}

@keyframes in {
    from {
        clip-path: polygon(0 0, -100vh 100vh, -100vh 100vh, 0 0);
        -webkit-clip-path: polygon(0 0, -100vh 100vh, -100vh 100vh, 0 0);
    }

    to {
        clip-path: polygon(0 0, -100vh 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
        -webkit-clip-path: polygon(0 0, -100vh 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
    }
}

@keyframes out {
    from {
        clip-path: polygon(0 0, -100vh 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
        -webkit-clip-path: polygon(0 0, -100vh 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
    }

    to {
        clip-path: polygon(calc(100vw + 100vh) 0, 100vw 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
        -webkit-clip-path: polygon(calc(100vw + 100vh) 0, 100vw 100vh, 100vw 100vh, calc(100vw + 100vh) 0);
    }
}
</style>