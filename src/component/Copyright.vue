<template>
<footer><span v-for="(text, index) in `©${new Date().getFullYear()} 筱莱Ceale. All rights reserved.`">{{ text }}</span></footer>
</template>


<style scoped>
footer {
    width: 100%;
    font-size: 1.6vh;
    text-align: center;
    color:rgba(66, 66, 66, 0.8);
    pointer-events: none;
}
</style>