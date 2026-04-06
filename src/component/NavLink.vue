<script setup lang="ts">
defineProps<{
    href?: string
}>()
</script>

<template>
    <RouterLink class="link-highlight" v-if="$props.href && !$props.href?.startsWith('//')" :to="$props.href" ><slot/></RouterLink>
    <a class="link-highlight" :href="$props.href" v-else-if="$props.href?.startsWith('//')"><slot/></a>
    <span class="link-highlight" v-else><slot/></span>
</template>


<style scoped>
.link-highlight {
    color: inherit;
    text-decoration: none;
    background-size: 100% 60%; 
    background-repeat: repeat-x;
    background-image: linear-gradient(rgba(185, 226, 102, 0.5), rgba(185, 226, 102, 0.5));
    background-position: center bottom;
}
</style>