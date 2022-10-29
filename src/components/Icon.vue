<template>
  <Component :is="icon" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Face, Close } from '../icon';

export default defineComponent({
  name: 'FaceIcon',
  components: {
    Face,
    Close,
  },
  props: {
    icon: {
      type: String as PropType<'Face' | 'Close' | 'Search'>,
      required: true
    }
  }
});
</script>

<style scoped>
</style>
