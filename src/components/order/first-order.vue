<template>
  <b-container>
    <formWrapper :validator="$v.form">
      <form>
        <b-row>
          <b-col cols="12" class="text-sm-center">
            <h1 class=" mb-5 order__title">
              {{ $t("heading.order") }}
            </h1>
            <h4 class="order__text">{{ $t("header.organise_data") }}</h4>
          </b-col>
          <template v-for="(formKey, index) in formKeys">
            <template v-if="formKey !== 'package'">
              <b-col cols="12" md="6" :key="index">
                <form-group :name="formKey" :attribute="`input.${formKey}`">
                  <template slot-scope="{ attrs, listeners }">
                    <b-form-input
                      v-bind="attrs"
                      v-on="listeners"
                      v-model="form[formKey]"
                    ></b-form-input>
                  </template>
                </form-group>
              </b-col>
            </template>
          </template>
          <b-col cols="12" class="text-sm-center my-2">
            <h4 class="order__text">{{ $t("heading.wanted_package") }}</h4>
          </b-col>
          <b-col cols="12" md="6">
            <form-group name="package">
              <template slot-scope="{ attrs, listeners }">
                <v-select
                  v-bind="attrs"
                  v-on="listeners"
                  v-model="form.package"
                  :options="packagesOptions"
                ></v-select>
              </template>
            </form-group>
          </b-col>
          <b-col cols="12" class="mt-3">
            <b-btn
              @click="$emit('next_form')"
              :disabled="$v.form.$invalid"
              block
              variant="default"
              class="order__button"
              >{{ $t("button.next") }}</b-btn
            >
          </b-col>
        </b-row>
      </form>
    </formWrapper>
  </b-container>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "FirstOrder",
  data() {
    return {
      form: {
        organize_name: "",
        organize_activity: "",
        place: "",
        country: "",
        package: []
      },
      packagesOptions: ["50", "20", "10"]
    };
  },
  computed: {
    formKeys() {
      return Object.keys(this.form);
    }
  },
  validations: {
    form: {
      organize_name: {
        required
      },
      organize_activity: {
        required
      },
      package: {
        required
      },
      place: {
        minLength: minLength(3)
      },
      country: {
        minLength: minLength(3)
      }
    }
  }
};
</script>
