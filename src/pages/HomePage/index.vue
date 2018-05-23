<template>
  <transition name="slide" mode="out-in">
    <div class="home">
      <VoiceButton class="button" :isShowText="true" />
      <img class="cover" src="../../assets/home_cassette.png" alt="cover">
      <div class="word-container">
        <img class="word" src="../../assets/home_font.png" alt="cover">
      </div>
      <router-link to="/quiz">
        <button class="begin-button"></button>
      </router-link>
      <footer class="copyright">
        <img class="logo" src="../../assets/result_logo.png" alt="bingyan">
        Powered by Bingyan Studio
      </footer>
    </div>
  </transition>
</template>

<script>
import VoiceButton from '@/components/VoiceButton';

export default {
  name: 'HomePage',
  components: { VoiceButton },
  mounted() {
    const imgs = document.getElementsByTagName('img');
    Array.prototype.forEach.call(imgs, (img) => {
      img.addEventListener('click', e => e.preventDefault());
    });
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
