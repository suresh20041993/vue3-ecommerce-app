<!-- src/components/Header.vue -->
<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/product/1">Product</router-link>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Header'
  });
  </script>
  