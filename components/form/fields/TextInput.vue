<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <input
      v-model="vuelidateInstance[objectKey].$model"
      :type="config.formType"
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
    "objectKey",
    "value",
    "config",
    "vuelidateInstance",
  ],
  watch: {
    // value(newValue, oldValue) {
    //   this.$emit("onFormFieldValueChange", {
    //     objectKey: this.objectKey,
    //     value: newValue
    //   });
    // },
  },
  methods: {
    onValueChange(e) {
      // const eventObject = {
      //   objectKey: this.objectKey,
      //   value: e.target.value
      // };

      // this.$emit("onFormFieldValueChange", 
      //   eventObject
      // );
    }
  }
}
</script>
