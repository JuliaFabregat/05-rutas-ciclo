import { createApp } from 'vue'
import App from './App.vue'
// Importamos el router que hemos creado
import router from '@/router/router';

// Aquí se monta la aplicación de Vue y se le indica que use el router
createApp(App)
    .use(router)
    .mount('#app')
