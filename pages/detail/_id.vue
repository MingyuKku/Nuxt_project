<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">장바구니 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/index'
export default {
  name: 'LearnNuxtId',
  async asyncData( {params} ) {
    const res = await fetchProductById(params.id)
    const product = res.data
    return { product }
  },
  data() {
    return {
      
    };
  },
  created() {
    // console.log('헤엑', this.$route)
  },
  mounted() {
    
  },

  methods: {
    async addToCart() {
      const res = await createCartItem(this.product);
      console.log('카드',res)
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart');
    },
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .product-image {
    width: 500px;
    height: 375px;
  }
  .side-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
    text-align: center;
    padding: 0 1rem;
  }
</style>