import Vue from "vue";
import App from "./App.vue";
import i18n from "./lang";
import "./bootstrap";
Vue.config.productionTip = false;
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Cookies from "js-cookie";
Vue.use(BootstrapVue);

new Vue({
  i18n,
  created() {
    if (!Cookies.get("language")) {
      Cookies.set("language", "ar");
    }
  },
  render: h => h(App)
}).$mount("#app");
