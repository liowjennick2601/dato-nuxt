<template>
  <div v-if="articleContent">
    <h2>{{ articleContent.title }}</h2>
    <h3>{{ articleContent.subtitle }}</h3>
    <p>{{ articleContent.paragraph }}</p>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

const ARTICLE_QUERY = gql`
  query articleQuery($locale: SiteLocale, $slug: String) {
    article(locale: $locale, filter: {tags: {eq: $slug}}) {
      title
      subtitle
      paragraph
      id
      tags
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
      const cmsData = cmsQuery.article;

      return ({
        articleContent: cmsData
      })
    } catch(err) {
      console.log(err);
    }
  }
}
</script>
