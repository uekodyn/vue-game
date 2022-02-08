<template>
  <div id="app">
    <div id="nav" />
    <router-view/>
  </div>
</template>


<script>
  export default {
    name: 'App',
  };
</script>

<style lang="scss">
@import './styles/reset';

#app {
		font-family: 'Barlow Semi Condensed', Helvetica, Arial, sans-serif;

}
</style>
