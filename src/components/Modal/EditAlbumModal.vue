<template>
  <base-album-modal @save="save" :defaultTitle="title" class="modal-edit">
    <template #header>
      <h3>Edytuj album</h3>
    </template>
  </base-album-modal>
</template>

<script lang='ts'>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import BaseAlbumModal from "./BaseAlbumModal.vue";

export default Vue.extend({
  components: { BaseAlbumModal },
  name: "EditAlbumModal",
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  methods: {
    ...mapActions("albums", ["editAlbum"]),
    save(title: string) {
      this.editAlbum({
        id: this.id,
        title,
      });
    },
  },
  computed: {
    ...mapGetters("albums", ["getAlbumById"]),
    title(): string {
      return this.getAlbumById(this.id)?.title ?? "";
    },
  },
});
</script>