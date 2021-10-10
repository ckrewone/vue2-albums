<template>
      <vs-row justify="center">
        <template v-for="(album, index) in albums">
        <vs-col vs-type="flex" :key="index" vs-justify="center" vs-align="center" w="4">
         <vs-card type="1" @click="$router.push('/details/' + album.id)">
            <template #title>
              <h3 class="title">{{ album.title }}</h3>
            </template>
            <template #text>
              <a>(id:{{album.id}})</a>
            </template>
            <template #img>
              <img src="../../assets/logo.png" alt="">
            </template>
            <template #interactions>
              <vs-button danger icon @click="addOrRemoveToFavorite(album)">
                <i :class='isFavorite(album) ? "bx bxs-heart" : "bx bx-heart"'></i>
              </vs-button>
              <vs-button icon @click="$router.push('/edit/' + album.id)">
                <i class='bx bx-edit'></i>
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
        </template>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
                     <vs-card type="1" @click="loadMoreAlbums" v-if="!isAllAlbumsLoaded">
            <template #title>
              <h3></h3>
            </template>
            <template #text>
              <h3>Załaduj więcej albumów</h3>
            </template>
            <template #img>
              <img src="../../assets/logo.png" alt="">
            </template>
          </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
          <vs-card type="1" @click="$router.push('/add')" v-if="!isAllAlbumsLoaded">
            <template #text>
              <h3>Dodaj nowy album</h3>
            </template>
            <template #img>
              <img src="../../assets/logo.png" alt="">
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
</template>

<script lang='ts'>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue';

export default Vue.extend({
  name: 'CardGroup',
  data() {
      return {
          visibleAlbumsCount: 10,
      }
  },
  props: {
    msg: String
  },
  computed: {
      ...mapGetters('albums', ['getAlbums']),
      ...mapGetters('favorite', ['getFavorites', 'getCounter']),
      albums(): any {
          return (this.getAlbums as any[]).slice(0, this.visibleAlbumsCount);
      },
      isAllAlbumsLoaded(): boolean {
          return this.visibleAlbumsCount >= this.getAlbums.length
      }
  },
  methods: {
      ...mapActions('favorite', ['addOrDeleteFavorite']),
      loadMoreAlbums() {
        this.visibleAlbumsCount += 10
      },
      addOrRemoveToFavorite(album: any) {
          this.addOrDeleteFavorite(album);
      },
      isFavorite(album: any): boolean {
          return this.getFavorites.findIndex((el: any) => el.id === album.id) !== -1
      }
  },
  watch: {
      getCounter() {
          if(this.getCounter === 5) {
             (this as any).$vs.notification({
                position: 'top-right',
                title: 'Powiadomienie',
                text: `Gratulujemy! Dodałeś dzisiaj już 5 albumów do ulubionych`
          })
          }
      }
  }
});
</script>

<style scoped>
.title:hover {
  text-decoration: underline;
}
</style>