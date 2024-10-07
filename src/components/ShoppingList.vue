<template>
  <div class="p-4">
    <header class="flex justify-end mb-4">
      <button @click="deleteCheckedItems" class="bg-gray-400 hover:bg-gray-800 text-white py-1 px-4 rounded">
        Trash
      </button>
    </header>

    <div v-if="isLoading" class="text-center">
      <p>Loading...</p>
    </div>

    <div v-if="!isLoading && todoList.length === 0" class="text-center">
      <p>No items found.</p>
    </div>

    <ul v-else class="space-y-2">
      <li v-for="product in todoList" :key="product.id">
        <ProductItem :product="product" :fallbackImage="fallbackImage" />
      </li>
    </ul>

    <div class="flex gap-2 mt-4">
      <input
          v-model="newItem"
          placeholder="Add new item ..."
          class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
      <button @click="addTodo" class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
        Add
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProductItem from './ProductItem.vue';
import { Product } from '../types/types';

export default {
  components: {
    ProductItem,
  },
  setup() {
    const todoList = ref<Product[]>([]);
    const newItem = ref('');
    const fallbackImage = 'fallback.png';
    const isLoading = ref(true);

    const fetchTodoList = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>('https://shopping-list-ten-kohl.vercel.app/products.json');
        todoList.value = response.data.products.map((product: Product) => ({
          ...product,
          checked: false,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(fetchTodoList);

    const addTodo = () => {
      if (newItem.value.trim() === '') return;
      todoList.value.push({
        id: Date.now().toString(),
        title: newItem.value,
        base64Image: fallbackImage,
        description: 'No description available',
        price: 0,
        strikePrice: null,
        checked: false,
      });
      newItem.value = '';
    };

    const deleteCheckedItems = () => {
      todoList.value = todoList.value.filter(product => !product.checked);
    };

    return {
      todoList,
      newItem,
      fallbackImage,
      isLoading,
      addTodo,
      deleteCheckedItems,
    };
  },
};
</script>

