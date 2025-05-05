<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="logo"></div>
        <!-- <RouterLink to="/about">about</RouterLink> -->
        <footer>©2025 筱莱Ceale. All rights reserved.</footer>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    background-image: url(@a/image/dot.svg);
    background-size: 3.5vh;
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
}

footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 2vh;
    font-size: 1.8vh;
    text-align: center;
    color:rgba(66, 66, 66, 0.8);
    pointer-events: none;
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
