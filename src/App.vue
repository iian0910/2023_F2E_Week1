<template>
  <div>
    <!-- Navbar -->
    <Navbar/>
    <!-- 版頭 -->
    <Hero id="hero"/>
    <!-- 主張 -->
    <Advocate id="advocate"/>
    <!-- 活動 -->
    <Event id="event"/>
    <!-- 議題 -->
    <Policy id="policy"/>
    <!-- 小額捐款/服務信箱 -->
    <Active id="active"/>
    <!-- 結尾 -->
    <End id="end"/>
    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/PageNavbar.vue'
import Hero from './components/HeroSection.vue'
import Advocate from './components/AdvocateSection.vue'
import Event from './components/EventSection.vue'
import Policy from './components/PolicySection.vue'
import Active from './components/ActiveSection.vue'
import End from './components/EndSection.vue'
import Footer from './components/FooterSection.vue'

export default {
  components: {
    Navbar,
    Hero,
    Advocate,
    Event,
    Policy,
    Active,
    End,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

</style>
