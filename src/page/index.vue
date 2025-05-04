<script setup lang="ts">
</script>

<template>
    <RouterLink to="/about">about</RouterLink>
    <div class="container">
        <div class="logo"></div>
        <footer>©2025 筱莱Ceale. All rights reserved.</footer>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url(@a/image/dot.svg);
    background-size: 3.5vh;
}

.logo {
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
    color:rgb(61, 61, 61);
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
