<template>
  <div>
    <div class="title_block">
      <div class="title mb-3 d-flex flex-wrap justify-content-center">
        <p class="me-md-3">台灣的明天</p>
        <p>喵先鋪路</p>
      </div>
      <div class="subTitle d-flex flex-wrap justify-content-center align-items-center mb-4">
        <InfoTag
          class="me-3"
          :value="'2024 立委參選人'"
          :isHeroTag="true"
        />
        <div class="person d-flex align-items-center">
          <span class="no_ball me-3">3</span>
          <h1 class="person_name H1_Heading H3_Heading_mo_2">喵立翰 Miao Li-Han</h1>
        </div>
      </div>
      <img src="@/assets/image/hero_all.png" class="d-block hero_img" alt="">
      <div class="scroll_slogan d-flex">
        <!-- 本尊 -->
        <div class="slogan">
          <span class="me-2 me-md-4">為喵星人，護台灣！</span>
          <span class="me-2 me-md-4">從喵的眼中，看見台灣</span>
          <span>喵的未來，人的希望</span>
        </div>
        <div class="slogan">
          <span class="me-2 me-md-4">為喵星人，護台灣！</span>
          <span class="me-2 me-md-4">從喵的眼中，看見台灣</span>
          <span>喵的未來，人的希望</span>
        </div>
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
  @include mobile {
    padding-top: 32px;
  }
}
.title p {
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
  @include mobile {
    font-size: 52px;
    line-height: 55px;
    text-align: center;
  }
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
  @include mobile {
    width: 39.83px;
    height: 39.83px;
    font-size: 25px;
    line-height: 38px;
  }
}
.person_name{
  color: $primary_theme_1;
}
.hero_img {
  max-width: 723px;
  margin: 0 auto;
  @include mobile {
    max-width: 343px;
  }
}
.scroll_slogan {
  padding: 10px 0;
  background-color: $primary_theme_1;
  overflow: hidden;
}
.slogan {
  white-space:nowrap;
  animation: scroll 40s linear infinite;
  span {
    font-family: Mantou;
    font-size: 64px;
    font-weight: 400;
    line-height: 67px;
    letter-spacing: 2px;
    color: white;
    @include mobile {
      font-size: 40px;
      line-height: 42px;
    }
  }
  &:nth-child(2) {
    animation: scroll2 40s linear infinite;
    animation-delay: -20s;
  }
}

@keyframes scroll {
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(-100%)
  }
}
@keyframes scroll2 {
  from {
    transform: translateX(0%)
  }
  to {
    transform: translateX(-200%)
  }
}
</style>
