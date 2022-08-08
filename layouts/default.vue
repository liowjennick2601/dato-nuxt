<template>
<div>
  <div>
    <Navbar />
    <!-- <h2>Navigation</h2>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/articles">All Articles</NuxtLink> -->
  </div>

  <!-- <div>
    <h2>Locale</h2>
    <h3>Current Locale: {{ currentLocale }}</h3>
    <h3 @click="changeLocale('en')">EN</h3>
    <h3 @click="changeLocale('ms-MY')">MY</h3>
  </div> -->
  <Nuxt />
</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Default",
  scrollToTop: true,
  components: {
    Navbar: () => import('../components/Navbar')
  },
  middleware: ["locale"],
  computed: {
    ...mapGetters("locale", [
      "currentLocale"
    ])
  },
  methods: {
    changeLocale(newLocale) {
      this.$cookies.set("dato-locale", newLocale);
      this.$store.commit("locale/changeLocale", newLocale);
      this.$nuxt.refresh()
    },
    ...mapMutations
  }
}
</script>

<style lang="sass">
@import '../assets/styles/global'

@font-face
  font-family: 'Open Sans'
  src: url("../assets/fonts/open-sans/OpenSansRegular.ttf")
  font-weight: normal

@font-face
  font-family: 'Open Sans'
  src: url("../assets/fonts/open-sans/OpenSansItalic.ttf")
  font-style: italic

@font-face
  font-family: 'Poppins'
  src: url("../assets/fonts/poppins/Poppins-Light.ttf")
  font-weight: 100

@font-face
  font-family: 'Poppins'
  src: url("../assets/fonts/poppins/Poppins-Medium.ttf")
  font-weight: 300

@font-face
  font-family: 'Poppins'
  src: url("../assets/fonts/poppins/Poppins-Regular.ttf")
  font-weight: 500

@font-face
  font-family: 'Poppins'
  src: url("../assets/fonts/poppins/Poppins-SemiBold.ttf")
  font-weight: 700

@font-face
  font-family: 'Poppins'
  src: url("../assets/fonts/poppins/Poppins-Bold.ttf")
  font-weight: 900
</style>