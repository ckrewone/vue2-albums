<template>
  <div>
    <router-view />
    <h1>
      <i class="bx bx-photo-album bx-tada"></i>
      Lista albumów
      <i class="bx bx-photo-album bx-tada"></i>
    </h1>
    <album-card-group />
  </div>
</template>

<script>
import AlbumCardGroup from "../components/Card/AlbumsCardGroup.vue";

export default {
  components: { AlbumCardGroup },
  name: "AlbumList",
};
</script>
