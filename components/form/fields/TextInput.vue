<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <input
      v-model="value"
      :type="formType"
      @change="onValueChange"
      @blur="vuelidateInstance[objectKey].$touch"
    />

    <ErrorMessages
      :vuelidateInstance="vuelidateInstance"
      :objectKey="objectKey"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  components: {
    ErrorMessages: () => import("../ErrorMessages.vue")
  },
  props: [
    "title",
    "subtitle",
    "formType",
    "objectKey",
    "value",
    "vuelidateInstance"
  ],
  watch: {
    value(newValue, oldValue) {
      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: newValue
      });
    },
  },
  methods: {
    onValueChange(e) {
      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: e.target.value
      });
    }
  }
}
</script>
