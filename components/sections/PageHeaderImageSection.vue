<template>
  <div class="banner" v-if="imageSource">
    <img :src="imageSource" />
    <h2 v-if="title" class="section-header mb-0 mt-0">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'PageHeaderImageSection',
  props: {
    imageSource: String,
    title: String
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/global.sass'

.banner
  max-width: 2000px
  display: block
  margin: 0 auto
  position: relative
  img
    width: 100%
  h2
    position: absolute
    top: 40%
    left: 50%
    transform: translateX(-50%)
</style>