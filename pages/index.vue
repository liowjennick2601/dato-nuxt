<template>
  <div id="home">
    <div id="intro-section" class="section">
      <div class="container">
        <div class="content-container">
          <h1 class="section-header"><span class="text-blue">Homegrown Insurer</span> Protecting Singapore for over 45 Years</h1>
          <p class="mb-6">When you've been protecting customers and businesses for more than 45 years, you learn a thing or two about what matters. Our insurance products are made to help Singaporeans protect what matters!</p>
          <NuxtLink to="/" class="blue-button-filled">Browse Product</NuxtLink>
        </div>

        <img class="image-container" src="../assets/images/illustrations/car-marina-bay.png" />
      </div>
    </div>

    <div id="product-section" class="section">
      <div class="container">
        <h5 class="text-yellow text-center section-title mb-0">OUR PRODUCTS</h5>
        <h2 class="section-header text-center mt-2 mb-5">We select only the <span class="text-blue">best policies for you.</span></h2>

        <div class="product-cards-container">
          <template v-for="i in 2">
            <div :key="i" class="product-card-container">
              <ProductCard
                :imageSource="require('../assets/images/products/private-car.png')"
                title="Private Car"
                description="Protect your car, passengers, and the planet"
                link="/"
                buttonText="Get Quote"
              />
            </div>
          </template>
        </div>
      </div>
    </div>

    <div id="carousel-section" class="section">
      <div class="carousel-container">

        <img class="left-arrow" @click="previousCarouselItem" src="../assets/images/icons/carousel-left-arrow.png" />
        <img class="right-arrow" @click="nextCarouselItem" src="../assets/images/icons/carousel-right-arrow.png" />

        <div class="carousel-items" :style="{ transform: `translateX(calc(${carouselCurrentIndex} *  -100%))` }">
          <div class="carousel-item" v-for="i in 3" :key="i">
            <div class="container">
              <ImageContentRow>
                <template v-slot:image>
                  <img src="../assets/images/stock-images/family-inside-car.png" />
                </template>

                <template v-slot:content>
                  <h2 class="section-header mb-0">Always protecting you <span class="text-blue">on-the-go</span></h2>
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
          <!-- <div class="carousel-item">
            <div class="container">
              <ImageContentRow />
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <ImageContentRow />
            </div>
          </div> -->
        </div>
      </div>

      <div class="activity-indicator-container mt-4">
        <div class="activity-indicator active" />
        <div class="activity-indicator" />
        <div class="activity-indicator" />
      </div>

    </div>

    <!-- TODO REVIEW SECTION AND CAROUSEL -->

    <RecordsSection
      point1Header="3 days"
      point1Description="Average Claims Disbursement"
      point2Header="1975"
      point2Description="Year of Incorporation"
      point3Header="99%"
      point3Description="Claims Approval Rate"
    />

    <ContactUsSection />
    <FooterBannerSection />

  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

const HOMEPAGE_QUERY = gql`
  query homepageQuery($locale: I18NLocaleCode) {
    homepage(locale: $locale) {
      data {
        attributes {
          title
        }
      }
    }
  }
`

export default {
  name: 'IndexPage',
  components: {
    ProductCard: () => import("../components/snippet/ProductCard.vue"),
    ImageContentRow: () => import("../components/snippet/ImageContentRow.vue"),
    RecordsSection: () => import("../components/sections/RecordsSection.vue"),
    ContactUsSection: () => import("../components/sections/ContactUsSection.vue"),
    FooterBannerSection: () => import("../components/sections/FooterBannerSection.vue")
  },
  data() {
    return {
      cmsContent: null,
      carouselCurrentIndex: 0
    }
  },
  async asyncData({ $graphql, app }) {
    try {
      const locale = app.$cookies.get("dato-locale");
      const variables = {
        locale
      };
      const cmsQuery = await $graphql.default.request(HOMEPAGE_QUERY, variables);
      const cmsContent = cmsQuery.homepage.data.attributes;

      return ({
        cmsContent: cmsContent
      })
    } catch(err) {
      console.log(err);
    }
  },
  head() {
    return {
      // title: this.cmsContent.title,
      // meta: [
      //   { hid: "description", property: "description", content: "" }
      // ]
    }
  },
  methods: {
    previousCarouselItem() {
      this.carouselCurrentIndex -= 1
    },
    nextCarouselItem() {
      this.carouselCurrentIndex += 1
    }
  }
}
</script>

<style lang="sass">
@import '../assets/styles/global.sass'

#home
  #intro-section
    overflow: hidden
    .container
      position: relative
      height: 800px
      .content-container
        max-width: 800px
      .image-container
        position: absolute
        left: -60px
        bottom: 0

  #product-section
    .product-cards-container
      display: flex
      .product-card-container
        display: flex
        justify-content: center
        flex: 1

.carousel-container
  overflow: hidden
  position: relative
  .left-arrow
    position: absolute
    left: 0
    top: 50%
    transform: translateY(-50%)
    cursor: pointer
    z-index: 1
  .right-arrow
    position: absolute
    right: 0
    top: 50%
    transform: translateY(-50%)
    cursor: pointer
    z-index: 1
  .carousel-items
    display: flex
    transition: 0.2s transform
    .carousel-item
      flex: 1 0 100%
      .container
        padding: 0 160px

.activity-indicator-container
  display: flex
  justify-content: center
  .activity-indicator
    width: 12px
    height: 12px
    border: 2px solid #8B8C8E
    border-radius: 50%
    margin: 0 4px
    &.active
      border: 2px solid $primary-blue
      background-color: $primary-blue
      cursor: pointer
</style>