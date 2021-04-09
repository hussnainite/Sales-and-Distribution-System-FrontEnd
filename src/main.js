import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

import store from "./store";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
