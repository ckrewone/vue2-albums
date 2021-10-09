  <template>
      <vs-dialog blur v-model="active">
        <template #header>
          <h4 class="not-margin">
            Edytuj Album
          </h4>
        </template>

        <div class="form">
        <vs-row justify="center">
             <vs-input v-model="input1" placeholder="Tytuł"/>
        </vs-row>
        <vs-row justify="center">
             <vs-input v-model="input1" placeholder="Tytuł"/>
        </vs-row>
        </div>
        <template #footer>
          <div class="footer-dialog">
            <vs-button block>
              Zapisz
            </vs-button>
          </div>
        </template>
      </vs-dialog>
  </template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Modal',
  data:() => ({
        active: true,
        input1: '',
        input2: '',
        checkbox1: false
      }),
});
</script>

<style scoped>
.form {
    width: 100%;
}
</style>