<template>
  <div v-if="cmsContent">
    <p>{{ cmsContent.pageName }}</p>
    <p>{{ cmsContent.headerDescription }}</p>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

const HOMEPAGE_QUERY = gql`
  query homepageQuery {
    page(filter: {pageName: {eq: "Homepage"}}, locale: ms_MY) {
      pageName
      headerRightImage {
        url
      }
      headerDescription
      headerTitle
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
  async asyncData({ $graphql, params }) {
    try {
      const cmsQuery = await $graphql.default.request(HOMEPAGE_QUERY);
      const cmsData = cmsQuery.page;

      return ({
        cmsContent: cmsData
      })
    } catch(err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: this.cmsContent.pageName,
      meta: [
        { hid: "description", property: "description", content: this.cmsContent.headerTitle }
      ]
    }
  }
}
</script>
