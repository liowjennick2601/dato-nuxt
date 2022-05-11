<template>
  <div>
    <div :key="i" v-for="(form, i) in vuelidateInstance[objectKey].$each.$iter">
      <DynamicFormGenerator
        :schema="config"
        :formValues="value[i]"
        :vuelidateInstance="vuelidateInstance[objectKey].$each[i]"
        @onFormFieldValueChange="onFormFieldValueChange"
      />
    </div>

    <p>{{ vuelidateInstance }}</p>

    <div @click="addForm">Add Button</div>
  </div>
</template>

<script>
import { API } from "../../../api/axios";

export default {
  name: "MultiForm",
  props: [
    "config",
    "vuelidateInstance",
    "value",
    "objectKey"
  ],
  components: {
    DynamicFormGenerator: () => import("../DynamicFormGenerator.vue")
  },
  methods: {
    addForm() {
      const dataStructureObject = {};
      this.config.fields.map((field) => {
        dataStructureObject[field.objectKey] = field.initialValue;
      });

      const newValue = this.value;
      newValue.push(dataStructureObject);

      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: newValue
      })
    },
    onFormFieldValueChange() {

    }
  }
}
</script>