<template>
  <div class="section_padding section_bg">
    <SectionTitle :tagVal="'POLICY ISSUES'" :value="'政策議題'"/>
    <div class="container">
      <div class="row">
        <div
          v-for="item in policyList"
          :key="item.id"
          class="col-12 col-md-4"
          :class="`policy_${item.id}`"
          @click="openEventModal(item)"
        >
          <div class="policy_title H4_Heading px-3 pb-3">{{ item.title }}</div>
          <div class="policy_img" :style="`backgroundImage: url(${item.imgUrl})`"></div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <SectionModal
      :modalTitle= "'政策議題'"
      :listItem="currentEvent"
      :allList="policyList"
    />
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import SectionModal from './PolicyModal.vue'
import { Modal } from 'bootstrap'
import carousel1 from '@/assets/image/carousel-1@2x.png'
import carousel2 from '@/assets/image/carousel-2@2x.png'
import carousel3 from '@/assets/image/carousel-3@2x.png'

export default {
  data () {
    return {
      isOpenModal: false,
      modal: null,
      policyList: [
        {
          id: '1',
          title: '為毛孩子謀福利！推動寵物醫療保障方案',
          imgUrl: carousel1,
          content: '為毛孩子謀福利！推動寵物醫療保障方案'
        },
        {
          id: '2',
          title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
          imgUrl: carousel2,
          content: '打造休閒天堂！推廣寵物休閒與娛樂場所'
        },
        {
          id: '3',
          title: '推廣寵物飼養教育，讓愛更加專業',
          imgUrl: carousel3,
          content: '推廣寵物飼養教育，讓愛更加專業'
        }
      ],
      currentEvent: null
    }
  },
  components: {
    SectionTitle,
    SectionModal
  },
  methods: {
    openEventModal (item) {
      this.currentEvent = item
      this.$nextTick(() => {
        const myModal = document.getElementById('policyModal')
        const ins = Modal.getOrCreateInstance(myModal)
        this.isOpenModal = true
        ins.show()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.section_bg {
  background-color: $bg_color_theme_1;
}
.policy_title {
  color: $text_primary-700;
}
.policy_img {
  width: 100%;
  height: 267px;
  background-size: cover;
  background-position: center;
  border-radius: 24px;
}
.policy_1 {
  padding-right: 32px;
  @include mobile {
    padding-right: 12px;
    margin-bottom: 64px;
  }
}
.policy_2 {
  padding-right: 32px;
  padding-left: 32px;
  @include mobile {
    padding-right: 12px;
    padding-left: 12px;
    margin-bottom: 64px;
  }
}
.policy_3 {
  padding-left: 32px;
  @include mobile {
    padding-left: 12px;
  }
}
</style>
