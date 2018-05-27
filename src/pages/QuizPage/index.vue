<template>
  <transition name="slide-up" mode="out-in">
    <div class="quiz">
      <transition name="fade">
        <VoiceButton
          class="button"
          :mute="mute"
          v-if="questions[currentQuestion].questionAudio"
          @switchMute="switchMute"
        />
      </transition>
      <transition name="slide">
        <h1 class="question" v-if="show" @click="replay">
          {{ questions[currentQuestion].question }}
        </h1>
      </transition>
      <ul class="option-container">
        <Option
          v-if="show"
          v-for="(item, index) in questions[currentQuestion].options"
          :key="item.text"
          :text="item.text"
          :imgSrc="item.imgSrc"
          :active="optionsStatus[index]"
          @click.native.prevent="clickOption(index)"
        />
      </ul>
      <audio
        ref="audio"
        :src="questions[currentQuestion].questionAudio"
      >浏览器版本过低！</audio>
    </div>
  </transition>
</template>

<script>
import Option from '@/components/Option';
import VoiceButton from '@/components/VoiceButton';
import { getLocal, setLocal } from '@/utils/cache';
import { wxShare } from '@/plugins/wx';
import questions from '../../../data/questions';

export default {
  name: 'QuizPage',
  components: { Option, VoiceButton },
  data() {
    return {
      mute: getLocal('mute') == null ? true : getLocal('mute'),
      questions,
      show: true,
      currentQuestion: 0,
      optionsStatus: [],
      isAnswered: false
    };
  },
  methods: {
    switchMute() {
      this.mute = !this.mute;
      this.$refs.audio.muted = this.mute;
      setLocal('mute', this.mute);
    },
    replay() {
      if (this.questions[this.currentQuestion].questionAudio) {
        this.$refs.audio.pause();
        this.$refs.audio.currentTime = 0;
        this.$refs.audio.play();
      }
    },
    clickOption(index) {
      if (this.isAnswered) return; // 防止多次点击
      this.$refs.audio.pause();
      this.$set(this.optionsStatus, index, true);
      setTimeout(() => {
        this.show = false;
        this.$set(this.optionsStatus, index, false);
        this.showNextQuestion();
      }, 200);
    },
    showNextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion += 1;
        setTimeout(() => {
          this.show = true;
          if (this.questions[this.currentQuestion].questionAudio) {
            setTimeout(() => {
              this.$refs.audio.play();
            }, 1000);
          }
        }, 1000);
      } else {
        this.$router.replace('/result');
      }
    }
  },
  watch: {
    optionsStatus() {
      this.isAnswered = this.optionsStatus.some(element => element);
    }
  },
  mounted() {
    this.$refs.audio.muted = this.mute;
    wxShare();
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
