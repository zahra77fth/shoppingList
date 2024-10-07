<template>
  <div class="flex items-center border border-gray-300 rounded p-2 relative">
    <div class="w-10 h-10 bg-gray-300 rounded mr-4">
      <img
          class="object-cover w-full h-full rounded"
          :data-src="product.base64Image ? product.base64Image : '/assets/fallback.png'"
          alt="Product"
          ref="lazyImage"
      />
    </div>

    <div class="flex-grow">
      <span class="font-medium">{{ product.title }}</span>
    </div>

    <div class="relative">
      <input
          type="checkbox"
          v-model="product.checked"
          class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-orange-600 checked:border-orange-600"
      />
      <span
          class="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          v-if="product.checked"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, ref } from 'vue';
import { Product } from '../types/types.ts';

export default defineComponent({
  name: 'ProductItem',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    const lazyImage = ref<HTMLImageElement | null>(null);

    const loadImage = (image: HTMLImageElement) => {
      const src = image.getAttribute('data-src');
      if (src) {
        image.src = src;
        image.removeAttribute('data-src');
      }
    };

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            loadImage(image);
            observer.unobserve(image);
          }
        });
      });

      if (lazyImage.value) {
        observer.observe(lazyImage.value);
      }
    });

    return { lazyImage };
  },
});
</script>
