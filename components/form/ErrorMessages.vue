<template>
  <div>
    <div v-if="vuelidateInstance[objectKey] && vuelidateInstance[objectKey].$error">
      <p v-if="vuelidateInstance[objectKey].required === false">Error message here</p>
      <p v-if="vuelidateInstance[objectKey].minLength === false">At least {{ vuelidateInstance[objectKey].$params.minLength.min }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorMessages",
  props: [
    "vuelidateInstance",
    "objectKey"
  ]
}
</script>