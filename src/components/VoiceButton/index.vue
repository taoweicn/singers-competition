<template>
  <div class="voice">
    <img class="voice-button" :src="button" @click="$emit('switchMute')" alt="voice">
    <p v-if="mute && isShowText" class="prompt">请注意打开声音</p>
  </div>
</template>

<script>
import voiceButton from '@/assets/question_vioce_.png';
import muteButton from '@/assets/question_vioce_X.png';

export default {
  name: 'VoiceButton',
  props: {
    isShowText: {
      type: Boolean,
      default: false
    },
    mute: Boolean
  },
  computed: {
    button() {
      return this.mute ? muteButton : voiceButton;
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
