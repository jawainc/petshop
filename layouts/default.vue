<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
    <UserLogin v-if="!userLoggedIn" />
    <UserSettings v-if="showUserSettings && userLoggedIn" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DefaultLayout",
  computed: {
    userLoggedIn() {
      return this.$store.state.user.loggedIn
    },
    showUserSettings() {
      return this.$store.state.user.showUserSettings
    }
  }
})
</script>
