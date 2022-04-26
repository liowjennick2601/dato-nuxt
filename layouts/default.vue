<template>
<div>
  <div>
    <h2>Navigation</h2>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/articles">All Articles</NuxtLink>
  </div>

  <div>
    <h2>Locale</h2>
    <h3>Current Locale: {{ currentLocale }}</h3>
    <h3 @click="changeLocale('en')">EN</h3>
    <h3 @click="changeLocale('ms_MY')">MY</h3>
  </div>
  <Nuxt />
</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Default",
  scrollToTop: true,
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