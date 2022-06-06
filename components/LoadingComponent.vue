<template>
  <div v-if="loading" class="LoadingComponent_wrap">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'LearnNuxtLoadingComponent',

  data() {
    return {
      loading: false,
    };
  },

  mounted() {
    
  },

  methods: {
    // start() {
    //   this.loading = true;
    // },
    // finish() {
    //   console.log('머징')
    //   setTimeout(()=> {
    //     this.loading = false;
    //   }, 500)
      
    // }
  },
};
</script>

<style scoped>
  .LoadingComponent_wrap {
    position: fixed;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(180, 180, 180, 0.95);
  }
  .LoadingComponent_wrap>p {
    font-size: 300%;
    font-weight: 700;
    color: #333;
  }
</style>