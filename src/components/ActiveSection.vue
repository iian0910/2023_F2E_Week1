<template>
  <div class="section_padding">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mb-3 mb-lg-0">
          <div class="box donate">
            <div class="title large_text mb-3">小額支持喵喵</div>
            <div class="sub_title mb-4">您的小筆捐款，是每隻毛孩未來的大大動力！</div>
            <div class="container p-0">
              <div class="row align-items-center g-0">
                <div class="col-6">
                  <GoToButton :value="'小額捐款'"/>
                </div>
                <div class="col-6">
                  <div class="active_img hand"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="box service">
            <div class="title large_text mb-3">民眾服務信箱</div>
            <div class="sub_title mb-4">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</div>
            <div class="container p-0">
              <div class="row align-items-center g-0">
                <div class="col-6">
                  <GoToButton :value="'填寫表單'"/>
                </div>
                <div class="col-6">
                  <div class="active_img mail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoToButton from '../components/GoToButton.vue'
export default {
  data () {
    return {}
  },
  components: {
    GoToButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.box {
  height: 100%;
  padding: 96px;
  border-radius: 32px;
  @include mobile {
    padding: 40px 24px;
  }
}
.donate {
  background-color: $primary_theme_1;
}
.service {
  background-color: $text_primary-700;
}
.title {
  color: white;
  @include mobile {
    font-size: 40px;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
  }
}
.sub_title {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
}
.active {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.active_img {
  width: 100%;
  height: 0;
  padding-top: calc(100% / 482px * 458px);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  &.hand {
    background-image: url('@/assets/image/donate@2x.png');
  }
  &.mail {
    background-image: url('@/assets/image/mail@2x.png');
  }
}
</style>
