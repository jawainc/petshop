<template>
  <v-container>
    <MainPageTheSearchField />
    <MainPagePromotions :promotions-list="promotionsList" />
    <template v-for="category in categoriesList">
      <MainPageProducts :category="category" />
    </template>
    <MainPageBlogs :blogs-list="blogList" />
  </v-container>

</template>

<script lang="ts" >
import Vue from "vue"
import Promotion from "@/types/promotion"
import Blog from "@/types/blog"
import Category from "~/types/category";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      promotionsList: [] as Promotion[],
      blogList: [] as Blog[],
      categoriesList: [] as Category[]
    }
  },
  mounted() {
    this.loadPromotions();
    this.loadBlogs();
    this.loadCategories();
  },
  methods: {
    async loadPromotions() {
      this.promotionsList = (await this.$axios.$get("/api/v1/main/promotions")).data
    },
    async loadBlogs() {
      this.blogList = (await this.$axios.$get("/api/v1/main/blog")).data
    },
    async loadCategories() {
      // this.categoriesList = [{
      //   "uuid": "05014f1e-eb83-3452-982b-00a2bd575226",
      //   "title": "wet pet food",
      //   "slug": "wet-pet-food",
      //   "created_at": "2022-02-20T00:00:26.000000Z",
      //   "updated_at": "2022-02-20T00:00:26.000000Z"
      // }]
      this.categoriesList = (await this.$axios.$get("api/v1/categories", {
        params: {
          limit: 2
        }
      })).data
    }
  }
})
</script>
