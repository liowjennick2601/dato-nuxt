<template>
  <div class="card">
    <div class="top-content mb-4">
      <img v-if="imageSource" class="mb-1" :src="imageSource" />
      <p v-if="title" class="text-bold text-size-regular">{{ title }}</p>
      <p v-if="description" class="mt-4">{{ description }}</p>
    </div>
    <div class="content-row">
      <p class="text-header text-semi-bold text-blue pr-2">{{ ctaText }}</p>
      <font-awesome-icon v-if="icon" class="text-blue" :icon="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    imageSource: String,
    title: String,
    description: String,
    ctaText: String,
    icon: String
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/global.sass'

.card
  border: 1px solid #DDDEDF
  border-radius: 5px
  padding: 25px
  flex: 0 1 24%
  cursor: pointer
  display: flex
  flex-direction: column
  margin-bottom: 2 * $spacing-units
  &:nth-child(4n + 2)
    margin-left: 1.5%
    margin-right: 0.5%
  &:nth-child(4n + 3)
    margin-left: 0.5%
    margin-right: 1.5%
  &:hover
    box-shadow: 0px 1px 10px 1px rgb(46 61 73 / 20%) !important
  .top-content
    flex: 1
  .content-row
    display: flex
    align-items: center
</style>