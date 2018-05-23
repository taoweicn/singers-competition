<template>
  <div class="voice">
    <img class="voice-button" :src="button" @click="switchMute" alt="voice">
    <p v-if="mute && isShowText" class="prompt">请注意打开声音</p>
  </div>
</template>

<script>
import voiceButton from '@/assets/question_vioce_.png';
import muteButton from '@/assets/question_vioce_X.png';
import { getLocal, setLocal } from '@/utils/cache';

export default {
  name: 'VoiceButton',
  props: {
    isShowText: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mute: getLocal('mute') || true
    };
  },
  computed: {
    button() {
      return this.mute ? muteButton : voiceButton;
    }
  },
  methods: {
    switchMute() {
      this.mute = !this.mute;
      setLocal('mute', this.mute);
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
