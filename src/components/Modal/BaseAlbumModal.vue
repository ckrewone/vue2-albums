<template>
  <vs-dialog blur v-model="active" @close="close">
    <template #header>
      <h2 class="not-margin">
        <slot name="header" />
      </h2>
    </template>
    <ValidationProvider name="email" rules="alpha_spaces" v-slot="{ errors }">
      <vs-input v-model="title" label="Tytuł">
        <template #message-danger>
          {{ errors[0] }}
        </template>
      </vs-input>
    </ValidationProvider>
    <template #footer>
      <vs-button block @click="save">Zapisz</vs-button>
    </template>
  </vs-dialog>
</template>

<script lang='ts'>
import Vue from "vue";
import { validate } from "vee-validate";

export default Vue.extend({
  name: "BaseAlbumModal",
  data: () => ({
    active: false,
    title: "",
    valid: true,
  }),
  props: {
    defaultTitle: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    close() {
      this.active = false;
      setTimeout(() => {
        this.$router.push("/");
      }, 100);
    },
    save() {
      if (this.valid) {
        this.$emit("save", this.title);
        this.close();
      }
    },
  },
  watch: {
    async title(value: string) {
      const data : { valid: boolean } = await validate(value, "alpha_spaces");
      this.valid = data.valid;
    },
  },
  mounted() {
    this.title = this.defaultTitle;
    this.active = true;
  },
});
</script>

<style>
.vs-input-content {
  margin: 10px 0;
  width: calc(100%);
}
.vs-input {
  width: 100% !important;
}
</style>