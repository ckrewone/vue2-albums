<template>
    <vs-card :type="type">
      <template #title>
        <h3 class="title" @click="$emit('click')">
          {{ title }}
        </h3>
      </template>
      <template #text>
        <a>( id:{{ id }} )</a>
      </template>
      <template #img>
        <slot name="img" />
      </template>
      <template #interactions>
        <slot name="interactions" />
      </template>
    </vs-card>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "BaseCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
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