<template>
  <HeaderComponent />
  <MainComponent />
  
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'

  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent
    },
    data(){
      return{
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>