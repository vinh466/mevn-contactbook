<!-- <template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <div>
    <router-link class="mr-2" to="/">Home</router-link>
    <router-link class="mr-2" to="/signin">Sign In</router-link>
    <router-link class="mr-2" to="/signup">Sign Up</router-link>
  </div>
  <component :is="layout">
    <router-view />
  </component>
</template> -->
<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "./components/AppHeader.vue";

export default {
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "div");
    return { layout };
  },
  components: { AppHeader },
};
</script>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
