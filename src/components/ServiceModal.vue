<template>
  <div
    class="modal fade"
    id="serviceModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header event_modal_header border-0">
          <h5
            class="modal-title H2_Heading H4_Heading_mo_2"
          >
            服務信箱
          </h5>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal()"
          ></button>
        </div>
        <div class="modal-body event_modal_body">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-7 px-0 pe-md-3 mb-4 mb-md-0">
                <div class="left_side">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-8 col-md-12 px-0">
                        <div class="title H1_Heading H6_Heading_mo">
                          分享您的想法<br>一同為我們的未來打造更美好！
                        </div>
                      </div>
                      <div class="col-4 col-md-12 px-0">
                        <div class="icon_area">
                          <img src="@/assets/image/share.png" class="icon_img" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5 px-0 ps-md-3">
                <template v-if="!isServiced">
                  <div class="mb-4">
                    <div class="mb-2 H5_Heading">您的姓名</div>
                    <formInput
                      :is-input="true"
                      :placeholder="'姓名'"
                    />
                  </div>
                  <div class="mb-4">
                    <div class="mb-2 H5_Heading">Email</div>
                    <formInput
                      :is-input="true"
                      :placeholder="'Email'"
                    />
                  </div>
                  <div class="mb-4">
                    <div class="mb-2 H5_Heading">手機</div>
                    <formInput
                      :is-input="true"
                      :placeholder="'手機號碼'"
                    />
                  </div>
                  <div class="mb-4">
                    <div class="mb-2 H5_Heading">您的建言</div>
                    <formInput
                      :is-text-area="true"
                      :placeholder="'您的建言'"
                    />
                  </div>
                  <div
                    class="donate_btn"
                    @click="donate()"
                  >
                    送出意見
                  </div>
                </template>
                <template v-else>
                  <div class="h-100 d-flex flex-column align-items-center justify-content-center">
                    <div class="H3_Heading thank_title">感謝您的意見</div>
                    <img src="@/assets/image/check.svg" alt="" class="thank_img">
                    <div class="thank_close" data-bs-dismiss="modal" @click="isServiced = false">關閉</div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formInput from './FormInput.vue'
export default {
  components: {
    formInput
  },
  data () {
    return {
      isServiced: false,
      donateList: [
        {
          id: '01',
          title: '星人之友',
          price: '600',
          NumberOfSponsors: '9,957',
          active: false
        },
        {
          id: '02',
          title: '星大使',
          price: '6,000',
          NumberOfSponsors: '2,000',
          active: false
        },
        {
          id: '03',
          title: '星傳奇',
          price: '60,000',
          NumberOfSponsors: '999',
          active: false
        }
      ]
    }
  },
  methods: {
    donate () {
      this.isServiced = true
    },
    closeModal () {
      this.isServiced = false
    },
    selectItem (item) {
      this.donateList.forEach(listItem => {
        listItem.active = false
      })
      item.active = true
    },
    selectInput () {
      this.donateList.forEach(listItem => {
        listItem.active = false
      })
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
.left_side {
  padding: 60px 60px 0 60px;
  border-radius: 24px;
  background-color: $bg_color_theme_2;
  @include mobile {
    padding: 24px 16px 24px 24px;
  }
}
.title {
  color: $primary_theme_1;
}
.subTitle {
  margin-top: 16px;
  color: $text_primary-700;
}
.icon_area {
  margin: 0 -60px;
  .icon_img {
    width: 100%;
    display: block;
    @include mobile {
      width: 100%;
      height: auto;
    }
  }
  @include mobile {
    margin: 0 -16px 0 0;
  }
}
.service_input {
  border-radius: 8px;
  background-color: $text_primary-100;
  padding: 16px;
}
.service_input_item {
  background: transparent;
  border: none;
}
.donate_btn {
  padding: 24px 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  background-color: $primary_theme_1;
  border-radius: 500px;
  cursor: pointer;
}
.thank_title {
  margin-bottom: 32px;
}
.thank_img {
  margin: 0 auto 32px auto;
  width: 187px;
  height: auto;
  display: block;
}
.thank_close {
  padding: 16px 0;
  text-align: center;
  width: 224px;
  background-color: $text_primary-100;
  color: $text_primary-700;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 500px;
  cursor: pointer;
}
</style>
