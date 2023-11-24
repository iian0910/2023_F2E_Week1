<template>
  <h3 class="tag">{{value}}</h3>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.tag{
  padding: 12px 16px;
  background-color: $text-primary-700;
  color: white;
  display: inline-block;
  border-radius: 16px;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
