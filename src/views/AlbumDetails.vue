<template>
      <vs-dialog blur v-model="active" @close="close">
        <template #header>
          <h4 class="not-margin">
            Szczegóły albumu
          </h4>
        </template>
      <vs-row justify="center">
        <template v-if="photos.length">
        <template v-for="(photo, index) in photos">
        <vs-col vs-type="flex" :key="index" vs-justify="center" vs-align="center" w="4">
         <vs-card type="1">
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
      active: true,
      loading: (this as any).$vs.loading({
            type: 'scale',
            target: this.$refs.load,
            text: 'Ladujemy zdjecia',
            opacity: 0
          })      
    }
  },
  props: ['id'],
  async mounted() {
    await (this as any).fetchPhotosByAlbumId(this.id);
    // console.log(this.$refs.load)
    // setTimeout(() => {
      (this as any).loading.close();
    // }, 2000)
  },
  computed: {
      ...mapGetters('photos', ['getPhotosByAlbumId']),
      photos() {
        return this.getPhotosByAlbumId(this.id)
        // return [];
      }
  },
  methods: {
      ...mapActions('photos', ['fetchPhotosByAlbumId']),
      close() {
        this.$router.push('/')
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