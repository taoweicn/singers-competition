<template>
  <div class="container">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Option',
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
