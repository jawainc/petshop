<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card  class="pb-2 px-10">
        <v-alert v-if="errorMessage"
          border="top"
          color="red lighten-2"
          dark
        >
          {{errorMessage}}
        </v-alert>
        <v-card-title class="d-flex justify-end">
          <svg @click="dialog=false" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" fill-opacity="0.54"/>
          </svg>
        </v-card-title>

        <v-card-title class="d-flex justify-center">
          <img alt="" src="/static/petson-logo.png" />
        </v-card-title>

        <v-card-title class="d-flex justify-center">
          Login
        </v-card-title>


          <v-text-field
            label="Email"
            placeholder="Email"
            outlined
            dense
            v-model="form.email"
            class="email-field"
          ></v-text-field>
          <v-text-field
            dense
            outlined
            type="password"
            label="password"
            v-model="form.password"
            class="password-field"
          ></v-text-field>

        <v-container

          fluid
        >
          <v-checkbox
            label="remember me"
          ></v-checkbox>
        </v-container>

        <v-btn @click="submit()" class="success mb-10 login-btn" block>Login</v-btn>

      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      formSubmitting: false,
      errorMessage: "",
      form: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.user.showLoginForm
      },
      set(value) {
        this.$store.commit("user/setLoginForm", value)
      }

    }
  },
  methods: {
    submit(){
    this.formSubmitting = true;
      this.errorMessage = ""
      this.$axios.post('/api/v1/user/login', this.form)
        .then((response) => {
          const data = response.data
          console.log(data)
          if(response.status === 200 && data.success) {
            this.$store.commit('user/setUserLogin', true);
            this.$store.commit('user/setLoginForm', false);
            this.$axios.setToken(data.data.token, 'Bearer')
          }
        })
        .catch((error) => {
          this.errorMessage = "invalid username/password"
        })
      .finally(() =>{
        this.formSubmitting = false;
      })
    }
  }
})
</script>
