<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Default",
  scrollToTop: true,
  components: {
    Navbar: () => import('../components/sections/Navbar'),
    Footer: () => import('../components/sections/Footer')
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