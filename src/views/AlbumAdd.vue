  <template>
      <vs-dialog blur v-model="active" @close="close">
        <template #header>
          <h4 class="not-margin">
            Dodaj Album
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
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'AlbumAdd',
  data:() => ({
        active: true,
        title: '',
      }),
  methods: {
    ...mapActions('albums', ['addAlbum']),
    close() {
      this.$router.push('/');
    },
    save() {
      (this as any).addAlbum({
        title: this.title
      });
      this.close();
    }
  },
});
</script>

<style scoped>
.form {
    width: 100%;
}
</style>