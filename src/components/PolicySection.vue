<template>
  <div class="section_padding section_bg">
    <SectionTitle :tagVal="'POLICY ISSUES'" :value="'政策議題'"/>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 policy_1">
          <div class="policy_title px-3 pb-3">為毛孩子謀福利！推動寵物醫療保障方案</div>
          <div class="policy_img img_1"></div>
        </div>
        <div class="col-12 col-md-4 policy_2">
          <div class="policy_title px-3 pb-3">打造休閒天堂！推廣寵物休閒與娛樂場所</div>
          <div class="policy_img img_2"></div>
        </div>
        <div class="col-12 col-md-4 policy_3">
          <div class="policy_title px-3 pb-3">推廣寵物飼養教育，讓愛更加專業</div>
          <div class="policy_img img_3"></div>
        </div>
      </div>
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
.policy_title {
  @extend .H4_Heading;
  color: $text_primary-700;
}
.policy_img {
  width: 100%;
  height: 267px;
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  &.img_1 {
    background-image: url('@/assets/image/carousel-1@2x.png');
  }
  &.img_2 {
    background-image: url('@/assets/image/carousel-2@2x.png');
  }
  &.img_3 {
    background-image: url('@/assets/image/carousel-3@2x.png');
  }
}
.policy_1 {
  padding-right: 32px;
  @include mobile {
    padding-right: 12px;
    margin-bottom: 64px;
  }
}
.policy_2 {
  padding-right: 32px;
  padding-left: 32px;
  @include mobile {
    padding-right: 12px;
    padding-left: 12px;
    margin-bottom: 64px;
  }
}
.policy_3 {
  padding-left: 32px;
  @include mobile {
    padding-left: 12px;
  }
}
</style>
