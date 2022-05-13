<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <select
      v-model="vuelidateInstance[objectKey].$model"
      @blur="vuelidateInstance[objectKey].$touch"
    >
      <option :key="i" v-for="(option, i) in config.options" :value="option.value">{{ option.label }}</option>
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
  data() {
    return {
      currentSelectionValue: this.value
    }
  },
  props: [
    "title",
    "subtitle",
    "objectKey",
    "config",
    "value",
    "vuelidateInstance"
  ]
}
</script>