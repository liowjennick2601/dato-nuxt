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
import { API } from "../../api/axios";

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
          if (field.validations) {
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
          };
        })
      },
      deep: true
    }
  },
  async asyncData({ $graphql, params, store, app }) {
    try {
      const locale = app.$cookies.get("dato-locale");
      const variables = {
        locale
      };
      let cmsQuery = await $graphql.default.request(FORM_SCHEMA_QUERY, variables);
      let cmsSchemaData = cmsQuery.form.schema;

      // populate initial form value
      const loginForm = {};
      const cmsSchemaObject = {
        ...cmsSchemaData
      };

      for (let index = 0; index < cmsSchemaData.fields.length; index++) {
        const fieldObject = cmsSchemaData.fields[index];
        loginForm[fieldObject.objectKey] = fieldObject.initialValue;

        // if option field has an api call
        if (fieldObject.config && fieldObject.config.optionsAPI) {
          const optionsResponse = await API.formDynamicOptions(fieldObject.config.optionsAPI.url);
          const optionsData = optionsResponse.data.data;

          const formattedOptionsArray = [];
          optionsData.map((option, i) => {
            const optionsObject = {
              label: option[fieldObject.config.optionsAPI.labelKey],
              value: option[fieldObject.config.optionsAPI.valueKey]
            };
            formattedOptionsArray.push(optionsObject);
          });

          cmsSchemaObject.fields[index].config.options = formattedOptionsArray;
        };
      };

      return ({
        schema: cmsSchemaObject,
        loginForm: loginForm
      })
    } catch(err) {
      console.log(err);
    };
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