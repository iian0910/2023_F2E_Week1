<template>
  <div class="section_padding">
    <div class="container">
      <SectionTitle :tagVal="'LATEST EVENTS'" :value="'最新活動'"/>
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
</style>
