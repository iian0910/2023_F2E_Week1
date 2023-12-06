<template>
  <div class="section_padding end_section">
    <div
      class="title mb-4 mb-md-3 d-flex flex-wrap justify-content-center wow bounceInDown"
    >
      <p class="mb-0 me-md-3">台灣的明天</p>
      <p class="mb-0">喵先鋪路</p>
    </div>
    <div class="d-flex justify-content-center wow bounceInUp">
      <div class="person d-flex align-items-center">
        <span class="no_ball me-3">3</span>
        <h1 class="person_name H1_Heading H4_Heading_mo_2">喵立翰 Miao Li-Han</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'

export default {
  mounted () {
    this.$nextTick(() => {
      new WOW().init()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.end_section {
  @include mobile {
    padding: 104px 0;
  }
}
.title p {
  font-family: Mantou;
  font-size: 64px;
  font-weight: 400;
  line-height: 96px;
  letter-spacing: 2px;
  text-align: center;
  color: transparent;
  background-image: $primary_gradient;
  -webkit-background-clip: text;
  background-clip: text;
  @include mobile {
    font-size: 52px;
    line-height: 55px;
  }
}
.person{
  padding: 12px 16px;
  background-color: #fff;
  display: inline-block;
  @include mobile {
    padding: 0;
  }
}
.no_ball{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: $primary_gradient;
  color: white;
  font-size: 32px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: center;
  @include mobile {
    width: 33px;
    height: 33px;
    font-size: 24px;
    line-height: 36px;
  }
}
.person_name{
  color: $primary_theme_1;
}
</style>
