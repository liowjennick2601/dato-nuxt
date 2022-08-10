<template>
  <div id="learn-more-section" class="section">
    <div class="container">
      <div class="left-container">
        <img src="../../assets/images/icons/shield.png" />
        <p>ECICS Insurance is regulated by the Monetary Authority of Singapore (MAS)</p>
      </div>

      <div class="right-container">
        <NuxtLink to="/">
          Learn More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBannerSection'
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/global.sass'

#learn-more-section
  background-color: $primary-blue
  color: white
  padding-top: 20px
  padding-bottom: 20px
  .container
    display: flex
    align-items: center
    .left-container
      display: flex
      flex: 1
      align-items: center
      img
        padding-right: 20px
    .right-container
      a
        font-family: $font-family-default
        font-weight: 900
</style>