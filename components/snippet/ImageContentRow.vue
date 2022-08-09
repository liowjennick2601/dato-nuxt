<template>
  <div class="image-content-row">
    <div class="image-container">
      <img src="../../assets/images/stock-images/family-inside-car.png" />
    </div>

    <div class="content-container">
      <!-- <slot name="content"></slot> -->
      <h2 class="section-header mb-0">Always protecting you <span class="text-blue">on-the-go</span></h2>
      <p>We are a homegrown insurer that empathizes better with the needs of our customers and business partners and we've been around the block ar couple of times.</p>
      <div class="button-container mt-4">
        <NuxtLink class="blue-button-filled" to="/">
          More about Motor Insurance
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
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
</style>