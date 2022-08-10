<template>
  <div class="product-card">
    <div class="top-container">
      <img :src="imageSource">
      <h4 class="text-center">{{ title }}</h4>
      <p class="text-center mb-4">{{ description }}</p>
    </div>
    <div class="cta-button-container" v-if="link && buttonText">
      <NuxtLink :to="link" class="cta-button-blue">
        {{ buttonText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
    title: String,
    description: String,
    link: String,
    buttonText: String
  }
}
</script>

<style lang="sass">
@import '../../assets/styles/global.sass'

.product-card
  border: 2px solid $primary-blue
  padding: $spacing-units * 4
  border-radius: 6px
  width: 70%
  box-shadow: 0px 1px 10px 1px rgb(46 61 73 / 20%) !important
  display: flex
  flex-direction: column
  .top-container
    flex: 1
    img
      display: block
      margin: 0 auto
      max-width: 40%
    h4
      font-family: $font-family-header
      margin-bottom: $spacing-units * 1
      margin-top: $spacing-units * 2
      font-size: 26px
      font-weight: 900
    p
      font-family: $font-family-default
      margin-top: $spacing-units * 0
      font-size: 18px
      color: #3E3E3E
  .cta-button-container
    display: flex
    justify-content: center
    .cta-button-blue
      color: white
      background-color: $primary-blue
      padding: 10px 20px
      border-radius: 4px
      font-weight: 900
    a
      font-family: $font-family-default
</style>