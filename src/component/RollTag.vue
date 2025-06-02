<script setup lang="ts">
import { h, onMounted, ref, useTemplateRef, watch, type VNode } from "vue"
import { tag } from "@/assets/tag"

const { roll: isRoll } = defineProps({
    roll: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(["reset"])

const nodeRef = useTemplateRef("node")

watch(() => isRoll, _ => {
    if (isRoll === true) {
        emit("reset")
        roll()
    }
})

let roll: () => void

onMounted(() => {
    const node = nodeRef.value!
    let rolling = false
    const count = 23 * 2

    roll = () => {
        console.log("roll")
        if (rolling === true) return
        if (node.children.length > 0) {
            const length = node.children.length - 1
            for (let i = 0; i < length; i++) {
                node.removeChild(node.children[0])
            }
            const span = nodeRef.value!.querySelector("span")
            if (span !== null) {
                console.log(span)
                span.classList.add("remove")
                span.setAttribute("style", `--t: ${ 1.1 * 50 }ms`)
            }
            // return
        }
        node.classList.add("show")
        rolling = true
        let time = 0
        for (let i = 1; i <= count; i++) {
            const t = (1.1 ** (i/2)) * 50
            time += t
            setTimeout(() => {
                const span = document.createElement("span")
                span.innerHTML = "#" + tag[Math.floor(Math.random() * tag.length)]
                span.classList.add(i === count ? "done": "remove")
                span.setAttribute("style", `--t: ${i === count? t*3: t}ms`)
                node.appendChild(span)
                if (i === count) {
                    setTimeout(() => {
                        rolling = false
                    }, t*3)
                }
            }, time)
        }
    }
})
</script>


<template>
<div ref="node" class="tag"></div>
</template>


<style scoped>
.tag {
    position: relative;
    display: flex;
    align-items: center;
    height: 0;
    box-sizing: border-box;
    transition: all 500ms ease;
}

.tag.show {
    height: 2em;
}

.tag.show :deep(span) {
    opacity: 1;
}

.tag :deep(span) {
    opacity: 0;
    position: absolute;
    transform-origin: 0% 50%;
    animation: add var(--t) cubic-bezier(.52,1.43,.13,1.02);
}

.tag :deep(span.remove) {
    animation: add var(--t) linear, remove var(--t) linear var(--t) forwards;
}

@keyframes add {
    from {
        transform: translateY(-1.5em) scale(0.98);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    to {
        transform: none;
    }
}

@keyframes remove {
    from {
        transform: none;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translateY(1.5em) scale(0.98);
    }
}

.tag :deep(span::after) {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0.2em;
    left: 0;
    height: 0.5em;
    width: calc(100% - 0.3em);
    border-radius: 0.15em;
    background-color: rgba(135, 200, 24, 0.6);
}
</style>