<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="(cartItems) in $store.state.cartItems" :key="cartItems.id" class="list-item">
        <img class="thumbnail" :src="cartItems.imageUrl" :alt="cartItems.name">
        <div class="description">
          <p>{{ cartItems.name }}</p>
          <span>{{ cartItems.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LearnNuxtCartList',
  data() {
    return {
      
    };
  },
  async fetch() {
    console.log('패치')
    await this.$store.dispatch('FETCH_CART_ITEMS')
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
  .list-wrapper {
    margin: 0.4rem 0;
  }
  .list-item {
    display: flex;
  }
  .thumbnail {
    width: 100px;
    height: 100px;
  }
  .description {
    padding: 2rem 1rem;
  }
</style>