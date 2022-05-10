<template>
  <div>
    <div :key="i" v-for="(form, i) in value">
      <DynamicFormGenerator
        :schema="config"
        :formValues="value[i]"
        :vuelidateInstance="vuelidateInstance[i]"
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
    "value"
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

      this.value.push(dataStructureObject);

      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: this.value
      })
    }
  }
}
</script>