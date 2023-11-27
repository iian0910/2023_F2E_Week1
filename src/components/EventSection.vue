<template>
  <div class="section_padding">
    <div class="container">
      <SectionTitle :tagVal="'LATEST EVENTS'" :value="'最新活動'"/>
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="card border-0">
            <img src="@/assets/image/event01.png" class="card-img-top rounded" alt="...">
            <div class="card-body px-0 py-0 pt-3">
              <p class="event_main_date mb-2">2023/11/27</p>
              <p class="event_main_title mb-2">參與台北寵物論壇，爭取貓咪友善環境</p>
              <p class="event_main_content">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card mb-4 border-0">
            <div class="row g-2">
              <div class="col-4">
                <div class="event_img event02"></div>
              </div>
              <div class="col-8">
                <div class="card-body p-0">
                  <p class="event_date mb-2">2023/11/27</p>
                  <p class="event_title mb-2">掃街模式開啟！帶著你的貓耳，來和我一起走！</p>
                  <p class="event_content">街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4 border-0">
            <div class="row g-2">
              <div class="col-4">
                <div class="event_img event03"></div>
              </div>
              <div class="col-8">
                <div class="card-body p-0">
                  <p class="event_date mb-2">2023/11/27</p>
                  <p class="event_title mb-2">掃街模式開啟！帶著你的貓耳，來和我一起走！</p>
                  <p class="event_content">街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4 border-0">
            <div class="row g-2">
              <div class="col-4">
                <div class="event_img event04"></div>
              </div>
              <div class="col-8">
                <div class="card-body p-0">
                  <p class="event_date mb-2">2023/11/27</p>
                  <p class="event_title mb-2">掃街模式開啟！帶著你的貓耳，來和我一起走！</p>
                  <p class="event_content">街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</p>
                </div>
              </div>
            </div>
          </div>
          <GoToButton :value="'查看更多'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import GoToButton from '../components/GoToButton.vue'

export default {
  data () {
    return {}
  },
  components: {
    SectionTitle,
    GoToButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.event_main_date,
.event_date {
  @extend .small;
  color: $text_primary-500;
}
.event_main_title {
  @extend .H5_Heading;
  color: $text_primary-700;
}
.event_title {
  @extend .H6_Heading;
  color: $text_primary-700;
}
.event_main_content,
.event_content {
  @extend .body;
  color: $text_primary-700;
}
.event_img {
  border-radius: 16px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.event02 {
  background-image: url('@/assets/image/event02.png');
}
.event03 {
  background-image: url('@/assets/image/event03.png');
}
.event04 {
  background-image: url('@/assets/image/event01.png');
}
</style>
