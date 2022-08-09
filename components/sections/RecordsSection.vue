<template>
  <div id="records-section" class="section">
    <div class="container">
      <div class="record-item">
        <h3 class="text-white text-center mb-0">{{ point1Header }}</h3>
        <p class="text-white text-center mt-0">{{ point1Description }}</p>
      </div>

      <div class="record-item">
        <h3 class="text-white text-center mb-0">{{ point2Header }}</h3>
        <p class="text-white text-center mt-0">{{ point2Description }}</p>
      </div>

      <div class="record-item">
        <h3 class="text-white text-center mb-0">{{ point3Header }}</h3>
        <p class="text-white text-center mt-0">{{ point3Description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordsSection',
  props: {
    point1Header: String,
    point1Description: String,
    point2Header: String,
    point2Description: String,
    point3Header: String,
    point3Description: String
  }
}
</script>

<style lang="sass">
@import '../../assets/styles/global.sass'

#records-section
  background-image: url(../../assets/images/background/bg-darren-nunis.png)
  background-size: 100%
  .container
    display: flex
    padding-top: 120px
    padding-bottom: 120px
    .record-item
      flex: 1
      h3
        font-family: $font-family-header
        font-size: 50px
      p
        font-family: $font-family-default
        font-size: 20px
</style>

