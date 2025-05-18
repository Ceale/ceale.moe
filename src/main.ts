import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import iconUrl from '@/assets/image/icon.png'

import "@a/css/main.css"
import type { ShowSwitchAnimation } from "./type/ShowSwitchAnimation"

// 设置图标
const icon = document.createElement("link")
icon.setAttribute("rel", "icon")
icon.setAttribute("type", "image/x-icon")
icon.setAttribute("href", iconUrl)
document.head.appendChild(icon)

const app = createApp(App)
app.provide<ShowSwitchAnimation>("ShowSwitchAnimation", {})
app.use(router)
app.mount('body')