import { createApp } from 'vue'
import './style.css'
import  '@idscan/idvc2/dist/css/idvc.css'
import App from './App.vue'

const app = createApp(App);

// app.use(createTooltipPlugin());
app.mount('#app');
