<template>
  <div id="financial-information">
    <PageHeaderImageSection
      :imageSource="require('../../assets/images/stock-images/financial-information-page-header.png')"
      title="Financial Information"
    />

    <div id="annual-report-section" class="section">
      <div class="container">
        <h3 class="section-header text-header mb-3">Annual Report</h3>

        <div class="card-container">
          <template v-for="i in 7">
            <Card
              :key="i"
              :imageSource="require('../../assets/images/icons/pdf-icon.png')"
              title="Financial for Year 2021"
              ctaText="Read More"
              icon="arrow-right"
            />
          </template>
        </div>
      </div>
    </div>

    <ContactUsSection />
    <FooterBannerSection />
  </div>
</template>

<script>
export default {
  name: "FinancialInformationPage",
  components: {
    PageHeaderImageSection: () => import("../../components/sections/PageHeaderImageSection.vue"),
    ContactUsSection: () => import("../../components/sections/ContactUsSection.vue"),
    FooterBannerSection: () => import("../../components/sections/FooterBannerSection.vue"),
    Card: () => import("../../components/snippet/Card")
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/global.sass'

.card-container
  display: flex
  flex-wrap: wrap
  width: 100%
</style>