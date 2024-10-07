<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold text-center mb-6">Shopping List App</h1>
    <ShoppingList />
  </div>
</template>

<script lang="ts">
import ShoppingList from './components/ShoppingList.vue';

export default {
  components: {
    ShoppingList,
  },
};
</script>

<!-- Tailwind styling -->
<style scoped>
.container {
  max-width: 600px;
}
</style>
