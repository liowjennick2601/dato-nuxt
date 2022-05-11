<template>
  <div>
    <div v-if="vuelidateInstance[objectKey] && vuelidateInstance[objectKey].$error">
      <p v-if="vuelidateInstance[objectKey].required === false">Error message here</p>
      <p v-if="vuelidateInstance[objectKey].minLength === false">At least {{ vuelidateInstance[objectKey].$params.minLength.min }}</p>
      <p v-if="vuelidateInstance[objectKey].maxLength === false">Can't be more than {{ vuelidateInstance[objectKey].$params.maxLength.max }}</p>
      <p v-if="vuelidateInstance[objectKey].alpha === false">Can only have alphabets.</p>
      <p v-if="vuelidateInstance[objectKey].alphaNum === false">Can only accept alphabets and numbers.</p>
      <p v-if="vuelidateInstance[objectKey].numeric === false">Can only contain numbers.</p>
      <p v-if="vuelidateInstance[objectKey].integer === false">Can only contain integer.</p>
      <p v-if="vuelidateInstance[objectKey].decimal === false">Can only contain decimal.</p>
      <p v-if="vuelidateInstance[objectKey].email === false">Can only contain email.</p>
      <p v-if="vuelidateInstance[objectKey].ipAddress === false">Can only contain ip addresses.</p>
      <p v-if="vuelidateInstance[objectKey].url == false">Can only contain url</p>
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