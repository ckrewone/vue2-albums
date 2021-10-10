<template>
  <edit-album-modal :id="id" />
</template>

<script lang='ts'>
import Vue from 'vue';
import EditAlbumModal from '@/components/Modal/EditAlbumModal.vue';

export default Vue.extend({
  components : { EditAlbumModal },
  name: 'AlbumEdit',
  props: ['id'],
});
</script>