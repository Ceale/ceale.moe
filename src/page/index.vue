<script setup lang="ts">
</script>

<template>
    <div class="container">
        <img class="logo" src="@a/image/logo.svg" alt="筱莱CEALEの摇曳" draggable="false">
        <!-- <RouterLink to="/about">about</RouterLink> -->
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
    background-size: 25px;
}

.logo {
    width: 450px;
    height: 200px;
    user-select: none;
}

footer {
    position: fixed;
    bottom: 32px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 14px;
    color:rgb(61, 61, 61);
}
</style>
