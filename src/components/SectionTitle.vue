<template>
  <div class="title">
    <InfoTag
      :value="tagVal"
    />
    <div class="title_name">{{ value }}</div>
  </div>
</template>

<script>
import InfoTag from './InfoTag.vue'
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    tagVal: {
      type: String,
      default: ''
    }
  },
  components: {
    InfoTag
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.title {
  margin-bottom: 32px;
  text-align: center;
}
.title_name {
  font-family: Mantou;
  font-size: 64px;
  font-weight: 400;
  line-height: 93px;
  letter-spacing: 0em;
  color: transparent;
  background-image: $primary_gradient;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
