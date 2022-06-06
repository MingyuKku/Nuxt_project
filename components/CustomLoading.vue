<template>
  <div v-if="loading" class="spin_wrap" >
    <div class="sk-swing">
      <div class="sk-swing-dot"></div>
      <div class="sk-swing-dot"></div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'LearnNuxtCustomLoading',
  props: {
    apiLoading: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      loading: false,
      timer: null,
    };
  },
  watch: {
    apiLoading(val) {
      console.log('로딩컴포넌트와치', val)
      if(!val) {
        this.finish();
      } else {
        this.start();
      }
    }
  },
  created() {
    this.start();
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    start() {
      this.loading = true;
      if(!this.apiLoading) {
        this.finish();
      }
    },
    finish() {
      this.timer = setTimeout(()=> {
        this.loading = false;
        this.$emit('load', true)
      }, 500)
      
    }
  },
};
</script>

<style scoped>
  .spin_wrap {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px;
  }
</style>