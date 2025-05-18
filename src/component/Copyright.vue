<template>
<footer>
    <p>© 2021 - {{ new Date().getFullYear() }} 筱莱Ceale. All rights reserved.</p>
    <p>萌ICP备20220115号</p>
</footer>
</template>


<style scoped>
footer {
    width: 100%;
    font-size: 1.6vh;
    text-align: center;
    color:rgba(66, 66, 66, 0.8);
    pointer-events: none;
    user-select: none;
}

footer * {
    margin: 0.4em 0;
    text-decoration: none;
}
</style>