<template>
  <h3 class="tag hero_tag" v-if="isHeroTag">{{value}}</h3>
  <h6 class="tag other_tag" v-else>{{value}}</h6>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    isHeroTag: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.tag {
  padding: 12px 16px;
  background-color: $text-primary-700;
  color: white;
  display: inline-block;
  border-radius: 16px;
}
.hero_tag{
  @extend .H3_Heading;
  @extend .H5_Heading;
}
.other_tag {
  @extend .H6_Heading;
}
</style>
