<template>
  <vs-col
    v-if="show"
    vs-type="flex"
    vs-justify="center"
    vs-align="center"
    lg="3"
    sm="4"
    xs="6"
    class="card"
  >
    <vs-card type="4" @click="$emit('click')">
      <template #title />
      <template #text>
        <h3>Załaduj więcej</h3>
      </template>
      <template #img>
        <div class="img">
          <i class="bx bx-dots-horizontal-rounded bx-burst-hover big-icon"></i>
        </div>
      </template>
    </vs-card>
  </vs-col>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "MoreCard",
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
});
</script>