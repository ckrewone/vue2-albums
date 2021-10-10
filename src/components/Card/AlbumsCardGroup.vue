<template>
  <vs-row justify="space-around" class="row">
    <template v-for="(album, index) in albums">
      <album-card :key="index" :album="album" />
    </template>
    <add-album-card/>
    <more-card @click="loadMoreAlbums" :show="!isAllAlbumsLoaded" />
  </vs-row>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import Vue from "vue";
import MoreCard from "./MoreCard.vue";
import AlbumCard from "./AlbumCard.vue";
import AddAlbumCard from "./AddAlbumCard.vue";

export default Vue.extend({
  components: { MoreCard, AlbumCard, AddAlbumCard },
  name: "AlbumsCardGroup",
  data() {
    return {
      visibleAlbumsCount: 10,
    };
  },
  computed: {
    ...mapGetters("albums", ["getAlbums"]),
    albums(): any {
      return (this.getAlbums as any[]).slice(0, this.visibleAlbumsCount);
    },
    isAllAlbumsLoaded(): boolean {
      return this.visibleAlbumsCount >= this.getAlbums.length;
    },
  },
  methods: {
    loadMoreAlbums() {
      this.visibleAlbumsCount += 10;
    },
  },
});
</script>