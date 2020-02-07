<template>
  <div id="app">
    <Order />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    Order: () => import("@/components/order")
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: right; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
