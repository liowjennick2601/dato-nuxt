<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <select
      :value="value"
      @change="onValueChange"
      @blur="vuelidateInstance[objectKey].$touch"
    >
      <option :key="i" v-for="(option, i) in options" :value="option.value">{{ option.label }}</option>
    </select>

    <ErrorMessages
      :vuelidateInstance="vuelidateInstance"
      :objectKey="objectKey"
    />
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  components: {
    ErrorMessages: () => import("../ErrorMessages.vue")
  },
  props: [
    "title",
    "subtitle",
    "objectKey",
    "options",
    "value",
    "vuelidateInstance"
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