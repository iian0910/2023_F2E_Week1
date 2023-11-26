<template>
  <div class="section_padding section_bg">
    <div class="container">
      <SectionTitle :tagVal="'POLICY ISSUES'" :value="'政策議題'"/>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
  data () {
    return {}
  },
  components: {
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.section_bg {
  background-color: $bg_color_theme_1;
}

</style>
