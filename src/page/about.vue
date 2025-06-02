<script setup lang="ts">
import { slogan as sloganList } from "@/assets/slogan"
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"
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
        <h1
        class="slogan"
        v-html="slogan"
        />
        <div class="readme">
            <p>在一天又一天的时光流逝中感受生命的美好……</p>
            <p style="font-weight: 500;">很高兴认识你，我叫筱莱Ceale。也许是只绵羊（？）</p>
            <p>
                热爱科技，文化，自然。喜欢一切优雅的、可爱的事物。曾幻想着改变世界，现在正在尝试过好自己的每一天。<br/>
                正在研究网站开发有关的东西，同时也对任何Minecraft相关的内容感兴趣。
            </p>
            <div style="display: flex; align-items: center;">
                <div class="avatar"></div>
                <span style="margin-left: 1em; transform: translateY(0.2em);">
                    这是我在互联网上活跃时使用的头像，<br>
                    如今它是井芹仁菜小姐。仁菜真的很可爱。
                </span>
            </div>
            <p>
                真的很高兴认识你。如果想多了解我一点，可以<a class="button" href="javascript:会随机抽一个标签哦" @click="roll = true">点击这里</a>，查看一个关于我的标签。
                <RollTag :roll @reset="roll = false" style="margin: 0.5em 0;"/>
            </p>
            <div>
                从下面的平台上可以找到我，欢迎来找我玩！也欢迎给我发邮件。
                <div class="link">
                    <a href="mailto:me@ceale.top">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-2 -2 26 27"><path d="M12.72 2.03A9.991 9.991 0 0 0 2.03 12.72C2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03c-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12a5.008 5.008 0 0 0-5.66 5.87a4.996 4.996 0 0 0 3.72 3.94c1.84.43 3.59-.16 4.74-1.33c.89 1.22 2.67 1.86 4.3 1.21c1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z" fill="currentColor"></path></svg>
                        Email
                    </a>
                    <a href="https://bgm.tv/user/Ceale" target="_blank">
                        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="70 50 400 420"><path class="b" d="m138.33,181.5c16.17,0,24.56,4.98,23.83,15.34l-1.55,15.75h1.25c24.15-20.31,49.52-36.9,79.78-36.9,33.16,0,49.72,7.08,55.99,21.39,22.24-18.62,51.79-21.39,81.64-21.39,49.74,0,63.71,34.82,50.27,93.27l-26.59,115.65c-4.29,18.65-17.03,29.01-35.69,29.01h-2.48c-18.66,0-26.64-10.36-22.35-29.01l24.87-108.19c8.29-36.06.79-48.5-21.19-48.5-13.26,0-30.09,8.29-50.77,26.11l-30.02,130.58c-4.29,18.65-17.03,29.01-35.69,29.01h-2.49c-18.65,0-26.64-10.36-22.35-29.01l24.87-108.19c8.29-36.06.79-48.5-21.6-48.5-13.26,0-30.09,8.29-50.36,26.11l-30.02,130.58c-4.29,18.65-17.03,29.01-35.69,29.01h-2.9c-18.65,0-26.64-10.36-22.35-29.01l40.02-174.11c4.29-18.65,15.38-29.01,31.54-29.01Z"/><path class="b" d="m401.94,94.97c0,2.24-.81,4.43-2.53,6.1l-93.66,93.72c-2.07,2.07-4.95,2.82-7.66,2.3,0,.06-.11,0-.11,0-.52.12-1.04.17-1.55.17-2.19,0-4.43-.81-6.1-2.48l-93.66-93.72c-3.4-3.34-3.4-8.81,0-12.2,1.67-1.67,3.86-2.48,6.1-2.48s4.38.81,6.1,2.48l89.17,89.17,89.17-89.17c3.4-3.34,8.87-3.34,12.2,0,1.73,1.67,2.53,3.91,2.53,6.1Z"/></svg>
                        Bangumi
                    </a>
                    <a href="https://github.com/Ceale" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-25 -25 540 580"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z" ></path></svg>
                        Github
                    </a>
                    <a href="https://space.bilibili.com/396162635" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/></g></svg>
                        Bilibili
                    </a>
                    <a href="https://www.pixiv.net/users/66799994" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 3 21 31"><path d="M0.000662555 28.4229C0.000662555 28.7417 0.258914 29 0.577781 29H4.04428C4.36315 29 4.6214 28.7417 4.6214 28.4229V25.2702C6.08945 26.1706 7.81639 26.6896 9.66456 26.6896C15.002 26.6896 19.3285 22.3631 19.3285 17.0257C19.3285 11.6883 15.002 7.36182 9.66456 7.36182C7.39397 7.36182 5.30839 8.14667 3.65848 9.4575L2.48088 7.62701C2.37481 7.46158 2.19169 7.36182 1.99532 7.36182H0.577149C0.258282 7.36182 3.05176e-05 7.62007 3.05176e-05 7.93894V28.4229H0.000662555ZM9.66519 22.0682C6.87999 22.0682 4.62203 19.8103 4.62203 17.0251C4.62203 14.2399 6.87999 11.9819 9.66519 11.9819C12.4504 11.9819 14.7084 14.2399 14.7084 17.0251C14.7084 19.8103 12.4504 22.0682 9.66519 22.0682Z"/></svg>
                        Pixiv
                    </a>
                </div>
            </div>
        </div>
        <div class="thanks">
            <p style="margin-bottom: 1em;">
                特别感谢以下站点和项目。
            </p>
            <p>
                本页面在排版布局句式上大量借鉴参考了：<a class="underline" href="//flag.moe">哞菇 / Nekotora</a>，这拯救了苦恼于写不出关于页面的筱莱，非常感谢！<br/>
                筱莱の摇曳在风格上模仿了：<a class="underline" href="//cyris.moe">绿生的幻想乡</a>，这个风格非常优雅，有种纸质笔记本的感觉。<br/>
            </p>
        </div>
    </div>
    <Copyright style="margin-bottom: 2vh;"/>
