<template>
  <div id="corporate-governance">
    <PageHeaderImageSection
      :imageSource="require('../../assets/images/stock-images/corporate-governance-page-header.png')"
      title="Corporate Governance"
    />

    <div class="section container">
      <ImageContentRow>
        <template v-slot:image>
          <img src="../../assets/images/stock-images/family-inside-car.png" />
        </template>

        <template v-slot:content>
          <h2 class="section-header mb-2">Our <span class="text-blue">corporate objectives</span></h2>
          <p>We are a homegrown insurer that empathizes better with the needs of our customers and business partners and we've been around the block ar couple of times.</p>
          <div class="button-container mt-4">
            <NuxtLink class="blue-button-filled" to="/">
              More about Motor Insurance
            </NuxtLink>
          </div>
        </template>
      </ImageContentRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CorporateGovernancePage',
  components: {
    PageHeaderImageSection: () => import("../../components/sections/PageHeaderImageSection.vue"),
    ContactUsSection: () => import("../../components/sections/ContactUsSection.vue"),
    FooterBannerSection: () => import("../../components/sections/FooterBannerSection.vue"),
    Card: () => import("../../components/snippet/Card.vue"),
    ImageContentRow: () => import("../../components/snippet/ImageContentRow.vue"),
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/global.sass'
</style>