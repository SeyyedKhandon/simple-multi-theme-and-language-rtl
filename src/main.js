import Vue from "vue";

import App from "./App.vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
const fa = require("./locale/fa.json");
const en = require("./locale/en.json");
const i18n = new VueI18n({
  locale: "en",
  messages: {
    fa,
    en
  }
});
Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
