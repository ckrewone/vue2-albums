<template>
    <div>
    <card-group/>
    </div>
</template>

<script>
import CardGroup from '../components/Card/CardGroup.vue';
import { mapActions } from 'vuex';

export default {
  components: { CardGroup },
  name: 'AlbumList',
  methods: {
      ...mapActions('albums', ['fetchAlbums'])
  },
  mounted() {
      this.fetchAlbums();
  }
  
}
</script>
