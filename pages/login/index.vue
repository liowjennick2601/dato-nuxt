<template>
  <div>
    <h1>Login Screen</h1>

    <div v-for="(field, i) in schema.fields" :key="i">
      <component
        :is="field.component"
        :title="field.name"
        :formType="field.formType"
        :objectKey="field.objectKey"
        :options="field.options"
        :value="loginForm[field.objectKey]"
        @onFormFieldValueChange="onFormFieldValueChange"
        :vuelidateInstance="$v"
      />
    </div>

    <p>{{ loginForm }}</p>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";
import { required } from "vuelidate/lib/validators";

const FORM_SCHEMA_QUERY = gql`
  query formSchemaQuery($locale: SiteLocale) {
    form(locale: $locale) {
      schema
    }
  }
`

export default {
  name: "Login",
  components: {
    TextInput: () => import("../../components/form/TextInput.vue"),
    SelectInput: () => import("../../components/form/SelectInput.vue")
  },
  async asyncData({ $graphql, params, store, app }) {
    const locale = app.$cookies.get("dato-locale");
    const variables = {
      locale
    };
    const cmsQuery = await $graphql.default.request(FORM_SCHEMA_QUERY, variables);
    const cmsSchemaData = cmsQuery.form.schema;

    // populate initial form value
    const loginForm = {};
    cmsSchemaData.fields.map(field => {
      loginForm[field.objectKey] = field.initialValue
    });

    return ({
      schema: cmsSchemaData,
      loginForm: loginForm
    })
  },
  validations() {
    // create validation object
    const validationObject = {};
    this.schema.fields.map(field => {
      validationObject[field.objectKey] = {};

      if (field.validations.required) {
        validationObject[field.objectKey] = {
          required
        }
      }
    })

    return validationObject;
  },
  // data() {
  //   return {
  //     schema: {},
  //     loginForm: {}
  //   }
  // },
  methods: {
    onFormFieldValueChange(e) {
      this.loginForm[e.objectKey] = e.value;
    }
  }
}
</script>