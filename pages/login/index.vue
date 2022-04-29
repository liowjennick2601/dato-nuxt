<template>
  <div>
    <h1>Login Screen</h1>

    <DynamicFormGenerator
      :schema="schema"
      :formValues="loginForm"
      :vuelidateInstance="$v.loginForm"
      @onFormFieldValueChange="onFormFieldValueChange"
    />

    <p>{{ loginForm }}</p>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";
import { initialiseVuelidateValidationObject } from "../../utils/vuelidateValidations";

const FORM_SCHEMA_QUERY = gql`
  query formSchemaQuery($locale: SiteLocale) {
    form(locale: $locale, filter: {slug: {eq: "login_form"}}) {
      schema
    }
  }
`

export default {
  name: "Login",
  components: {
    DynamicFormGenerator: () => import("../../components/form/DynamicFormGenerator.vue")
  },
  watch: {
    loginForm: {
      handler(form) {
        // cross check login form value with schema fields dependant value
        this.schema.fields.forEach(field => {
          if (field.validations.dependants) {
            field.validations.dependants.forEach(dependant => {
              if (form[dependant.objectKey] === dependant.ifDependantValueEquals) {
                this.loginForm[field.objectKey] = dependant.setFieldValue
              };

              if (form[dependant.objectKey] > dependant.ifDependantValueIsMoreThan) {
                this.loginForm[field.objectKey] = dependant.setFieldValue
              };

              if (form[dependant.objectKey] < dependant.ifDependantValueIsLessThan) {
                this.loginForm[field.objectKey] = dependant.setFieldValue
              };
            });
          };
        })
      },
      deep: true
    }
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
    cmsSchemaData.fields.forEach(field => {
      loginForm[field.objectKey] = field.initialValue
    });

    return ({
      schema: cmsSchemaData,
      loginForm: loginForm
    })
  },
  validations() {
    const validationObject = initialiseVuelidateValidationObject(this.schema);

    return {
      loginForm: validationObject
    };
  },
  methods: {
    onFormFieldValueChange(e) {
      this.loginForm[e.objectKey] = e.value;
    }
  }
}
</script>