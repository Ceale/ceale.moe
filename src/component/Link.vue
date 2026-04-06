<script setup lang="ts">
defineProps<{
    href?: string
}>()
</script>

<template>
    <a class="link-underline-wavy" :href="$props.href" target="_blank" v-if="$props.href"><slot/></a>
    <span class="link-underline-wavy" v-else><slot/></span>
</template>

<style scoped>
.link-underline-wavy {
    color: inherit;
    text-decoration: underline wavy;
    text-decoration-color:rgb(155, 194, 82);
}
</style>