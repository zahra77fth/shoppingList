<template>
  <div class="container">
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
