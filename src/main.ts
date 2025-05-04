import { createApp, ref } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import "@a/css/main.css"
import type { ShowSwitchAnimation } from "./type/ShowSwitchAnimation"

const app = createApp(App)
app.provide<ShowSwitchAnimation>("ShowSwitchAnimation", {})
app.use(router)
app.mount('body')