<template>
  <b-container>
    <formWrapper :validator="$v.form">
      <form>
        <b-row>
          <b-col cols="12" class="text-sm-center">
            <h4 class="order__text">{{ $t("heading.administrator_data") }}</h4>
          </b-col>

          <b-col cols="12" md="6">
            <form-group
              name="Responsible_name"
              :attribute="`input.Responsible_name`"
            >
              <template slot-scope="{ attrs, listeners }">
                <b-form-input
                  v-bind="attrs"
                  v-on="listeners"
                  v-model="form.Responsible_name"
                ></b-form-input>
              </template>
            </form-group>
          </b-col>
          <b-col cols="12" sm="6">
            <form-group name="position" :attribute="`input.position`">
              <template slot-scope="{ attrs, listeners }">
                <b-form-input
                  v-bind="attrs"
                  v-on="listeners"
                  v-model="form.position"
                ></b-form-input>
              </template>
            </form-group>
          </b-col>
          <b-col cols="12">
            <b-row>
              <b-col cols="12" md="2" sm="6" class="mt-4">
                <multiselect
                  selectLabel="''"
                  deselectLabel="''"
                  :resetAfter="false"
                  class="order__code"
                  :placeholder="$t('input.code')"
                  v-model="form.code"
                  :options="options"
                >
                  <template slot="singleLabel" slot-scope="{ option }">
                    <div>
                      {{ option.value }}
                      <img
                        width="20"
                        :src="require(`@/assets/imgs/${option.flag}`)"
                      />
                    </div>
                  </template>
                  <template slot="option" slot-scope="{ option }">
                    <div>
                      {{ option.value }}
                      <img
                        width="20"
                        :src="require(`@/assets/imgs/${option.flag}`)"
                      />
                    </div>
                  </template>
                </multiselect>
              </b-col>
              <b-col cols="12" md="4">
                <form-group name="phone" :attribute="`input.phone`">
                  <template slot-scope="{ attrs, listeners }">
                    <b-form-input
                      v-bind="attrs"
                      v-on="listeners"
                      v-model="form.phone"
                    ></b-form-input>
                  </template>
                </form-group>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="6">
            <form-group
              name="contact_person_name"
              :attribute="`input.contact_person_name`"
            >
              <template slot-scope="{ attrs, listeners }">
                <b-form-input
                  v-bind="attrs"
                  v-on="listeners"
                  v-model="form.contact_person_name"
                ></b-form-input>
              </template>
            </form-group>
          </b-col>
          <b-col cols="12" md="6">
            <form-group
              name="contact_person_position"
              :attribute="`input.contact_person_position`"
            >
              <template slot-scope="{ attrs, listeners }">
                <b-form-input
                  v-bind="attrs"
                  v-on="listeners"
                  v-model="form.contact_person_position"
                ></b-form-input>
              </template>
            </form-group>
          </b-col>
          <b-col cols="12">
            <b-row>
              <b-col cols="12" sm="6">
                <b-row>
                  <b-col cols="12" md="4" sm="6" class="mt-4">
                    <multiselect
                      selectLabel="''"
                      deselectLabel="''"
                      class="order__code"
                      :placeholder="$t('input.code')"
                      v-model="form.contact_person_code"
                      :options="options"
                    >
                      <template slot="singleLabel" slot-scope="{ option }">
                        <div>
                          {{ option.value }}
                          <img
                            width="20"
                            :src="require(`@/assets/imgs/${option.flag}`)"
                          />
                        </div>
                      </template>
                      <template slot="option" slot-scope="{ option }">
                        <div>
                          {{ option.value }}
                          <img
                            width="20"
                            :src="require(`@/assets/imgs/${option.flag}`)"
                          />
                        </div>
                      </template>
                    </multiselect>
                  </b-col>
                  <b-col cols="12" md="8">
                    <form-group
                      name="contact_person_phone"
                      :attribute="`input.contact_person_phone`"
                    >
                      <template slot-scope="{ attrs, listeners }">
                        <b-form-input
                          v-bind="attrs"
                          v-on="listeners"
                          v-model="form.contact_person_phone"
                        ></b-form-input>
                      </template>
                    </form-group>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" md="6">
                <form-group name="email" :attribute="`input.email`">
                  <template slot-scope="{ attrs, listeners }">
                    <b-form-input
                      v-bind="attrs"
                      v-on="listeners"
                      v-model="form.email"
                    ></b-form-input>
                  </template>
                </form-group>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12">
            <form-group name="notes" :attribute="`input.notes`">
              <template slot-scope="{ attrs, listeners }">
                <b-textarea
                  v-bind="attrs"
                  v-on="listeners"
                  rows="5"
                  no-resize
                  v-model="form.notes"
                ></b-textarea>
              </template>
            </form-group>
          </b-col>
          <b-col cols="12" class="mt-5">
            <b-btn
              :disabled="$v.form.$invalid"
              block
              variant="default"
              class="order__button"
              >{{ $t("button.make_order") }}</b-btn
            >
          </b-col>
        </b-row>
      </form>
    </formWrapper>
  </b-container>
</template>

<script>
import { required, email, numeric, minLength } from "vuelidate/lib/validators";
export default {
  name: "SecondOrder",
  data() {
    return {
      form: {
        Responsible_name: "",
        position: "",
        phone: "",
        code: "",
        contact_person_name: "",
        contact_person_position: "",
        contact_person_phone: "",
        contact_person_code: "",
        email: "",
        notes: ""
      },

      options: [
        {
          flag: "sudi-flag.jpg",
          value: "+966"
        },
        {
          flag: "eg-flag.png",
          value: "+2"
        }
      ],
      packagesOptions: ["50", "20", "10"]
    };
  },
  validations: {
    form: {
      Responsible_name: {
        required
      },
      position: {
        required
      },
      phone: {
        numeric
      },
      contact_person_phone: {
        numeric
      },
      contact_person_name: {
        required
      },
      contact_person_position: {
        required
      },
      email: {
        required,
        email
      },
      notes: {
        minLength: minLength(50)
      }
    }
  }
};
</script>
