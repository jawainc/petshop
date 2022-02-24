<template>
  <v-carousel >
    <v-carousel-item
      v-for="(item, i) in promotionsList"
      :key="item.uuid"
    >
      <v-sheet
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="white--text po">
            <img alt="" src="/w6elADh_jww.png">
            <v-overlay absolute>
              <h2>{{item.title}}</h2>
              <p>{{item.metadata.valid_from}}</p>
            </v-overlay>


          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
  import Vue, { PropOptions } from "vue"
  import Promotion from "~/types/promotion";

  export default Vue.extend({
    name: "Promotions",
    props: {
      promotionsList: {
        type: Array,
        required: true
      } as PropOptions<Promotion[]>
    },
  })
</script>
