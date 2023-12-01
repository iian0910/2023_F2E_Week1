<template>
  <div
    class="modal fade"
    id="policyModal"
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
            @click="closeModal()"
          ></button>
        </div>
        <div class="modal-body event_modal_body" v-if="objData">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-4 px-0 pe-md-3 left_side">
                <img :src="objData.imgUrl" class="img-fluid event_modal_img mb-3" alt="">
                <div class="img_title small body_mo_2 mb-2">{{ objData.title }}</div>
                <div class="d-flex align-items-center">
                  <span class="share_title body me-3">分享</span>
                  <img src="@/assets/image/fb.svg" class="d-block share_media me-3" alt="">
                  <img src="@/assets/image/ig.svg" class="d-block share_media me-3" alt="">
                  <img src="@/assets/image/line.svg" class="d-block share_media me-3" alt="">
                  <img src="@/assets/image/youtube.svg" class="d-block share_media" alt="">
                </div>
              </div>
              <div class="col-12 col-md-8 px-0 ps-md-3">
                <div class="content_title H2_Heading H4_Heading_mo_2 mb-2">{{ objData.title }}</div>
                <div class="content_date small">{{ objData.date }}</div>
                <div class="content_text body">{{ objData.content }}</div>
                <div class="relation_content p-0 p-md-3">
                  <div class="relation_title m-3">更多活動</div>
                  <div class="container">
                    <div class="row">
                      <div class="col-6 col-md-4 mb-3 mb-md-0" v-for="item in otherEvent" :key="item.id">
                        <div class="card border-0">
                          <img :src="item.imgUrl" class="card-img-top relation_item_img">
                          <p class="card-text relation_item_title body">{{ item.title }}</p>
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
    listItem: {
      type: Object,
      default: () => ({})
    },
    allList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      objData: null
    }
  },
  computed: {
    otherEvent () {
      const other = this.allList.filter((item, index) => {
        return index >= 1
      })

      return other
    }
  },
  watch: {
    listItem: {
      handler (val) {
        this.objData = val
      },
      immediate: true
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
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
  @include mobile {
    width: 24px;
    height: 24px;
  }
}
.event_modal_header {
  padding: 24px 48px;
  @include mobile {
    padding: 16px 16px 8px 16px;
  }
}
.event_modal_body {
  padding: 8px 48px 48px 48px;
  @include mobile {
    padding: 8px 16px 16px 16px;
  }
}
.left_side {
  @include mobile {
    margin-bottom: 32px;
  }
}
.event_modal_img {
  border-radius: 24px;
}
.img_title {
  color: $text_primary-700;
}
.share_title {
  color: $text_primary-700;
}
.share_media {
  width: 28px;
  height: 28px;
}
.content_title {
  color: $primary_theme_1;
}
.content_date {
  margin-bottom: 40px;
  color: $text_primary-500;
}
.content_text {
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
  color: $text_primary-700;
}
</style>
