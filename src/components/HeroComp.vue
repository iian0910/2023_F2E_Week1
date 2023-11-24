<template>
  <div>
    <div class="title_block">
      <p class="title mb-3">台灣的明天 喵先鋪路</p>
      <div class="subTitle d-flex justify-content-center align-items-center mb-4">
        <InfoTag
          class="me-3"
          :value="'2024 立委參選人'"
        />
        <div class="person d-flex align-items-center">
          <span class="no_ball me-3">3</span>
          <h1 class="person_name">喵立翰 Miao Li-Han</h1>
        </div>
      </div>
      <img src="@/assets/image/hero_all.png" class="d-block hero_img" alt="">
      <div class="slogan">
        <span class="me-4">為喵星人，護台灣！</span>
        <span class="me-4">從喵的眼中，看見台灣</span>
        <span>喵的未來，人的希望</span>
      </div>
    </div>
  </div>
</template>

<script>
import InfoTag from './InfoTag.vue'
export default {
  components: {
    InfoTag
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.title_block {
  text-align: center;
  padding-top: 96px;
}
.title {
  padding: 0;
  margin: 0;
  font-family: Mantou;
  font-size: 96px;
  font-weight: 400;
  line-height: 101px;
  letter-spacing: 2px;
  color: transparent;
  background-image: $primary_gradient;
  -webkit-background-clip: text;
  background-clip: text;
}
.person{
  padding: 12px 16px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: rgba(#A3B4CB33, 0.2) 0 4px 12px 0;
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
}
.person_name{
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.02em;
  text-align: left;
  color: $primary_theme_1;
}
.hero_img {
  max-width: 723px;
  margin: 0 auto;
}
.slogan {
  padding: 10px 0;
  background-color: $primary_theme_1;
  overflow: hidden;
  white-space:nowrap;
  span {
    font-family: Mantou;
    font-size: 64px;
    font-weight: 400;
    line-height: 67px;
    letter-spacing: 2px;
    color: white;
  }
}
</style>
