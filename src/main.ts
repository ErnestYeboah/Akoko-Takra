import "./assets/main.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);

app.mount("#app");

AOS.init({
  duration: 750,
  easing: "ease-out-cubic",
  once: true,
  offset: 60,
  delay: 0,
});
