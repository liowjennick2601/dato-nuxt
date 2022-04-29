<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <select
      :value="value"
      @change="onValueChange"
      @blur="vuelidateInstance[objectKey].$touch"
    >
      <option :key="i" v-for="(option, i) in options" :value="i">{{ option.label }}</option>
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
      // cross check e.target.value (this is the index from the select input) with the list of options
      // this is done because select input cannot return integer
      const value = this.options[e.target.value].value;
      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: value
      })
    }
  }
}
</script>