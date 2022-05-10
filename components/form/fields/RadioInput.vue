<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>

    <div>
      <div :key="i" v-for="(option, i) in config.options">
        <h4>{{ option.label }}</h4>
        <input
          type="radio"
          :id="option.id"
          :name="objectKey"
          :value="option.value"
          @change="onValueChange"
        />
      </div>
      <ErrorMessages
        :vuelidateInstance="vuelidateInstance"
        :objectKey="objectKey"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  components: {
    ErrorMessages: () => import("../ErrorMessages.vue")
  },
  props: [
    "title",
    "subtitle",
    "objectKey",
    "config",
    "value",
    "vuelidateInstance"
  ],
  methods: {
    onValueChange(e) {
      // const value = this.config.options[e.target.value].value;
      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: e.target.value
      })
    }
  }
}
</script>
