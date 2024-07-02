<!-- src/views/Product.vue -->
<template>
  <div>
    <h1>Product</h1>
    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from '../api';

export default defineComponent({
  name: 'Product',
  data() {
    return {
      product: null as { id: number; name: string; description: string } | null
    };
  },
  created() {
    const id = this.$route.params.id;
    api.getProduct(id).then(response => {
      this.product = response.data;
    });
  }
});
</script>
