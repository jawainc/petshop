<template>
  <v-carousel class="mt-10" >
    <v-carousel-item
      v-for="(item, i) in blogsList"
      :key="item.uuid"
    >
      <v-sheet
        height="100%"
        tile
      >
        <v-row
          class="fill-height"

        >
          <v-col cols="6">
            <v-row class="fill-height green--text" align="center" justify="center">
              <h3>{{item.title}}</h3>
            </v-row>
          </v-col>
          <v-col cols="6">
            <img alt="" src="/qtkpOxCpl0Y.png">
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import Blog from "~/types/blog";

export default Vue.extend({
  name: "Blogs",
  props: {
    blogsList: {
      type: Array as PropType<Blog[]>,
      required: true
    }
  },
})
</script>
