import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/input.css'
import '../dist/output.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
