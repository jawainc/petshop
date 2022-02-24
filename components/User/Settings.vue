<template>
  <v-dialog
    v-model="dialog"
    width="900"
  >
    <v-card>
      <v-card-title class="d-flex justify-end">
        <svg @click="dialog=false" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" fill-opacity="0.54"/>
        </svg>
      </v-card-title>
      <v-card-title class="d-flex justify-center">
        User Settings
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="2">
            <img src="/avatar-small.png">
          </v-col>
          <v-col cols="1">
            <v-divider
              class="mx-4"
              vertical
            ></v-divider>
          </v-col>
          <v-col cols="3">
            <div>
              <div>Name</div>
              <div>{{profile.first_name}} {{profile.last_name}}</div>
            </div>
            <div class="mt-3">
              <div>Date Joined</div>
              <div>{{profile.email_verified_at | parseDate}}</div>
            </div>
          </v-col>
          <v-col cols="3">
            <div>
              <div>Phone Number</div>
              <div>{{profile.phone_number}}</div>
            </div>
            <div class="mt-3">
              <div>Email</div>
              <div>{{profile.email}}</div>
            </div>
          </v-col>
          <v-col cols="3">
            <div>
              <div>Address</div>
              <div>{{profile.address}}</div>
            </div>
            <div class="mt-3">
              <div>Marketing Preferences</div>
              <div>N/A</div>
            </div>
          </v-col>
        </v-row>

      </v-card-text>

      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              UUID
            </th>
            <th class="text-left">
              Status
            </th>
            <th class="text-left">
              Download
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in orders"
            :key="item.uuid"
          >
            <td>{{ item.uuid }}</td>
            <td>{{ item.order_status[0].title }}</td>
            <td>
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.616211" width="30" height="30" rx="4" fill="#DDE3E2"/>
                <path d="M21.4495 14.5V20.3333H9.78288V14.5H8.11621V20.3333C8.11621 21.25 8.86621 22 9.78288 22H21.4495C22.3662 22 23.1162 21.25 23.1162 20.3333V14.5H21.4495ZM16.4495 15.0583L18.6079 12.9083L19.7829 14.0833L15.6162 18.25L11.4495 14.0833L12.6245 12.9083L14.7829 15.0583V7H16.4495V15.0583Z" fill="black" fill-opacity="0.54"/>
              </svg>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>

    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import User from "@/types/user";
import Orders from "@/types/orders";

export default Vue.extend({
  name: "Settings",
  data() {
    return{
      profile: {} as User,
      orders: [] as Orders[]
    }
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.user.showUserSettings
      },
      set(value) {
        this.$store.commit("user/showUserSettings", value)
      }

    }
  },
  filters: {
    parseDate(value: string) {
      return new Date(Date.parse(value)).toLocaleDateString("en-US");
    }
  },
  mounted() {
    this.loadProfile()
    this.loadOrders()
  },
  methods: {
    async loadProfile() {
      this.profile = (await this.$axios.$get("/api/v1/user")).data
      console.log(this.profile)
    },
    async loadOrders() {
      this.orders = (await this.$axios.$get("/api/v1/user/orders")).data
      console.log(this.orders)
    }
  }
})
</script>

