<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Icon icon="Face" style="font-size: 30px;" />
  <MaterialFontIcon name="face"  />
  <Icon icon="Close" />
  <MaterialFontIcon name="close" style="font-size: 30px;" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './components/Icon.vue'
import MaterialFontIcon from './components/MaterialFontIcon'

export default defineComponent({
  name: 'App',
  components: {
    Icon,
    MaterialFontIcon
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
