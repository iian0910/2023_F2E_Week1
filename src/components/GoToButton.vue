<template>
    <div class="goto">
      <div class="d-flex align-items-center">
        {{ value }}<div class="ms-2 right_icon"></div>
      </div>
    </div>
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
.right_icon {
  width: 32px;
  height: 32px;
  background-image: url('@/assets/image/arrow-right-short.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.goto {
  padding: 16px 24px;
  border-radius: 500px;
  background-color: $gray-100;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  display: inline-block;
  cursor: pointer;
}
</style>
