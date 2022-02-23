<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
   
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DefaultLayout",  
})
</script>
