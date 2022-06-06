<template>
  <div class="mypage_wrap">
    <h1>구독 결제 페이지</h1>
    <CustomLoading :api-loading="apiLoading" @load="loading = true"/>
    <div class="data" :class="{show: loading}">
      <ul>
        <li v-for="d in data" :key="d.id">
          <p>{{ d.name }}</p>
          <p>{{ d.price }}</p>
          <p>{{ d.imageUrl }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CustomLoading from '../../components/CustomLoading.vue';
export default {
    name: "LearnNuxtIndex",
    components: { CustomLoading },
    layout: "mypage",
    data() {
        return {
            apiLoading: false,
            loading: false,
            timer: null,
            data: null,
        };
    },
    async fetch() {
        await this.testData()
    },
    mounted() {
        
    },
    methods: {
        async testData() {
            this.apiLoading = true;
            const res = await this.$axios.get("http://localhost:3000/products");
            this.data = res.data;
            this.apiLoading = false;
        },
        async testData1() {
            const res = await this.$axios.get('http://localhost:3000/products')
            console.log('패치데이터2', res.data.length)
        },
        showData(data) {
            console.log("요고모요", data);
        },
        emitData() {
            console.log("에밋클릭");
            this.$emit("testData", "키득");
        }
    },
};
</script>

<style scoped>
  .swiper {
    height: 500px;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    display: flex;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    overflow: hidden;
  }
  .inner {
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1653624841499-6f24d064021f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center;
    background-size: cover;
  }
  .data {
    opacity: 0;
  }
  .data.show {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }
</style>