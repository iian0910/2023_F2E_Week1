<template>
  <div class="section_padding section_bg">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="card-body">
              <SectionTitle :tagVal="'ADVOCATE'" :value="'候選人主張'"/>
              <div class="point">
                我堅信 ! 藉由推動更完善的<span>貓咪福利</span>和相關政策，更是間接地投資於<span>台灣的未來</span>。
              </div>
              <div class="content">
                畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br>
                因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="advocateImg"></div>
          </div>
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
  background-color: $bg_color_theme_2;
}
.card {
  border-radius: 32px;
  overflow: hidden;
  .card-body {
    padding: 64px 40px;
    @include mobile {
      padding: 40px 24px;
    }
  }
}
.point {
  @extend .H3_Heading;
  @extend .H4_Heading_2;
  font-weight: 700;
  margin-bottom: 32px;
  color: $text_primary-700;
  span {
    color: $primary_theme_1;
  }
}
.content {
  @extend .base_text;
  @extend .body;
  color: $text_primary-700;
}
.advocateImg {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/image/section2.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @include mobile {
    padding-top: 100%;
  }
}
</style>
