<script>
import AppHeader from './components/AppHeader.vue';
import ProjectList from './pages/ProjectList.vue';

export default {

  components: {
    AppHeader,
    // AppMain
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
