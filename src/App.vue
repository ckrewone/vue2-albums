<template>
  <div id="app">
    <AlbumList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import AlbumList from './views/AlbumList.vue'

export default Vue.extend({
  name: 'App',
  components: { AlbumList },
  methods: {
      ...mapActions('albums', ['fetchAlbums', 'fetchPhotos']),
  },
  async mounted() {
      await this.fetchAlbums();
      await this.fetchPhotos();
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
