<template>
  <div
    class="modal fade"
    id="donateModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header event_modal_header border-0">
          <h5
            class="modal-title H2_Heading H4_Heading_mo_2"
          >
            小額捐款
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
                          您的小筆捐款<br>是每隻毛孩未來的大大動力！
                        </div>
                        <div class="subTitle">
                          <div class="body small_mo">目前小額贊助總金額</div>
                          <div class="H2_Heading H5_Heading_mo">987,655,873</div>
                        </div>
                      </div>
                      <div class="col-4 col-md-12 px-0">
                        <div class="icon_area">
                          <img src="@/assets/image/donate@2x.png" class="icon_img" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5 px-0 ps-md-3">
                <template v-if="!isDonated">
                  <div class="mb-3 H5_Heading">捐款方式</div>
                  <div
                    class="mb-3 donate_item d-flex flex-column flex-md-row justify-content-md-between align-items-md-center"
                    :class="{'active' : item.active}"
                    v-for="item in donateList"
                    :key="item.id"
                    @click="selectItem(item)"
                  >
                    <div class="item_name H5_Heading">{{ item.title }}</div>
                    <div class="d-flex align-items-center">
                      <div class="price body me-4">
                        NT$ <span class="H4_Heading">{{ item.price }}</span>
                      </div>
                      <div class="donate_p small">
                        已有 {{ item.NumberOfSponsors }} 人贊助
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 donate_item">
                    <div class="mb-2 item_name H5_Heading">自助贊助金額</div>
                    <div class="donate_input d-flex justify-content-center align-items-center">
                      <span class="me-1">NT$</span>
                      <input
                        class="form-control amount_input"
                        id="exampleDataList"
                        placeholder="請輸入金額"
                        @click="selectInput()"
                      >
                    </div>
                  </div>
                  <div
                    class="donate_btn"
                    @click="donate()"
                  >
                    前往捐款
                  </div>
                </template>
                <template v-else>
                  <div class="h-100 d-flex flex-column align-items-center justify-content-center">
                    <div class="H3_Heading thank_title">感謝您的捐款</div>
                    <img src="@/assets/image/check.svg" alt="" class="thank_img">
                    <div class="thank_close" data-bs-dismiss="modal" @click="isDonated = false">關閉</div>
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
export default {
  data () {
    return {
      isDonated: false,
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
      this.isDonated = true
    },
    closeModal () {
      this.isDonated = false
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
  padding: 60px;
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
  padding: 52px 0;
  .icon_img {
    width: 336px;
    height: 348px;
    display: block;
    margin: 0 auto;
    @include mobile {
      width: 100%;
      height: auto;
    }
  }
  @include mobile {
    padding: 0;
  }
}
.donate_item {
  border: 2px solid $text_primary-200;
  border-radius: 16px;
  padding: 27.5px 16px;
  background-color: #fff;
  cursor: pointer;
  &.active {
    border-color: $primary_theme_1;
  }
}
.price {
  color: $text_primary-700;
}
.item_name {
  padding-left: 18px;
  color: $primary_theme_1;
}
.donate_p {
  color: $text_primary-500;
}
.donate_input {
  margin-left: 18px;
  border-radius: 8px;
  background-color: $text_primary-100;
  padding: 16px;
}
.amount_input {
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
