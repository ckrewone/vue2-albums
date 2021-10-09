  <template>
      <vs-dialog blur v-model="active" @close="close">
        <template #header>
          <h4 class="not-margin">
            Edytuj Album
          </h4>
        </template>

        <div class="form">
        <vs-row justify="center">
             <vs-input v-model="title" placeholder="Tytuł"/>
        </vs-row>
        </div>
        <template #footer>
          <div class="footer-dialog">
            <vs-button block @click="save">
              Zapisz
            </vs-button>
          </div>
        </template>
      </vs-dialog>
  </template>

<script lang='ts'>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'AlbumEdit',
  data:() => ({
        active: true,
        title: '',
      }),
  props: ['id'],
  methods: {
    ...mapActions('albums', ['editAlbum']),
    close() {
      this.$router.push('/');
    },
    save() {
      (this as any).editAlbum({
        id: this.id,
        title: this.title
      });
      this.close();
    }
  },
  mounted() {
    this.title = this.album.title
  },
  computed: {
    ...mapGetters('albums', ['getAlbumById']),
    album(): any {
      return this.getAlbumById(this.id)
    }
  }
});
</script>

<style scoped>
.form {
    width: 100%;
}
</style>