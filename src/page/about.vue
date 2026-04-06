<script setup lang="ts">
import { slogan as sloganList } from "@/assets/slogan"
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"
import Link from "@/component/Link.vue"
import RollTag from "@/component/RollTag.vue"
import { onBeforeMount, ref } from "vue"
import EmailIcon from "@/assets/icon/email.svg"
import BangumiIcon from "@/assets/icon/bangumi.svg"
import GithubIcon from "@/assets/icon/github.svg"
import BiliIcon from "@/assets/icon/bili.svg"
import PixivIcon from "@/assets/icon/pixiv.svg"
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
        <h1 class="slogan" v-html="slogan" />
        <div class="readme">
            <p>在一天又一天的时光流逝中发现生命的美好……</p>
            <p style="font-weight: 500;">很高兴认识你，我叫筱莱Ceale。也许是只绵羊（？）</p>
            <p>
                热爱科技，文化，自然。喜欢各种优雅的、可爱的事物。曾幻想着改变世界，现在正在尝试过好自己的每一天。<br/>
                正在研究网站开发相关的技术，同时也对任何与 Minecraft 相关的内容感兴趣。
            </p>
            <div style="display: flex; align-items: center;">
                <div class="avatar"></div>
                <span style="flex-shrink: 1; margin-left: 1em; transform: translateY(0.2em);">
                    这是我在互联网上活跃时使用的头像，<br>
                    如今它是井芹仁菜小姐。仁菜真的很可爱。
                </span>
            </div>
            <p>
                如果想多了解我一点，可以<a class="button" href="javascript:会随机抽一个标签哦" @click="roll = true">点击这里</a>，查看一个关于我的标签。
                <RollTag :roll @reset="roll = false" style="margin: 0.5em 0;"/>
            </p>
            <div>
                从下面的平台上可以找到我，欢迎来找我玩，也欢迎给我发邮件。
                <div class="link">
                    <a href="mailto:me@ceale.top">
                        <EmailIcon/>Email
                    </a>
                    <a href="https://bgm.tv/user/Ceale" target="_blank">
                        <BangumiIcon/>Bangumi
                    </a>
                    <a href="https://github.com/Ceale" target="_blank">
                        <GithubIcon/>Github
                    </a>
                    <a href="https://space.bilibili.com/396162635" target="_blank">
                        <BiliIcon/>Bilibili
                    </a>
                    <a href="https://www.pixiv.net/users/66799994" target="_blank">
                        <PixivIcon/>Pixiv
                    </a>
                    <!-- 
                    抖音 https://v.douyin.com/_y_aeMwhnEQ/
                    -->
                </div>
            </div>
        </div>
        <div class="thanks">
            <p style="margin-bottom: 1em;">
                特别感谢以下站点和项目。
            </p>
            <p>
                本页面在排版布局句式上大量借鉴参考了<Link href="//flag.moe">哞菇 / Nekotora</Link>，哞菇的主页给了我在排版布局上非常棒的参考。<br/>
                而本站的整体风格模仿了<Link href="//cyris.moe">绿生的幻想乡</Link>，绿生的主页给人感觉柔和又清新，有种纸质笔记本的感觉，我很喜欢。<br/>
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
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(/avatar.png);
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
