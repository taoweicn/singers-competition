<template>
  <transition name="slide-up" mode="out-in">
    <div class="quiz">
      <VoiceButton class="button" />
      <transition name="slide">
        <h1 class="question" v-if="show">
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
      <autio>浏览器版本过低！</autio>
    </div>
  </transition>
</template>

<script>
import Option from '@/components/Option';
import VoiceButton from '@/components/VoiceButton';
import questions from '../../../data/questions';

export default {
  name: 'QuizPage',
  components: { Option, VoiceButton },
  data() {
    return {
      questions,
      show: true,
      currentQuestion: 0,
      optionsStatus: [],
      isAnswered: false
    };
  },
  methods: {
    clickOption(index) {
      if (this.isAnswered) return; // 防止多次点击
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
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
