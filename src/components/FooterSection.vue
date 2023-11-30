<template>
  <div class="footer_padding section_bg">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="mb-3 person d-flex align-items-center">
            <span class="no_ball me-2">3</span>
            <h1 class="person_name H3_Heading">喵立翰 Miao Li-Han</h1>
          </div>
          <div class="mb-3 d-flex align-items-center">
            <div class="media_ball me-2">
              <img src="@/assets/image/fb.svg" class="img-fluid" alt="">
            </div>
            <div class="media_ball me-2">
              <img src="@/assets/image/ig.svg" class="img-fluid" alt="">
            </div>
            <div class="media_ball">
              <img src="@/assets/image/youtube.svg" class="img-fluid" alt="">
            </div>
          </div>
          <p class="m-0 info small">© 2023 喵立翰 Miao Li-Han 版權所有</p>
        </div>
        <div class="col-12 col-md-6">
          <div class="addr_title H4_Heading mb-3">競選總部</div>
          <div class="addr_info body">
            辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓<br/>
            電話：(02) 888-5678<br/>
            電子郵件地址：meowoffice@linmeow.tw
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.section_bg {
  background-color: $bg_color_theme_2;
}

.footer_padding {
  padding: 64px 0;
  @include mobile {
    padding: 64px 16px;
  }
}

.person{
  display: inline-block;
}
.no_ball{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: $primary_gradient;
  color: white;
  font-size: 20px;
  font-weight: 900;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: center;
}
.person_name{
  color: $primary_theme_1;
}
.media_ball {
  padding: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
}
.info {
  color: $text_primary-700;
}
.addr_title {
  color: $text_primary-700;
}
.addr_info {
  color: $text_primary-700;
}
</style>
