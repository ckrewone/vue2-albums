<template>
  <base-album-modal @save="save" class="modal-add">
    <template #header>
      <h3>Dodaj nowy album</h3>
    </template>
  </base-album-modal>
</template>

<script lang='ts'>
import Vue from "vue";
import { mapActions } from "vuex";
import BaseAlbumModal from "./BaseAlbumModal.vue";

export default Vue.extend({
  components: { BaseAlbumModal },
  name: "AddAlbumModal",
  methods: {
    ...mapActions("albums", ["addAlbum"]),
    save(title: string) {
      this.addAlbum({
        title,
      });
    },
  },
});
</script>