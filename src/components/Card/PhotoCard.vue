<template>
  <base-card :type="type" :title="photo.title" :id="photo.id.toString()">
    <template #img>
      <div class="img">
        <img :src="photo.url" alt="" />
      </div>
    </template>
  </base-card>
</template>

<script lang='ts'>
import Vue from "vue";
import BaseCard from "./BaseCard.vue";

export default Vue.extend({
  components: { BaseCard },
  name: "PhotoCart",
  props: {
    photo: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "1",
    },
  },
});
</script>