<template>
  <div id="card" for="test">
    dsa
    <object id="test" :data="require('@/assets/Agreement.svg')" type="image/svg+xml" style="width: 200px" class="svg">
    </object>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'testSvg',
  props: {
  },
  setup() {
    // onMounted(() => {
    //   // @ts-ignore
    //   const icon = document.querySelector('.svg')?.contentDocument || null
    //   console.log(icon)
    // })
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