</template>

<style scoped>




.container {
    max-width: 100vmin;
    padding: 0 3em;
    margin: 5vh auto;
}

.container > div {
    margin-bottom: 2em;
}

.slogan {
    font-size: 2.5em;
    letter-spacing: 0.2em;
    line-height: 1.5;
    margin-bottom: 1em;
}

.container .button {
    position: relative;
    cursor: pointer;
    text-decoration: none;
}

.button::after {
    content: "";
    position: absolute;
    bottom: -0.25em;
    right: 0.1em;
    left: 0.1em;
    height: 0.10em;
    background-color:rgba(0, 0, 0, 0.55);
    transition: all 200ms ease;
}

.button:hover::after {
    height: 0.2em;
    border-radius: 0.1em;
}

.button:active::after {
    height: 0.15em;
    border-radius: 0.1em;
}

@media (max-aspect-ratio: 1/1) {
    .slogan :deep(.br) {
        display: block;
    }
}

.readme > p, .readme > div {
    margin-bottom: 1.5em;
    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.7);
    
}

.readme .avatar {
    display: block;
    width: 10vh;
    height: 10vh;
    flex-shrink: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(@/assets/image/avatar.png);
    margin: 0 1em;
    position: relative;
}
.readme .avatar::before, .readme .avatar::after {
    position: absolute;
    top: 0.3em;
    font-size: 1.5em;
    font-weight: bold;
}
.readme .avatar::before {
    content: "“";
    left: 0;
    transform: translateX(-100%);
}
.readme .avatar::after {
    content: "”";
    right: 0;
    transform: translateX(100%);
}

.readme .link {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5em;
}

.readme .link a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
    border-radius: 0.6em;
    text-shadow: none;
    margin-right: 0.8em;
    text-decoration: none;
}

.readme .link svg {
    height: 1.2em;
    margin-right: 0.2em;
    fill: rgb(63, 63, 63);
    transition: fill 200ms ease;
}

.readme .link svg:hover {
    fill: rgb(81, 81, 81);
}

h2 {
    margin-bottom: 1em;
}
</style>
