<template>
  <div class="section_padding">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="card-body">
              <div class="title">
                <InfoTag
                  :value="'ADVOCATE'"
                />
                <div class="title_name">候選人主張</div>
              </div>
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
import InfoTag from './InfoTag.vue'

export default {
  data () {
    return {}
  },
  components: {
    InfoTag
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.card {
  border-radius: 32px;
  overflow: hidden;
  .card-body {
    padding: 64px 40px;
    @media screen and (max-width: 576px) {
      padding: 40px 24px;
    }
  }
}
.title {
  margin-bottom: 32px;
  text-align: center;
}
.title_name {
  font-family: Mantou;
  font-size: 64px;
  font-weight: 400;
  line-height: 93px;
  letter-spacing: 0em;
  color: transparent;
  background-image: $primary_gradient;
  -webkit-background-clip: text;
  background-clip: text;
}
.point {
  @extend .H3_Heading;
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
  height: 0;
  padding-top: 107%;
  background-image: url('@/assets/image/section2.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 572px) {
    padding-top: 100%;
  }
}
</style>
