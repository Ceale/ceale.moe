<script setup lang="ts">
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"

</script>

<template>
    <div class="container">
        <div class="logo"></div>
        <RouterLink to="/about">about</RouterLink>
         <Copyright style="position: fixed; left: 0; right: 0; bottom: 2vh;" />
    </div>
    <Background />
</template>

<style scoped>
.container {
    height: 100%;
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
    animation: into 400ms cubic-bezier(0, 0, 0, 1);

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
