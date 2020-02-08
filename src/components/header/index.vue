<template>
  <div>
    <nav class="navbar navbar-light ">
      <ul class="nav nav-pills mr-auto">
        <v-select
          :dir="handleDir"
          v-model="getLang"
          :options="langauges"
          :searchable="false"
          @input="changeLocale"
        ></v-select>
      </ul>
    </nav>
  </div>
</template>

<script>
import cookie from "js-cookie";
export default {
  name: "Header",
  data() {
    return {
      locale: "",
      langauges: [
        { label: "العربية", code: "ar" },
        { label: "English", code: "en" }
      ]
    };
  },
  methods: {
    changeLocale({ code }) {
      cookie.set("language", code);
      window.location.reload();
    }
  },
  computed: {
    handleDir() {
      if (cookie.get("language") === "ar") {
        return "rtl";
      } else {
        return "";
      }
    },

    getLang: {
      get() {
        if (cookie.get("language") === "ar") {
          return "العربيه";
        } else {
          return "English";
        }
      },
      set(value) {
        this.locale = value.code;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
