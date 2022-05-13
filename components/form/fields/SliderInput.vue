<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>

    <no-ssr>
      <div>
        <vue-slider
          v-model="vuelidateInstance[objectKey].$model"
          :value="value"
          :interval="config.interval"
          :min="config.minValue"
          :max="config.maxValue"
        />
      </div>
    </no-ssr>

    <ErrorMessages
      :vuelidateInstance="vuelidateInstance"
      :objectKey="objectKey"
    />
  </div>
</template>

<script>
import 'vue-slider-component/theme/default.css'

export default {
  name: "SliderInput",
  components: {
    ErrorMessages: () => import("../ErrorMessages.vue"),
    VueSlider: () => {
      if (process.client) {
        return import('vue-slider-component')
      }
    }
  },
  props: [
    "title",
    "subtitle",
    "objectKey",
    "value",
    "vuelidateInstance",
    "config"
  ]
}
</script>
