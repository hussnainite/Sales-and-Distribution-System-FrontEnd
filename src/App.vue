<template>
  <div id="app">
    <!-- <Admin></Admin> -->

    <router-view></router-view>
    <!-- <h1>Hello</h1> -->
    <!-- <Login> </Login> -->
  </div>
</template>

<script>
// import Login from "./components/login/Login.vue";

export default {
  name: "App",
  computed: {},
  components: {},
  beforeMount() {
    if (this.$route.name === null) {
      this.$router.push("Login").catch(() => {});
    }
  },
};
</script>

<style src="./assets/tailwind.css"></style>
