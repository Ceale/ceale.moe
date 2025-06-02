<script setup lang="ts">
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"

</script>

<template>
    <div class="container">
        <div class="logo"></div>
        <div class="link">
            <RouterLink class="item" to="/about" style="animation-delay: 450ms;">☆点这里☆</RouterLink>
            <RouterLink class="item" to="/blog" style="animation-delay: 300ms;">摇曳的时间</RouterLink>
            <RouterLink class="item" to="/fl" style="animation-delay: 350ms;">友人帐</RouterLink>
            <RouterLink class="item" to="/tool" style="animation-delay: 450ms;">小工具</RouterLink>
        </div>
        <!-- <RouterLink class="link" to="/about">☆点这里☆</RouterLink> -->
    </div>
    <Copyright class="copyright"/>
    <Background />
</template>

<style scoped>
.container {
    height: 100%;
}

.copyright {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 1.5vh;
    animation: opacityInto 600ms ease forwards;
}

.link {
    position: absolute;
    bottom: 30%;
    right: 50%;
    transform: translateX(50%);
    width: 20em;
    max-width: 90%;
    display: flex;
    justify-content: space-between;

    color:#484848;
}

.link .item  {
    opacity: 0;
    animation: opacityInto 400ms ease forwards;
}

.link::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 70%;
    width: 100%;
    opacity: 0;
    transform: scaleX(0.4) translateY(0.2em);
    background-color: rgba(185, 226, 102, 0.5);
    z-index: -1;
    animation: linkInto 800ms ease 150ms forwards;
}

@keyframes linkInto {
    from {
        opacity: 0;
        transform: scaleX(0.4) translateY(0.2em);
    }
    to {
        opacity: 1;
        transform: scaleX(1.1) translateY(0.2em);
    }
}

@keyframes opacityInto {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(@a/image/logo.svg);
    background-size: contain;
    background-position: center 0%;
    background-repeat: no-repeat;
    animation: logoInto 800ms cubic-bezier(.16,1,.3,1);

}

@keyframes logoInto {
    from {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    to {
        transform: translate(-50%, -50%) scale(1);
    }
}

@media (min-aspect-ratio: 1/1) {
    .logo {
        width: 70vh;
        height: 24vh;
    }
} @media (max-aspect-ratio: 1/1) {
    .logo {
        width: 70vw;
        height: 24vw;
    }
}
</style>
