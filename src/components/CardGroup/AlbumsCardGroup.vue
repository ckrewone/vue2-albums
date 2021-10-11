<template>
  <vs-row justify="space-around" class="row">
    <template v-for="(album, index) in albums">
      <vs-col
        :key="'album_' + index"
        vs-type="flex"
        vs-align="center"
        lg="3"
        sm="4"
        xs="6"
        class="card"
      >
        <album-card :key="index" :album="album" />
      </vs-col>
    </template>
    <vs-col
      vs-type="flex"
      vs-align="center"
      lg="3"
      sm="4"
      xs="6"
      class="card"
    >
      <add-album-card />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-align="center"
      lg="3"
      sm="4"
      xs="6"
      class="card"
    >
      <more-card @click="loadMoreAlbums" :show="!isAllAlbumsLoaded" />
    </vs-col>
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