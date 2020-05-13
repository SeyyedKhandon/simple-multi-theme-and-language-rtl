<template>
  <div id="app">
    <button @click="changeTheme">theme switch</button>
    <button @click="changeLang">language switch</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="$t('helloworld.main_title')" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    this.loadTheme();
  },
  methods: {
    loadTheme() {
      document.body.classList.add("app-background");
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.documentElement.setAttribute("theme", "dark");
      } else {
        document.documentElement.setAttribute("theme", "light");
      }
    },
    changeTheme() {
      const theme = localStorage.getItem("theme");
      if (theme !== "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("theme", "light");
      }
    },
    changeLang() {
      const lang = localStorage.getItem("lang");
      this.changeRTL();
      if (lang === "en") {
        localStorage.setItem("lang", "fa");
        this.$i18n.locale = "fa";
      } else {
        localStorage.setItem("lang", "en");
        this.$i18n.locale = "en";
      }
    },
    changeRTL() {
      const rtl = localStorage.getItem("rtl");
      if (rtl === "0") {
        localStorage.setItem("rtl", 1);
        document.body.classList.remove("rtl");
      } else {
        localStorage.setItem("rtl", 0);
        document.body.classList.add("rtl");
      }
    }
  }
};
</script>

<style lang="scss">
@import "style/main";
.rtl {
  text-align: right;
  direction: rtl;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
