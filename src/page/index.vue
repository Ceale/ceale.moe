<script setup lang="ts">
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"

</script>

<template>
    <div class="container">
        <div class="logo"></div>
        <RouterLink class="link" to="/about">☆点这里☆</RouterLink>
    </div>
    <Copyright style="position: fixed; left: 0; right: 0; bottom: 1.5vh;" />
    <Background />
</template>

<style scoped>
.container {
    height: 100%;
}

.link {
    position: absolute;
    top: 65%;
    left: 50%;
    font-size: 2vh;
    text-decoration: none;
    letter-spacing: 0.1em;
    transform: translate(-50%, -50%);
    transition: transform 350ms ease;
}

.link:hover {
    transform: translate(-50%, -50%) scale(1.1);
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
    animation: into 1s cubic-bezier(0, 0, 0, 1);

}

@keyframes into {
    from {
        transform: translate(-50%, -50%) scale(0.8);
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
