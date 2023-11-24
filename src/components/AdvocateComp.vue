<template>
  <div class="advocate">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="card-body">
              <InfoTag
                :value="'ADVOCATE'"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img src="@/assets/image/section2.png" class="img-fluid" alt="...">
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
.advocate {
  padding: 104px 0;
  background-color: $bg_color_theme_2;
  @media screen and (max-width: 576px) {
    padding: 64px 0;
  }
}
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
</style>
