<template>
  <div>
    <i class="fa fa-solid fa-home"></i>
    <h1 class="text-center">{{ store.prova }}</h1>
  </div>
</template>

<script>
import { store } from './data/store.js';
  export default {
    name: 'App',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>