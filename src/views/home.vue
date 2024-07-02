<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from '../api';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      products: [] as Array<{ id: number; name: string }>
    };
  },
  created() {
    api.getProducts().then(response => {
      this.products = response.data;
    });
  }
});
</script>
