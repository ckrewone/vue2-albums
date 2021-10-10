<template>
  <vs-dialog blur v-model="active" scroll @close="close">
    <template #header>
      <div>
        <h2 class="not-margin">Szczegóły albumu:</h2>
        <h3 class="not-margin">
          {{ title }}
        </h3>
      </div>
      <vs-button danger icon @click="addOrDeleteFavorite(id)">
        <i
          :class="
            isFavorite(id)
              ? 'bx bxs-heart bx-tada-hover'
              : 'bx bx-heart bx-tada-hover'
          "
        ></i>
      </vs-button>
    </template>
    <photos-card-group :id="id" />
  </vs-dialog>
</template>

<script lang='ts'>
import { mapGetters, mapActions } from "vuex";
import PhotosCardGroup from "../components/CardGroup/PhotosCardGroup.vue";
import Vue from "vue";

export default Vue.extend({
  name: "AlbumDetails",
  components: { PhotosCardGroup },
  data: () => ({
    active: false,
  }),
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.active = true;
  },
  computed: {
    ...mapGetters("albums", ["getPhotosByAlbumId", "getAlbumById"]),
    ...mapGetters("favorite", ["isFavorite"]),
    photos() {
      return this.getPhotosByAlbumId(this.id);
    },
    title() {
      return this.getAlbumById(this.id).title;
    },
  },
  methods: {
    ...mapActions("albums", ["fetchPhotosByAlbumId"]),
    ...mapActions("favorite", ["addOrDeleteFavorite"]),
    close() {
      this.active = false;
      setTimeout(() => {
        this.$router.push("/");
      }, 100);
    },
  },
});
</script>