<template>
  <v-app>
    <v-main>
      <CalculatorComponent />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import CalculatorComponent from "./components/calculator/CalculatorComponent.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    CalculatorComponent,
  },

  data: () => ({
    //
  }),
});
</script>
