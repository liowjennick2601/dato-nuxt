<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <input
      :value="value"
      :type="formType"
      @change="onValueChange"
      @blur="vuelidateInstance[objectKey].$touch"
    />

    <div v-if="vuelidateInstance[objectKey]">
      <p v-if="!vuelidateInstance[objectKey].required && vuelidateInstance[objectKey].$error">Error message here</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: [
    "title",
    "subtitle",
    "formType",
    "objectKey",
    "value",
    "vuelidateInstance"
  ],
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
