<template>
  <vs-card type="4" @click="$router.push('/add')" class="add-card">
    <template #text>
      <h3>Dodaj nowy album</h3>
    </template>
    <template #img>
      <div class="img">
        <i class="bx bx-book-add big-icon"></i>
      </div>
    </template>
  </vs-card>
</template>