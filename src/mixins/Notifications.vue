<script lang='ts'>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Notifications',
  methods: {
    ...mapActions('albums', ['addAlbum']),
    save(title: string) {
      this.addAlbum({
        title,
      });
    }
  },
  computed: {
      ...mapGetters('favorite', ['getCounter'])
  },
  watch: {
      getCounter(newVal: number, oldVal: number) {
          if(newVal === 5 && oldVal !== 6) {
            (this as any).$vs.notification({
            title: 'Powiadomienia',
            text: 'Gratulujemy! Dodałeś dzisiaj już 5 albumów do ulubionych'
          })
          }
      }
  }
});
</script>