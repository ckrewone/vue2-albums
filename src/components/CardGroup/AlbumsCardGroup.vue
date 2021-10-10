<template>
  <vs-row justify="space-around" class="row">
    <template v-for="(album, index) in albums">
      <album-card :key="index" :album="album" />
    </template>
    <add-album-card />
    <more-card @click="loadMoreAlbums" :show="!isAllAlbumsLoaded" />
  </vs-row>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import Vue from "vue";
import MoreCard from "../Card/MoreCard.vue";
import AlbumCard from "../Card/AlbumCard.vue";
import AddAlbumCard from "../Card/AddAlbumCard.vue";
import { Album } from "@/store/albums/Album";

export default Vue.extend({
  components: { MoreCard, AlbumCard, AddAlbumCard },
  name: "AlbumsCardGroup",
  data() {
    return {
      visibleCount: 10,
    };
  },
  computed: {
    ...mapGetters("albums", ["getAlbums"]),
    albums(): Album[] {
      return this.getAlbums.slice(0, this.visibleCount);
    },
    isAllAlbumsLoaded(): boolean {
      return this.visibleCount >= this.getAlbums.length;
    },
  },
  methods: {
    loadMoreAlbums() {
      this.visibleCount += 10;
    },
  },
});
</script>