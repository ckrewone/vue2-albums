<template>
      <vs-dialog blur v-model="active" scroll @close="close">
        <template #header>
          <div>
          <h2 class="not-margin">
            Szczegóły albumu:
          </h2>
          <h3 class="not-margin">
            <i class='bx bx-image-alt bx-tada'></i>
              {{title}}
            <i class='bx bx-image-alt bx-tada'></i>
          </h3>
          </div>
          <vs-button danger icon @click="addOrDeleteFavorite(id)">
            <i :class='isFavorite(id) ? "bx bxs-heart bx-tada-hover" : "bx bx-heart bx-tada-hover"'></i>
          </vs-button>
        </template>
      <vs-row justify="center">
        <template v-if="photos.length">
        <template v-for="(photo, index) in photos">
        <vs-col vs-type="flex" :key="index" vs-justify="center" vs-align="center" w="4">
         <vs-card type="5">
            <template #title>
              <h3>{{ photo.title }}</h3>
            </template>
            <template #text>
              <a>(id:{{photo.id}})</a>
            </template>
            <template #img>
              <img :src=photo.thumbnailUrl alt="">
            </template>
          </vs-card>
        </vs-col>
        </template>
        </template>
        <template v-else>
          <div ref='load' class="loader"></div>
        </template>
      </vs-row>
      </vs-dialog>
</template>

<script lang='ts'>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue';

export default Vue.extend({
  name: 'AlbumDetails',
  data() {
    return {
      active: false,     
    }
  },
  props: ['id'],
  mounted() {
    this.active = true
  },
  computed: {
      ...mapGetters('albums', ['getPhotosByAlbumId', 'getAlbumById']),
      ...mapGetters('favorite', ['isFavorite']),
      photos() {
        return this.getPhotosByAlbumId(this.id)
      },
      title() {
        return this.getAlbumById(this.id).title
      }
  },
  methods: {
      ...mapActions('albums', ['fetchPhotosByAlbumId']),
      ...mapActions('favorite', ['addOrDeleteFavorite']),
      close() {
         this.active = false
         setTimeout(() => {
           this.$router.push('/')
         }, 100)
      }
  }
});
</script>
<style scoped>
.loader {
  height: 100px;
  width: 100px;
}
</style>