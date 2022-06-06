<template>
  <div>
    <h1>페스워드페이지</h1>
    <CustomLoading :api-loading="apiLoading" @load="loading = true"/>
    <div class="data" :class="{show: loading}">
      {{ data }}
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LearnNuxtPassword',
  layout: 'mypage',

  data() {
    return {
      mingyu: '밍구2',
      data: null,
      apiLoading: false,
      loading: false,
    };
  },
  async fetch() {
    if(!this.$store.state.isLogin) {
      if(this.$route.params.qnaId !== undefined) {
        await this.testData2();
      } else {
        await this.testData()
      }
    } else {
      this.$emit('test')
    }
  },
  mounted() {
    
  },

  methods: {
    async testData() {
      this.apiLoading = true;
      const res = await this.$axios.get('http://localhost:3000/products')
      this.data = res.data;
      this.apiLoading = false;
      console.log('패치데이터', res.data.length)
    },
    async testData2() {
      this.apiLoading = true;
      const res = await this.$axios.get('http://localhost:3000/products')
      this.data = res.data;
      this.apiLoading = false;
      console.log('패치데이터2', res.data.length)
    }
  },
};
</script>

<style scoped>
  .data {
    opacity: 0;
  }
  .data.show {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }
</style>