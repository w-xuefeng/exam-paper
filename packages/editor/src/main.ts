import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import pinia from "./stores";

import "./style.less";

createApp(App).use(router).use(pinia).mount("#app");
