<template>
  <div>
    <nav class="d-none d-sm-block navbar fixed-top py-3 px-4">
      <div class="container-fluid px-4 navbar_content">
        <div class="d-flex align-items-center">
          <img src="@/assets/image/logo.png" class="logo d-block me-2" alt="">
          <div class="logo_title H4_Heading">喵立翰 Miao Li-Han</div>
        </div>
        <div class="d-flex align-items-center">
          <p class="item base_text m-0 me-3" @click="toAnchor('advocate')">候選人主張</p>
          <p class="item base_text m-0 me-3" @click="toAnchor('event')">最新活動</p>
          <p class="item base_text m-0 me-3" @click="toAnchor('policy')">政策議題</p>
          <p class="item base_text m-0 me-3" @click="toAnchor('active')">小額捐款</p>
          <p class="item base_text m-0" @click="toAnchor('active')">民眾服務信箱</p>
        </div>
        <div class="d-flex align-items-center">
          <img src="@/assets/image/fb.svg" class="d-block me-3" alt="">
          <img src="@/assets/image/ig.svg" class="d-block me-3" alt="">
          <img src="@/assets/image/youtube.svg" class="d-block" alt="">
        </div>
      </div>
    </nav>
    <nav class="d-block d-sm-none navbar fixed-bottom bg-white p-0">
      <div class="container-fluid px-2 navbar_content_mo">
        <div class="mo_item" @click="toAnchor('advocate')">
          <img src="@/assets/image/default.svg" class="mx-auto d-block mb-1" alt="">
          <p class="mb-0 mo_title">候選人主張</p>
        </div>
        <div class="mo_item" @click="toAnchor('event')">
          <img src="@/assets/image/list_check.svg" class="mx-auto d-block mb-1" alt="">
          <p class="mb-0 mo_title">最新活動</p>
        </div>
        <div class="mo_item" @click="toAnchor('policy')">
          <img src="@/assets/image/issue.svg" class="mx-auto d-block mb-1" alt="">
          <p class="mb-0 mo_title">政策議題</p>
        </div>
        <div class="mo_item" @click="toAnchor('active')">
          <img src="@/assets/image/money.svg" class="mx-auto d-block mb-1" alt="">
          <p class="mb-0 mo_title">小額捐款</p>
        </div>
        <div class="mo_item" @click="toAnchor('active')">
          <img src="@/assets/image/mail_icon.svg" class="mx-auto d-block mb-1" alt="">
          <p class="mb-0 mo_title">服務信箱</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toAnchor (id) {
      const anchor = document.getElementById(id)
      anchor.scrollIntoView()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.navbar_content {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: white;
  border-radius: 32px;
}
.logo {
  width: auto;
  height: 43px;
}
.logo_title {
  color: $primary_theme_1;
}
.item {
  color: $text_primary-700;
  cursor: pointer;
}
.mo_item {
  padding: 12px 7.7px 16px 7.7px;
}
.mo_title {
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
