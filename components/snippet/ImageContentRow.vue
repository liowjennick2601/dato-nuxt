<template>
  <div class="image-content-row" :class="{ 'reverse': reverse }">
    <div class="image-container">
      <slot name="image" />
    </div>

    <div class="content-container">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageContent',
  props: {
    reverse: Boolean
  }
}
</script>

<style lang="sass">
@import '../../assets/styles/global.sass'

.image-content-row
  display: flex
  align-items: center
  .image-container
    flex: 1
    img
      width: 90%
      display: block
      margin: 0 auto
  .content-container
    flex: 1
    padding-left: 20px
  &.reverse
    flex-direction: row-reverse
    .content-container
      padding-left: 0
      padding-right: 20px
</style>