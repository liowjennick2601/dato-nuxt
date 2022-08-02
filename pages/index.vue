<template>
  <div v-if="cmsContent">
    <p>{{ cmsContent.title }}</p>
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
      title: this.cmsContent.title,
      meta: [
        { hid: "description", property: "description", content: "" }
      ]
    }
  },
}
</script>
