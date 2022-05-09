<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>

    <div>
      <div :key="i" v-for="(option, i) in options">
        <h4>{{ option.label }}</h4>
        <input
          type="checkbox"
          :id="option.id"
          :name="option.id"
          :value="option.value"
          v-model="checkbox_answers"
          @change="onValueChange"
        />
      </div>
    </div>

    <ErrorMessages
      :vuelidateInstance="vuelidateInstance"
      :objectKey="objectKey"
    />
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  components: {
    ErrorMessages: () => import("../ErrorMessages.vue")
  },
  data() {
    return {
      checkbox_answers: []
    }
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
    onValueChange() {
      // const value = this.options[e.target.value].value;
      this.$emit("onFormFieldValueChange", {
        objectKey: this.objectKey,
        value: this.checkbox_answers
      })
    }
  }
}
</script>