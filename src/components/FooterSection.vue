<template>
  <div class="footer_padding section_bg">
    <div class="container">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.section_bg {
  background-color: $bg_color_theme_2;
}

.footer_padding {
  padding: 64px 0;
  @include mobile {
    padding: 64px 16px;
  }
}
</style>
