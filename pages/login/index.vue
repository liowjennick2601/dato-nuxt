<template>
  <div>
    <h1>Login Screen</h1>

    <div>
      <DynamicFormGenerator
        :schema="schema"
        :formValues="formValues"
        :vuelidateInstance="$v.formValues"
        @onFormFieldValueChange="onFormFieldValueChange"
      />
    </div>

    <p>{{ formValues }}</p>
  </div>
</template>

<script>
import { generateFormSchema, initialiseVuelidateValidationObject } from "../../utils/form/DynamicForm";

export default {
  name: "Login",
  components: {
    DynamicFormGenerator: () => import("../../components/form/DynamicFormGenerator.vue")
  },
  watch: {
    formValues: {
      handler(form) {
        // cross check login form value with schema fields dependant value
        this.schema.fields.forEach(field => {
          if (field.validations) {
            if (field.validations.dependants) {
              field.validations.dependants.forEach(dependant => {
                if (form[dependant.objectKey] === dependant.ifDependantValueEquals) {
                  form[field.objectKey] = dependant.setFieldValue
                };

                if (form[dependant.objectKey] > dependant.ifDependantValueIsMoreThan) {
                  form[field.objectKey] = dependant.setFieldValue
                };

                if (form[dependant.objectKey] < dependant.ifDependantValueIsLessThan) {
                  form[field.objectKey] = dependant.setFieldValue
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
      const formData = await generateFormSchema("login_form", locale, $graphql);

      return ({
        schema: formData.schema,
        formValues: formData.formValues
      })
    } catch(err) {
      console.log(err);
    };
  },
  validations() {
    const validationObject = initialiseVuelidateValidationObject(this.schema);

    return {
      formValues: validationObject
    };
  },
  methods: {
    onFormFieldValueChange(e) {
      this.formValues[e.objectKey] = e.value;
    }
  }
}
</script>