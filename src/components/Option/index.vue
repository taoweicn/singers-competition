<template>
  <transition name="slide">
    <li class="option">
      <img
        class="option-img"
        v-if="imgSrc"
        :src="imgSrc"
        alt="option"
      >
      <button :class="{ active }" class="option-button">
        {{ text }}
      </button>
    </li>
  </transition>
</template>

<script>
export default {
  name: 'Option',
  props: {
    text: String,
    imgSrc: String,
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
