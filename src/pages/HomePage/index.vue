<template>
  <div class="container">
    <img class="voice-button" :src="voiceButton" alt="voice">
    <img class="cover" src="../../assets/home_pattern.png" alt="cover">
    <button class="begin-button"></button>
  </div>
</template>

<script>
import voiceButton from '../../assets/home_vioce.png';

export default {
  name: 'HomePage',
  data() {
    return {
      voiceButton
    };
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
