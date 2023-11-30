<template>
  <h3 class="tag H3_Heading H5_Heading_mo_2" v-if="isHeroTag">{{value}}</h3>
  <h6 class="tag H6_Heading" v-else>{{value}}</h6>
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
</style>
