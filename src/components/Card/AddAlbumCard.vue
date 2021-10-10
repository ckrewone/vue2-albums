<template>
  <vs-col
    vs-type="flex"
    vs-justify="center"
    vs-align="center"
    lg="3"
    sm="4"
    xs="6"
    class="card"
  >
    <vs-card type="4" @click="$router.push('/add')">
      <template #text>
        <h3>Dodaj nowy album</h3>
      </template>
      <template #img>
        <div class="img">
          <i class="bx bx-book-add big-icon"></i>
        </div>
      </template>
    </vs-card>
  </vs-col>
</template>