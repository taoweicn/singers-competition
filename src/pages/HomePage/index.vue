<template>
  <transition name="slide" mode="out-in">
    <div class="home">
      <img class="voice-button" :src="voiceButton" alt="voice">
      <img class="cover" src="../../assets/home_pattern.png" alt="cover">
      <router-link to="/quiz">
        <button class="begin-button"></button>
      </router-link>
    </div>
  </transition>
</template>

<script>
import voiceButton from '@/assets/home_vioce.png';

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
