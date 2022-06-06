<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <CartList/>
    <div class="extra-panel"><button>구매하기</button></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartList from '@/components/CartList.vue';
export default {
    name: "LearnNuxtCart",
    
    components: {CartList},
    data() {
        return {};
    },
    async fetch() {
      console.log('카트패치')
      await this.$store.dispatch('FETCH_CART_ITEMS')
    },
    computed: {
        ...mapGetters(["cartItems"]),
    },
    watch: {
        cartItems(val) {
            console.log("와치", val);
        }
    },
    mounted() {
    },
    methods: {},
};
</script>

<style scoped>
  .container {
    margin: 2rem 10rem;
  }
  .list-title {
    font-weight: 700;
    font-size: 1.4rem;
  }
  .extra-panel {
    text-align: right;
    padding: 0.2rem 0;
  }
</style>