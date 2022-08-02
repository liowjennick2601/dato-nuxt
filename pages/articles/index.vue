<template>
  <div>
    <div v-if="articles">
      <div v-for="(article, i) in articles" :key="i">
        <h2>{{ article.attributes.title }}</h2>
        <h3>{{ article.attributes.subtitle }}</h3>
        <nuxtLink :to="'/articles/' + article.attributes.slug">Read article</nuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

const ALL_ARTICLES_QUERY = gql`
  query articlesQuery($locale: I18NLocaleCode) {
    articles(locale: $locale) {
      data {
        attributes {
          title
          subtitle
          slug
        }
      }
    }
  }
`

export default {
  name: "ArticleList",
  data() {
    return {
      articles: null
    }
  },
  async asyncData({ $graphql, params, store, app }) {
    try {
      // app.$cookie.set('dato-locale', 'en');
      // const locale = app.$cookie.get('dato-locale');
      const locale = app.$cookies.get("dato-locale")
      const variables = {
        locale
      }
      const cmsQuery = await $graphql.default.request(ALL_ARTICLES_QUERY, variables);

      const cmsData = cmsQuery.articles.data;

      console.log(cmsData)

      return ({
        articles: cmsData
      })
    } catch(err) {
      console.log(err);
    }
  }
}

</script>