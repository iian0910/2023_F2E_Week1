<template>
  <div
    class="modal fade"
    id="exampleModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header event_modal_header border-0">
          <h5
            class="modal-title"
            id="exampleModalLabel"
          >
            {{ modalTitle }}
          </h5>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body event_modal_body" v-if="objData">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-4 ps-0 pe-3">
                <img :src="objData.imgUrl" class="img-fluid event_modal_img mb-3" alt="">
                <div class="img_title mb-2">{{ objData.title }}</div>
                <div class="d-flex align-items-center">
                  <span class="share_title me-3">分享</span>
                  <img src="@/assets/image/fb.svg" class="d-block share_media me-3" alt="">
                  <img src="@/assets/image/ig.svg" class="d-block share_media me-3" alt="">
                  <img src="@/assets/image/line.svg" class="d-block share_media me-3" alt="">
                  <img src="@/assets/image/youtube.svg" class="d-block share_media" alt="">
                </div>
              </div>
              <div class="col-12 col-md-8 ps-3 pe-0">
                <div class="content_title mb-2">{{ objData.title }}</div>
                <div class="content_date">{{ objData.date }}</div>
                <div class="content_text">{{ objData.content }}</div>
                <div class="relation_content p-3">
                  <div class="relation_title m-3">更多活動</div>
                  <div class="container">
                    <div class="row">
                      <div class="col-4" v-for="item in objData.subEvent" :key="item.id">
                        <div class="card border-0">
                          <img :src="item.imgUrl" class="card-img-top relation_item_img">
                          <p class="card-text relation_item_title">{{ item.title }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
export default {
  props: {
    modalTitle: {
      type: String,
      default: ''
    },
    event: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      objData: null
    }
  },
  watch: {
    event: {
      handler (val) {
        console.log('收到了 ==>', val)
        this.objData = val
      },
      immediate: true
    }
  }
}

</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.close {
  width: 32px;
  height: 32px;
  background-image: url('@/assets/image/cancel.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}
.event_modal_header {
  padding: 24px 48px;
}
.event_modal_body {
  padding: 8px 48px 48px 48px;
}
.event_modal_img {
  border-radius: 24px;
}
.img_title {
  @extend .small;
  color: $text_primary-700;
}
.share_title {
  @extend .body;
  color: $text_primary-700;
}
.share_media {
  width: 28px;
  height: 28px;
}
.content_title {
  @extend .H2_Heading;
  color: $primary_theme_1;
}
.content_date {
  @extend .small;
  margin-bottom: 40px;
  color: $text_primary-500;
}
.content_text {
  @extend .body;
  margin-bottom: 96px;
  color: $text_primary-700;
}
.relation_title {
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: $text_primary-700;
}
.relation_item_img {
  margin-bottom: 12px;
}
.relation_item_title {
  @extend .body;
  color: $text_primary-700;
}
</style>
