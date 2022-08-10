<template>
  <div id="about-us">
    <div class="section container">
      <ImageContentRow>
        <template v-slot:image>
          <img src="../../assets/images/stock-images/digital-insurance-paper.png" />
        </template>

        <template v-slot:content>
          <h5 class="text-yellow section-title mb-2 mt-0">OUR PRODUCTS</h5>
          <h2 class="section-header mb-2">Always protecting you <span class="text-blue">on-the-go</span></h2>
          <p>We are a homegrown insurer that empathizes better with the needs of our customers and business partners and we've been around the block ar couple of times.</p>
        </template>
      </ImageContentRow>
    </div>

    <div class="section container">
      <ImageContentRow :reverse="true">
        <template v-slot:image>
          <img src="../../assets/images/illustrations/insurance-shield-car-house.png" />
        </template>

        <template v-slot:content>
          <p class="mt-0">We are a homegrown insurer that empathizes better with the needs of our customers and business partners and we've been around the block ar couple of times.</p>
        </template>
      </ImageContentRow>
    </div>

    <div class="section container">
      <ImageContentRow>
        <template v-slot:image>
          <img src="../../assets/images/illustrations/marina-bay.png" />
        </template>

        <template v-slot:content>
          <p class="mt-0">We are a homegrown insurer that empathizes better with the needs of our customers and business partners and we've been around the block ar couple of times.</p>
        </template>
      </ImageContentRow>
    </div>

    <div id="milestone-section" class="section">
      <div class="container">
        <ImageContentRow :reverse="true">
          <template v-slot:image>
            <img src="../../assets/images/stock-images/building-grey.png" />
          </template>

          <template v-slot:content>
            <h5 class="text-yellow section-title mb-2 mt-0">OUR PRODUCTS</h5>
            <h2 class="section-header mb-2">Always protecting you <span class="text-blue">on-the-go</span></h2>
            <p>We are a homegrown insurer that empathizes better with the needs of our customers and business partners and we've been around the block ar couple of times.</p>
          </template>
        </ImageContentRow>

        <div class="timeline-container">
          <div class="timeline-item active">
            <div class="timeline-circle active-fill" />
            <div class="timeline-date active"><p>1975</p></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-circle active-hollow" />
            <div class="timeline-date active"><p>1993</p></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-circle" />
            <div class="timeline-date"><p>2013</p></div>
          </div>

          <div class="timeline-item">
            <div class="timeline-circle" />
            <div class="timeline-date"><p>2018</p></div>

            <div class="timeline-circle last" />
            <div class="timeline-date last"><p>2022</p></div>
          </div>
        </div>

      </div>
    </div>

    <div id="why-choose-us-section" class="section">
      <div class="container">
        <h2 class="section-header text-center mt-2 mb-5">Why Choose Us</h2>

        <div class="feature-cards-container">
          <template v-for="i in 3">
            <div :key="i" class="feature-card-container">
              <ProductCard
                :imageSource="require('../../assets/images/icons/icon-car-broke.png')"
                title="Local and Homegrown"
                description="We understand you because we’re neighbours. We also happen to be one of the few homegrown and locally-owned insurers."
              />
            </div>
          </template>
        </div>
      </div>
    </div>

    <div id="corporate-information-section" class="section">
      <div class="container">
        <NuxtLink to="/financial-information" class="item">
          <img src="../../assets/images/background/notes.png">
          <div class="content-row">
            <p class="text-header text-size-regular text-white">Financial Information</p>
            <font-awesome-icon icon="chevron-right" class="text-white text-size-regular" />
          </div>
        </NuxtLink>

        <NuxtLink to="/" class="item">
          <img src="../../assets/images/background/building.png">
          <div class="content-row">
            <p class="text-header text-size-regular text-white">Corporate Governance</p>
            <font-awesome-icon icon="chevron-right" class="text-white text-size-regular" />
          </div>
        </NuxtLink>
      </div>
    </div>

    <ContactUsSection />
    <FooterBannerSection />
  </div>
</template>

<script>
  export default {
    name: 'AboutUsPage',
    components: {
      ImageContentRow: () => import("../../components/snippet/ImageContentRow.vue"),
      ProductCard: () => import("../../components/snippet/ProductCard.vue"),
      ContactUsSection: () => import("../../components/sections/ContactUsSection.vue"),
      FooterBannerSection: () => import("../../components/sections/FooterBannerSection.vue")
    }
  }
</script>

<style lang="sass" scoped>
@import '../../assets/styles/global.sass'

#milestone-section
  background-color: $secondary-blue

.timeline-container
  display: flex
  padding: 20px 40px
  margin-top: 60px
  .timeline-item
    flex: 1
    height: 3px
    background-color: #D9D9D9
    position: relative
    &.active
      background-color: $primary-blue
    .timeline-date
      color: #D9D9D9
      position: absolute
      left: -25px
      top: -40px
      font-weight: 900
      &.active
        color: $primary-blue
      &.last
        right: -5px
        top: -60px
        left: unset
    .timeline-circle
      height: 10px
      width: 10px
      border-radius: 50%
      border: 3px solid #D9D9D9
      background-color: #D9D9D9
      position: absolute
      top: -3.5px
      left: -10px
      &.active-fill
        background-color: $primary-blue
        border: 3px solid $primary-blue
      &.active-hollow
        border: 3px solid $primary-blue
        background-color: white
      &.last
        top: -3.5px
        right: 0px
        left: unset

.feature-cards-container
  display: flex
  .feature-card-container
    display: flex
    justify-content: center
    flex: 1

#corporate-information-section
  .container
    display: flex
    .item
      flex: 1
      position: relative
      cursor: pointer
      &:nth-child(1)
        margin-right: 10px
      &:nth-child(2)
        margin-left: 10px
      img
        width: 100%
      .content-row
        position: absolute
        display: flex
        align-items: center
        left: 20px
        top: 20px
        z-index: 1
        width: calc(100% - 50px)
        p
          flex: 1
          font-weight: 900
</style>
