<template>
  <div class="section_padding">
    <div class="container">
      <SectionTitle :tagVal="'LATEST EVENTS'" :value="'最新活動'"/>
      <div class="row">
        <div
          class="main_event col-12 col-md-6 mb-4 mb-md-0"
          @click="openEventModal(eventList[0])"
        >
          <div class="card border-0">
            <img
              :src="eventList[0].imgUrl"
              class="card-img-top rounded-4"
              alt="..."
            >
            <div class="card-body px-0 py-0 pt-3">
              <p class="event_main_date mb-2">{{eventList[0].date}}</p>
              <p class="event_main_title H5_Heading mb-2">{{eventList[0].title}}</p>
              <p class="event_main_content">{{eventList[0].content}}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="card mb-4 border-0 main_event"
            v-for="item in otherEvent"
            :key="item.id"
            @click="openEventModal(item)"
          >
            <div class="row g-2">
              <div class="col-4">
                <div
                  class="event_img rounded-3"
                  :style="`backgroundImage: url(${item.imgUrl})`"
                ></div>
              </div>
              <div class="col-8">
                <div class="card-body p-0">
                  <p class="event_date small mb-2">{{item.date}}</p>
                  <p class="event_title H6_Heading mb-2">{{item.title}}</p>
                  <p class="event_content body">{{item.content}}</p>
                </div>
              </div>
            </div>
          </div>
          <GoToButton :value="'查看更多'"/>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <SectionModal
      :modalTitle= "'最新活動'"
      :listItem="currentEvent"
      :allList="eventList"
    />
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import GoToButton from '../components/GoToButton.vue'
import SectionModal from './EventModal.vue'
import { Modal } from 'bootstrap'
import event01 from '@/assets/image/event01.png'
import event02 from '@/assets/image/event02.png'
import event03 from '@/assets/image/event03.png'

export default {
  data () {
    return {
      eventList: [
        {
          id: '01',
          imgUrl: event01,
          date: '2023/12/26',
          title: '參與台北寵物論壇，爭取貓咪友善環境',
          content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
        },
        {
          id: '02',
          imgUrl: event02,
          date: '2023/12/24',
          title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
          content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！'
        },
        {
          id: '03',
          imgUrl: event03,
          date: '2023/12/20',
          title: '收容所模特兒大比拼！',
          content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'
        },
        {
          id: '04',
          imgUrl: event01,
          date: '2023/12/26',
          title: '參與台北寵物論壇，爭取貓咪友善環境',
          content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！'
        }
      ],
      currentEvent: null
    }
  },
  components: {
    SectionTitle,
    GoToButton,
    SectionModal
  },
  mounted () {},
  computed: {
    otherEvent () {
      const result = this.eventList.filter((item, index) => {
        return index >= 1
      })
      return result
    }
  },
  methods: {
    openEventModal (item) {
      this.currentEvent = item
      const myModal = document.getElementById('eventModal')
      const ins = Modal.getOrCreateInstance(myModal)
      ins.show()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.main_event {
  cursor: pointer
}

.event_main_date,
.event_date {
  color: $text_primary-500;
}
.event_main_title {
  color: $text_primary-700;
}
.event_title {
  color: $text_primary-700;
}
.event_main_content,
.event_content {
  color: $text_primary-700;
}
.event_img {
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
