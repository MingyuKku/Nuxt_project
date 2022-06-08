<template>
  <div class="app">
    <NuxtLink to="/mypage">마이페이지</NuxtLink>
    <!-- <CustomLoading :api-loading="apiLoading" @load="loading = true"/> -->
    <main class="data" :class="{show: !loading}">
      <!-- :search-keyword="searchKeyword"
      @input="updateSearchKeyword" -->
      <SearchInput
        v-model="searchKeyword"
        @search="searchProduct"
      />
      <ul>
        <li
v-for="product in productsData" :key="product.id" class="item flex"
        @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl" :alt="product.name">
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductByKeyword } from '@/api/index'
export default {
  name: 'LearnNuxtMain',
  components: {
    SearchInput
  },
  // middleware(context) {
  //   context.store.commit('login', true)
  //   console.log('미들웨어',context.store.state.cartItems)
  // },
  async asyncData() {
    let apiLoading = true;
    const res = await axios.get('http://localhost:3000/products')
    const products = res.data.map(item=> {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }
    });
    apiLoading = false;
    return { productsData: products, apiLoading }
  },
  data() {
    return {
      searchKeyword: '',
      // apiLoading: false,
      loading: true,
    };
  },
  computed: {
    ...mapGetters(["isLogin"]),
  },
  mounted() {
    if(this.apiLoading === false) {
      this.loading = false;
    }
  },
  
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`)
    },
    async searchProduct() {
      this.loading = false
      this.apiLoading = true
      const res = await fetchProductByKeyword(this.searchKeyword)
      this.productsData = res.data.map(item=> {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        }
      })
      this.apiLoading = false;
    },
    routeToCartPage() {
      this.$router.push('/cart')
    }
  },
};
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: center;
  }
  .item {
    display: inline-block;
    width: 400px;
    height: 300px;
    text-align: center;
    margin: 0 0.5rem;
    cursor: pointer;
  }
  .product-image {
    width: 400px;
    height: 250px;
  }
  .app {
    position: relative;
  }
  .cart-wrapper {
    position: sticky;
    float: right;
    bottom: 50px;
    right: 50px;
  }
  .cart-wrapper .btn {
    display: inline-block;
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
  }
  .data {
    opacity: 0;
  }
  .data.show {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }
</style>