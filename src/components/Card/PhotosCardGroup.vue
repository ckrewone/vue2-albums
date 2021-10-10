<template>
  <vs-row justify="space-around" class="row">
    <template v-for="(photo, index) in photos">
      <photo-card :key="index" :data="photo" />
    </template>
    <more-card @click="loadMore" :show="!isAllLoaded" />
  </vs-row>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import Vue from "vue";
import MoreCard from "./MoreCard.vue";
import PhotoCard from "./PhotoCard.vue";

export default Vue.extend({
  components: { MoreCard, PhotoCard },
  name: "PhotosCardGroup",
  data() {
    return {
      visibleCount: 10,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapGetters("albums", ["getPhotosByAlbumId"]),
    photos() {
      return this.getPhotosByAlbumId(this.id).slice(0, this.visibleCount)
    },
    isAllLoaded(): boolean {
      return this.visibleCount >= this.getPhotosByAlbumId(this.id).length;
    },
  },
  methods: {
    loadAlbums() {
      this.visibleCount += 10;
    },
  },
});
</script>