<template>
  <div v-if="articleContent">
    <h2>{{ articleContent.attributes.title }}</h2>
    <h3>{{ articleContent.attributes.subtitle }}</h3>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

const ARTICLE_QUERY = gql`
  query articleQuery($locale: I18NLocaleCode, $slug: String) {
    articles(locale: $locale, filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          subtitle
        }
      }
    }
  }
`

export default {
  name: "ArticlePage",
  data() {
    return {
      articleContent: null
    }
  },
  async asyncData({ $graphql, params, app }) {
    try {
      const locale = app.$cookies.get("dato-locale");
      const variables = {
        locale,
        slug: params.slug
      };
      const cmsQuery = await $graphql.default.request(ARTICLE_QUERY, variables)
      console.log(cmsQuery)
      const cmsData = cmsQuery.articles.data[0];

      return ({
        articleContent: cmsData
      })
    } catch(err) {
      console.log(err);
    }
  }
}
</script>
