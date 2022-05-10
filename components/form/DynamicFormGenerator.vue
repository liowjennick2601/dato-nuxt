<template>
  <div>
    <div v-for="(field, i) in schema.fields" :key="i">
      <component
        v-if="checkShowFormCondition(field, formValues)"
        :is="field.component"
        :title="field.name"
        :objectKey="field.objectKey"
        :value="formValues[field.objectKey]"
        :vuelidateInstance="vuelidateInstance"
        :config="field.config"
        @onFormFieldValueChange="onFormFieldValueChange"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "DynamicFormGenerator",
    props: [
      "schema",
      "formValues",
      "vuelidateInstance"
    ],
    components: {
      TextInput: () => import("./fields/TextInput.vue"),
      SelectInput: () => import("./fields/SelectInput.vue"),
      Checkbox: () => import("./fields/Checkbox.vue"),
      RadioInput: () => import("./fields/RadioInput.vue"),
      SliderInput: () => import("./fields/SliderInput.vue"),
      FileUpload: () => import("./fields/FileUpload.vue")
    },
    methods: {
      onFormFieldValueChange(e) {
        this.$emit("onFormFieldValueChange", {
          objectKey: e.objectKey,
          value: e.value
        })
      },
      checkShowFormCondition(field, formValues) {
        let showForm = false;

        if (field.showIf) {
          const conditionCheckResultsArray = [];

          field.showIf.map(condition => {
            const conditionCheckResult = formValues[condition.objectKey] === condition.equals;
            conditionCheckResultsArray.push(conditionCheckResult);
          });

          showForm = conditionCheckResultsArray.every(result => result === true);
        } else {
          showForm = true;
        };
        return showForm;
      }
    }
  }
</script>
