<template>
  <vs-row justify="space-around" class="row">
    <template v-for="(photo, index) in photos">
      <vs-col :key="'photos_' + index" vs-type="flex" lg="6" sm="6" xs="12">
        <photo-card :photo="photo" :type="type" />
      </vs-col>
    </template>
    <vs-col vs-type="flex" lg="6" sm="6" xs="12">
      <more-card @click="loadMore" :show="!isAllLoaded" :type="type" />
    </vs-col>
  </vs-row>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import Vue from "vue";
import MoreCard from "../Card/MoreCard.vue";
import PhotoCard from "../Card/PhotoCard.vue";
import { Photo } from "@/store/albums/Photo";

export default Vue.extend({
  components: { MoreCard, PhotoCard },
  name: "PhotosCardGroup",
  data() {
    return {
      visibleCount: 10,
      type: "5",
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("albums", ["getPhotosByAlbumId"]),
    photos(): Photo[] {
      return this.getPhotos.slice(0, this.visibleCount);
    },
    getPhotos(): Photo[] {
      return this.getPhotosByAlbumId(this.id);
    },
    isAllLoaded(): boolean {
      return this.visibleCount >= this.getPhotosByAlbumId(this.id).length;
    },
  },
  methods: {
    loadMore() {
      this.visibleCount += 10;
    },
  },
});
</script>