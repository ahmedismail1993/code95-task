import Vue from "vue";
import Vuelidate from "vuelidate";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import FormGroup from "@/components/FormGroup";
import { messages } from "@/lang";
import "@/assets/scss/app.scss";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import Multiselect from "vue-multiselect";

// register globally

Vue.use(Vuelidate);
Vue.use(vuelidateErrorExtractor, {
  messages,
  i18n: "validation"
});
Vue.component("multiselect", Multiselect);
Vue.component("FormGroup", FormGroup);
Vue.component("vSelect", vSelect);
Vue.component("formWrapper", templates.FormWrapper);
