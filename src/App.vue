<template>
  <div>
    <!-- Navbar -->
    <!-- 版頭 -->
    <Hero/>
    <!-- 主張 -->
    <Advocate/>
    <!-- 活動 -->
    <!-- 議題 -->
    <!-- 小額捐款/服務信箱 -->
    <!-- 結尾 -->
    <!-- Footer -->
  </div>
</template>

<script>
import Hero from './components/HeroSection.vue'
import Advocate from './components/AdvocateSection.vue'

export default {
  components: {
    Hero,
    Advocate
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

</style>
