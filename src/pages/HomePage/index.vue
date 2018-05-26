<template>
  <transition name="slide" mode="out-in">
    <div class="home">
      <VoiceButton
        class="button"
        :mute="mute"
        :isShowText="true"
        @switchMute="switchMute"
      />
      <img class="cover" src="../../assets/home_cassette.png" alt="cover">
      <div class="word-container">
        <img class="word" src="../../assets/home_font.png" alt="cover">
      </div>
      <router-link to="/quiz">
        <button class="begin-button"></button>
      </router-link>
      <footer class="copyright">
        Powered by Bingyan Studio
      </footer>
    </div>
  </transition>
</template>

<script>
import VoiceButton from '@/components/VoiceButton';
import { getLocal, setLocal } from '@/utils/cache';

export default {
  name: 'HomePage',
  components: { VoiceButton },
  data() {
    return {
      mute: getLocal('mute') == null ? true : getLocal('mute')
    };
  },
  methods: {
    switchMute() {
      this.mute = !this.mute;
      setLocal('mute', this.mute);
    }
  },
  mounted() {
    const imgs = document.getElementsByTagName('img');
    Array.prototype.forEach.call(imgs, (img) => {
      img.addEventListener('click', e => e.preventDefault());
    });
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
