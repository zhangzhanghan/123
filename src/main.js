// src/main.js  改文件格式化被忽略
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

const app =       createApp(App)
app.use(router)
app.mount("#app")
