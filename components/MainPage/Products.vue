<template>
  <div class="my-10">
    <h2 class="green--text mb-5">{{category.title}}</h2>

    <v-row>
      <template v-for="product in productList">
        <v-col>
          <h6>{{product.title}}</h6>
          <small class="green--text">{{product.price}}</small>
        </v-col>
      </template>
    </v-row>

  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from "vue"
  import Category from "~/types/category";
  import Product from "~/types/product";

  export default Vue.extend({
    name: "Products",
    props: {
      category: {
        type: Object as PropType<Category>,
        required: true
      }
    },
    data() {
      return {
        productList: [] as Product[]
      }
    },
    mounted() {
      this.loadProducts()
    },
    methods: {
      async loadProducts() {
        this.productList = (await this.$axios.$get("/api/v1/products", {
          params: {
            limit: 5,
            category: this.category.uuid
          }
        })).data

      }
    }
  })
</script>

