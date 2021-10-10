<template>
  <vs-col
    vs-type="flex"
    lg="3"
    sm="4"
    xs="6"
    vs-align="center"
    class="card"
  >
    <vs-card type="4">
      <template #title>
        <h3 class="title">
          {{ data.title }}
        </h3>
      </template>
      <template #text>
        <a>( id:{{ data.id }} )</a>
      </template>
      <template #img>
        <img :src="data.thumbnailUrl" alt="" />
      </template>
    </vs-card>
  </vs-col>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "CardGroup",
  data() {
    return {
      visibleAlbumsCount: 10,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>