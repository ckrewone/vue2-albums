<template>
    <div>
      <router-view/>
      <h1>
        <i class='bx bx-photo-album bx-tada'></i>
        Lista albumów
        <i class='bx bx-photo-album bx-tada'></i>
      </h1>
    <card-group/>
    </div>
</template>

<script>
import CardGroup from '../components/Card/CardGroup.vue';

export default {
  components: { CardGroup },
  name: 'AlbumList',

}
</script>
