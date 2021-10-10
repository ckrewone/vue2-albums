<template>
  <vs-col
    vs-type="flex"
    lg="3"
    sm="4"
    xs="6"
    vs-align="center"
    class="card"
  >
    <vs-card type="4">
      <template #title>
        <h3 class="title" @click="$router.push('/details/' + album.id)">
          {{ album.title }}
        </h3>
      </template>
      <template #text>
        <a>( id:{{ album.id }} )</a>
      </template>
      <template #img>
        <div class="img">
          <i class="bx bx-photo-album bx-burst-hover big-icon"></i>
        </div>
      </template>
      <template #interactions>
        <vs-button danger icon @click="addOrDeleteFavorite(album.id)">
          <i
            :class="
              isFavorite(album.id)
                ? 'bx bxs-heart bx-tada-hover'
                : 'bx bx-heart bx-tada-hover'
            "
          ></i>
        </vs-button>
        <vs-button icon @click="$router.push('/edit/' + album.id)">
          <i class="bx bx-edit bx-tada-hover"></i>
        </vs-button>
      </template>
    </vs-card>
  </vs-col>
</template>

<script lang='ts'>
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "CardGroup",
  data() {
    return {
      visibleAlbumsCount: 10,
    };
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("favorite", ["isFavorite"]),
  },
  methods: {
    ...mapActions("favorite", ["addOrDeleteFavorite"]),
  },
});
</script>