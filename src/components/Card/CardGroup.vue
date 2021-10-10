<template>
      <vs-row justify="space-around" class="row">
        <template v-for="(album, index) in albums">
        <vs-col vs-type="flex" :key="index" lg="3" sm="4" xs="6"  vs-align="center" class="card">
         <vs-card type="4">
            <template #title>
              <h3 class="title" @click="$router.push('/details/' + album.id)">{{ album.title }}</h3>
            </template>
            <template #text>
              <a>(id:{{album.id}})</a>
            </template>
            <template #img>
              <div class="img">
                <i class='bx bx-photo-album bx-burst-hover big-icon'></i>
              </div>
            </template>
            <template #interactions>
              <vs-button danger icon @click="addOrDeleteFavorite(album.id)">
                <i :class='isFavorite(album.id) ? "bx bxs-heart bx-tada-hover" : "bx bx-heart bx-tada-hover"'></i>
              </vs-button>
              <vs-button icon @click="$router.push('/edit/' + album.id)">
                <i class='bx bx-edit bx-tada-hover'></i>
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
        </template>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
          <vs-card type="4" @click="$router.push('/add')" v-if="!isAllAlbumsLoaded">
            <template #text>
              <h3>Dodaj nowy album</h3>
            </template>
            <template #img>
              <div class="img">
                <i class='bx bx-book-add bx-burst-hover big-icon'></i>
              </div>
            </template>
          </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
            <vs-card type="4" @click="loadMoreAlbums" v-if="!isAllAlbumsLoaded">
            <template #title>
              <h3></h3>
            </template>
            <template #text>
              <h3>Załaduj więcej albumów</h3>
            </template>
            <template #img>
              <div class="img">
                <i class='bx bx-dots-horizontal-rounded bx-burst-hover big-icon' ></i>
              </div>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
</template>

<script lang='ts'>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'CardGroup',
  data() {
      return {
          visibleAlbumsCount: 10,
      }
  },
  computed: {
      ...mapGetters('albums', ['getAlbums']),
      ...mapGetters('favorite', ['isFavorite', 'getCounter']),
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

<style>
.title:hover {
  text-decoration: underline;
}
.big-icon {
  font-size: 10em;
}
.vs-card__text {
  width: 100%;
}
.img {
  padding-bottom: 60px;
}
.card {
  padding: 5px;
}
.row {
  left: 50%;
  max-width: 1200px;
  transform: translateX(-50%);
}
</style>