<script setup>
import { onMounted, onUnmounted } from "vue"
import Background from "@/component/Background.vue"
import Copyright from "@/component/Copyright.vue"

onMounted(() => {
    const String = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "_"]

    const spawn = () => {
        //清除输出
        console.clear()
        let output = document.getElementById("output")
        output.innerHTML = ""
        //获取变量
        let quantity = document.getElementById("quantity").getElementsByTagName("input")[0].value
        let length = document.getElementById("length").getElementsByTagName("input")[0].value
        //循环生成
        for (let i=1; i<=quantity; i++) {
            let password = "";
            for (let i=0; i<length; i++) {
                password += String[Math.floor(Math.random()*String.length)]
            }
            console.log(password)
            let output = document.getElementById("output")
            let p = document.createElement("p")
            p.appendChild(document.createTextNode(password))
            output.appendChild(p);
            if (length > 55) {
                output.appendChild(document.createElement("br"))
            }
        }
    }
    globalThis.spawn = spawn
})

onUnmounted(() => {
    globalThis.spawn = undefined
})
</script>


<template>
    <Background />
    <Copyright class="copyright" />
    <div id="main">
        <div id="app">
            
            <div class="item" id="quantity">
    			<span>数量</span>
    			<input type="number" value="1">
    		</div>
    		
    		<div class="item" id="length">
    			<span>长度</span>
    			<input type="number" value="12">
    		</div>
    		
    		<button class="item" onclick="spawn()">生成</button>
    		<div id="output"></div>
    		
        </div>
    </div>
</template>


<style scoped>
.copyright {
    bottom: 2vh;
    position: fixed;
}

button, input {
    outline: none;
    border: none;
    font-size: 0.8em;
}

#main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 0.8em;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: #fff;
    padding: 1.5em;
    border-radius: 0.5em;
}

.item {
    margin: 0.6em;
}

.item input {
    height: 1em;
    background: transparent;
    border-bottom: #000 solid 0.15em;
}

button {
    background: rgb(18, 120, 255);
    padding: 0.7em 1.5em;
}

#output {
    padding: 1em;
    max-height: 30vh;
    max-width: 50vw;
    overflow: auto;
}

#output :deep(p) {
    user-select: all;
    word-break: break-all;
}
</style>