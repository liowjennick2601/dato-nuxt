<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>

    <div>
      <input
        type="file"
        :id="objectKey"
        :name="objectKey"
        :accept="config.acceptedFileType"
        @change="onValueChange"
      />
    </div>

    <ErrorMessages
      :vuelidateInstance="vuelidateInstance"
      :objectKey="objectKey"
    />
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  components: {
    ErrorMessages: () => import("../ErrorMessages.vue")
  },
  props: [
    "title",
    "subtitle",
    "objectKey",
    "value",
    "vuelidateInstance",
    "config"
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