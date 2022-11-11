import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "@/App.vue";
import { router } from "@/routes";

import "@/assets/icomoon/style.css";
import "@/assets/bootstrap.scss";
import "@/assets/app.scss";

const app = createApp(App);
app.use(createPinia());
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
