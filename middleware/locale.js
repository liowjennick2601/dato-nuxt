export default ({ app, store }) => {
  // check if there's any cookie for locale
  // if not set default to "en"
  // if yes set current locale in vuex
  const locale = app.$cookies.get("dato-locale");
  app.$cookies.set("dato-locale", locale ? locale : "en");
  store.commit("locale/changeLocale", locale ? locale : "en");
}