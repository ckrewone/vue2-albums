<template>
  <base-card
    :title="album.title"
    :id="album.id.toString()"
    @click="$router.push('/details/' + album.id)"
  >
    <template #img>
      <div class="img">
        <i class="bx bx-photo-album big-icon"></i>
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
  </base-card>
</template>

<script lang='ts'>
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";
import BaseCard from "./BaseCard.vue";

export default Vue.extend({
  components: { BaseCard },
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