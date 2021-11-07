<template>
    <vs-card :type="type" @click="$emit('click')" class="more-card">
      <template #title />
      <template #text>
        <h3>Załaduj więcej</h3>
      </template>
      <template #img>
        <div class="img">
          <i class="bx bx-dots-horizontal-rounded big-icon"></i>
        </div>
      </template>
    </vs-card>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "MoreCard",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "4",
    },
  },
});
</script>