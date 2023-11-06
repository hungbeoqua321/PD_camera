import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { antd } from './plugins/antdv.ts';
import { registerGlobalComponent } from './utils/index.ts';
import App from './App.vue';
import router from './router/index.ts';

import './assets/styles/main.scss';
import './assets/styles/tailwind.css';

const pinia = createPinia();
const app = createApp(App);
registerGlobalComponent(app);

app.use(antd).use(pinia).use(router);

(async () => {
  await router.isReady();
})();
app.mount('#app');
