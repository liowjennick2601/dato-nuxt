export const state = () => ({
  locale: "en" // en, ms-MY
});

export const getters = {
  currentLocale(state) {
    return state.locale
  }
}

export const mutations = {
  changeLocale(state, newLocale) {
    state.locale = newLocale
  }
}