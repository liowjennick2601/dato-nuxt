<template>
  <div>
    <h1>Login Screen</h1>

    <div>
      <DynamicFormGenerator
        :schema="schema"
        :formValues="loginForm"
        :vuelidateInstance="$v.loginForm"
        @onFormFieldValueChange="onFormFieldValueChange"
      />
    </div>

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

      if (cmsSchemaData.fields) {
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

          // NESTED
          // check if component is multiform
          if (fieldObject.component === "MultiForm" && fieldObject.config.fields.length > 0) {
            for (let nestedIndex = 0; nestedIndex < fieldObject.config.fields.length; nestedIndex++) {
              const nestedFieldObject = fieldObject.config.fields[nestedIndex];
              if (nestedFieldObject.config && nestedFieldObject.config.optionsAPI) {
                const nestedOptionsResponse = await API.formDynamicOptions(nestedFieldObject.config.optionsAPI.url);
                const nestedOptionsData = nestedOptionsResponse.data.data;

                const nestedFormattedOptionsArray = [];
                nestedOptionsData.map((option, i) => {
                  const optionsObject = {
                    label: option[nestedFieldObject.config.optionsAPI.labelKey],
                    value: option[nestedFieldObject.config.optionsAPI.valueKey]
                  };
                  nestedFormattedOptionsArray.push(optionsObject);
                });

                nestedFieldObject.fields[nestedIndex].config.options = nestedFormattedOptionsArray;
                console.log(nestedFormattedOptionsArray)
              };
            };
          }
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