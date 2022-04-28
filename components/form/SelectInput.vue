<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <select :value="value" @change="onValueChange">
      <option :key="i" v-for="(option, i) in options" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: [
    "title",
    "subtitle",
    "objectKey",
    "options",
    "value"
  ],
  methods: {
    onValueChange(e) {
      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: e.target.value
      })
    }
  }
}
</script>