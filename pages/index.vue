<template>
  <div id="home">
    <div id="intro-section" class="section">
      <div class="container">
        <div class="content-container">
          <h1 class="section-header"><span class="text-blue">Homegrown Insurer</span> Protecting Singapore for over 45 Years</h1>
          <p class="mb-6">When you’ve been protecting customers and businesses for more than 45 years, you learn a thing or two about what matters. Our insurance products are made to help Singaporeans protect what matters!</p>
          <NuxtLink to="/" class="blue-button-filled">Browse Product</NuxtLink>
        </div>

        <img class="image-container" src="../assets/images/illustrations/car-marina-bay.png" />
      </div>
    </div>

    <div id="product-section" class="section">
      <div class="container">
        <h5 class="text-yellow text-center section-title mb-0">OUR PRODUCTS</h5>
        <h2 class="section-header text-center">We select only the <span class="text-blue">best policies for you.</span></h2>

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

          <div class="product-card-container">
            <ProductCard
              :imageSource="require('../assets/images/products/private-car.png')"
              title="Private Car"
              description="Protect your car, passengers, and the planet jskdjksjd jksjskjd ksjdksj kjsdkjk sjdksjdkj sjkdjsk skjdksj sdjkjsdk sjdkjds k"
              link="/"
              buttonText="Get Quote"
            />
          </div>
        </div>
      </div>
    </div>
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
    ProductCard: () => import("../components/snippet/ProductCard.vue")
  },
  data() {
    return {
      cmsContent: null
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
</style>