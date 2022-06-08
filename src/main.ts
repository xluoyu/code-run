import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'virtual:windi.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/main.css'
import i18 from './utils/i18'

const app = createApp(App)

app.use(router as any)
app.use(i18 as any)
app.mount('#app')
