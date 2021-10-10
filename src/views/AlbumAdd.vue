<template>
  <add-album-modal/>
</template>

<script lang='ts'>
import Vue from 'vue';
import AddAlbumModal from '@/components/Modal/AddAlbumModal.vue';

export default Vue.extend({
  components : { AddAlbumModal },
  name: 'AlbumAdd',
});
</script>